import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { mainReason, satisfiedLevel, suggestions, beContacted, email, recaptchaToken } = body;

    // Verify reCAPTCHA (if configured)
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    
    if (recaptchaSecret) {
      // reCAPTCHA is configured, so verification is required
      if (!recaptchaToken) {
        return NextResponse.json(
          { error: 'reCAPTCHA verification required' },
          { status: 400 }
        );
      }

      const recaptchaResponse = await fetch(
        'https://www.google.com/recaptcha/api/siteverify',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `secret=${recaptchaSecret}&response=${recaptchaToken}`,
        }
      );

      const recaptchaData = await recaptchaResponse.json();
      if (!recaptchaData.success) {
        return NextResponse.json(
          { error: 'reCAPTCHA verification failed' },
          { status: 400 }
        );
      }
    } else if (process.env.NODE_ENV === 'production') {
      // In production, reCAPTCHA should be configured
      return NextResponse.json(
        { error: 'reCAPTCHA not configured' },
        { status: 500 }
      );
    }
    // In development, allow submission without reCAPTCHA if not configured

    // Validate required fields
    if (!mainReason || satisfiedLevel === undefined || satisfiedLevel === null) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Prepare data for Supabase
    const surveyData = {
      'main-reason': mainReason,
      'satisfied-level': parseInt(satisfiedLevel, 10),
      suggestions: suggestions || null,
      'be-contacted': beContacted || false,
      email: beContacted && email ? email : null,
      'has-been-contacted': false,
    };

    // Insert into Supabase
    const { data, error } = await supabase
      .from('sileotube-uninstall-survey')
      .insert([surveyData])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to save survey response' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
