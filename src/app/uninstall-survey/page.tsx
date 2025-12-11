'use client';

import { useState, useRef, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import surveyConfig from '@/data/uninstall-survey.json';
import DownloadModal from '@/components/download-modal/DownloadModal';

interface SurveyFormData {
  mainReason: string;
  satisfiedLevel: number | null;
  suggestions: string;
  beContacted: boolean;
  email: string;
}

interface QuestionConfig {
  id: string;
  questionNumber: number;
  isRequired: boolean;
  title: string;
  type: 'radio' | 'textarea';
  description?: string;
  placeholder?: string;
  options?: string[] | Array<{ value: any; label: string }>;
  additionalFields?: Array<{
    fieldId: string;
    type: string;
    label: string;
    placeholder: string;
    showWhen?: string;
    showWhenValue?: any;
    isRequired?: boolean;
  }>;
}

const questions = surveyConfig.questions as QuestionConfig[];

// Calculate total required questions
const TOTAL_REQUIRED_QUESTIONS = questions.filter((q) => q.isRequired).length;

export default function UninstallSurveyPage() {
  const [formData, setFormData] = useState<SurveyFormData>({
    mainReason: '',
    satisfiedLevel: null,
    suggestions: '',
    beContacted: false,
    email: '',
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [recaptchaSiteKey, setRecaptchaSiteKey] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Only set the sitekey on client side
    setRecaptchaSiteKey(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '');
  }, []);

  // Calculate progress based on answered questions
  // Progress increases automatically when user selects an answer
  // Each question is worth 25% (4 questions total = 100%)
  const isQuestionAnswered = (question: QuestionConfig): boolean => {
    if (question.id === 'mainReason') {
      return formData.mainReason !== '';
    } else if (question.id === 'satisfiedLevel') {
      return formData.satisfiedLevel !== null;
    } else if (question.id === 'suggestions') {
      // Optional question - always considered answered (user can skip it)
      // Count it as answered once user has reached this step
      return currentStep >= 2;
    } else if (question.id === 'beContacted') {
      // Only count as answered if user has reached this step (step 3)
      // If they selected "Yes", email must be provided
      if (currentStep < 3) {
        return false;
      }
      if (formData.beContacted) {
        return formData.email !== '';
      }
      // If beContacted is false and user is on step 3, it's answered
      return true;
    }
    return false;
  };

  const answeredQuestions = questions.filter((q) => isQuestionAnswered(q)).length;
  const progress = (answeredQuestions / questions.length) * 100;

  // Get current question number with optional marker
  const getQuestionNumber = (step: number): string => {
    const question = questions[step];
    if (!question) return '';
    return question.questionNumber.toString();
  };

  const handleNext = () => {
    // Mark current step as completed when moving to next step
    setCompletedSteps((prev) => new Set([...prev, currentStep]));

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (!formData.mainReason || formData.satisfiedLevel === null) {
      setSubmitStatus('error');
      return;
    }

    if (formData.beContacted && !formData.email) {
      setSubmitStatus('error');
      return;
    }

    // Mark current step as completed before submitting
    setCompletedSteps((prev) => new Set([...prev, currentStep]));

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      let recaptchaToken: string | null = null;

      if (recaptchaSiteKey && recaptchaRef.current) {
        recaptchaToken = await recaptchaRef.current.executeAsync();

        if (!recaptchaToken) {
          throw new Error('reCAPTCHA verification failed');
        }
      } else {
        // If reCAPTCHA is not configured, skip verification (for development)
        console.warn('reCAPTCHA not configured, skipping verification');
      }

      const response = await fetch('/api/uninstall-survey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Submission failed');
      }

      setSubmitStatus('success');
      recaptchaRef.current?.reset();
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      recaptchaRef.current?.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    const question = questions[currentStep];
    if (!question) return null;

    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-zinc-900">{question.title}</h2>
        {question.description && (
          <p className="text-zinc-600">{question.description}</p>
        )}
        {!question.isRequired && (
          <p className="text-zinc-600">(Optional)</p>
        )}

        {/* Render question based on type */}
        {question.type === 'radio' && question.options && (
          <div className="space-y-3">
            {question.options.map((option, idx) => {
              const optionValue = typeof option === 'string' ? option : option.value;
              const optionLabel = typeof option === 'string' ? option : option.label;
              const isChecked =
                question.id === 'mainReason'
                  ? formData.mainReason === optionValue
                  : question.id === 'satisfiedLevel'
                    ? formData.satisfiedLevel === optionValue
                    : question.id === 'beContacted'
                      ? formData.beContacted === optionValue
                      : false;

              return (
                <label
                  key={idx}
                  className="flex items-center p-4 border border-zinc-200 rounded-lg cursor-pointer hover:bg-zinc-50 transition-colors"
                >
                  <input
                    type="radio"
                    name={question.id}
                    value={typeof optionValue === 'boolean' ? String(optionValue) : String(optionValue)}
                    checked={isChecked}
                    onChange={(e) => {
                      if (question.id === 'mainReason') {
                        setFormData({ ...formData, mainReason: e.target.value });
                      } else if (question.id === 'satisfiedLevel') {
                        setFormData({ ...formData, satisfiedLevel: parseInt(e.target.value, 10) });
                      } else if (question.id === 'beContacted') {
                        const value = e.target.value === 'true';
                        setFormData({ ...formData, beContacted: value, email: '' });
                      }
                    }}
                    className="mr-3 w-4 h-4 text-brand-red"
                  />
                  <span className="text-zinc-700">
                    {typeof option === 'object' && 'value' in option
                      ? (typeof option.value === 'boolean' 
                          ? optionLabel 
                          : `${option.value} - ${optionLabel}`)
                      : optionLabel}
                  </span>
                </label>
              );
            })}
          </div>
        )}

        {question.type === 'textarea' && (
          <textarea
            value={formData.suggestions}
            onChange={(e) => setFormData({ ...formData, suggestions: e.target.value })}
            placeholder={question.placeholder || ''}
            className="w-full p-4 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent resize-none"
            rows={6}
          />
        )}

        {/* Render additional fields */}
        {question.additionalFields && question.additionalFields.map((field) => {
          const shouldShow = field.showWhen
            ? formData[field.showWhen as keyof SurveyFormData] === field.showWhenValue
            : true;

          if (!shouldShow) return null;

          return (
            <div key={field.fieldId} className="mt-4">
              <label className="block text-sm font-medium text-zinc-700 mb-2">
                {field.label}
              </label>
              <input
                type={field.type}
                value={formData[field.fieldId as keyof SurveyFormData] as string}
                onChange={(e) =>
                  setFormData({ ...formData, [field.fieldId]: e.target.value })
                }
                placeholder={field.placeholder}
                className="w-full p-4 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                required={field.isRequired}
              />
            </div>
          );
        })}
      </div>
    );
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  if (submitStatus === 'success') {
    return (
      <>
        <DownloadModal isOpen={isModalOpen} onClose={closeModal} />
        <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 gap-5">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center border-2 border-transparent bg-clip-padding" style={{ borderImage: 'linear-gradient(to right, #141414, #ef233c) 1' }}>
            <CheckCircle2 className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-green-700 mb-2">Thank You!</h1>
            <p className="text-zinc-600 mb-6">
              Your feedback has been submitted successfully. We appreciate you taking the time to help us improve.
            </p>
          </div>
          <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center border-2 border-transparent bg-clip-padding" style={{ borderImage: 'linear-gradient(to right, #141414, #ef233c) 1' }}>
            <h2 className="text-lg font-bold text-zinc-900 mb-2">We are sorry we let you down</h2>
            <p className="text-zinc-700 text-base mb-2">Give us a chance to improve</p>
            <button
              onClick={openModal}
              className="px-8 py-2 bg-gradient-to-r from-zinc-900 to-brand-red text-white rounded-md hover:bg-red-600 transition-colors font-semibold"
            >
              Download again
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-zinc-900 via-brand-red to-zinc-900 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x4">
            We're Sorry to See You Go
          </h1>
          <p className="text-zinc-600 text-lg">
            Your feedback helps us improve SileoTube for everyone.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-zinc-700">
              Question {getQuestionNumber(currentStep)} of {surveyConfig.questions.length}
            </span>
            <span className="text-sm text-zinc-500">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-zinc-200 rounded-full h-2">
            <div
              className="bg-brand-red h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6">
          {renderStep()}
        </div>

        {/* Navigation Buttons */}
        <div className={`flex justify-between items-center`}>
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className="px-6 py-3 border border-zinc-300 rounded-lg text-zinc-700 hover:bg-zinc-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            style={{ visibility: currentStep === 0 ? 'hidden' : 'visible' }}
          >
            Back
          </button>

          {currentStep < questions.length - 1 ? (
            <button
              onClick={handleNext}
              disabled={
                (questions[currentStep]?.id === 'mainReason' && !formData.mainReason) ||
                (questions[currentStep]?.id === 'satisfiedLevel' && formData.satisfiedLevel === null)
              }
              className="px-10 md:px-20 py-3 bg-gradient-to-r from-zinc-900 to-brand-red text-white rounded-lg hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={isSubmitting || (formData.beContacted && !formData.email)}
              className="px-6 py-3 bg-brand-red text-white rounded-lg hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          )}
        </div>

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <p className="text-red-700">
              Please fill in all required fields and try again.
            </p>
          </div>
        )}

        {/* reCAPTCHA */}
        {recaptchaSiteKey && (
          <div className="mt-6 flex justify-center">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={recaptchaSiteKey}
              size="invisible"
            />
          </div>
        )}
      </div>
    </div>
  );
}
