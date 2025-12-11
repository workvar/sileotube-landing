'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/navbar/Navbar';
import Hero from '@/components/hero/Hero';
import Showcase from '@/components/showcase/Showcase';
import Features from '@/components/features/Features';
import Customization from '@/components/customization/Customization';
import Science from '@/components/science/Science';
import Testimonials from '@/components/testimonials/Testimonials';
import Footer from '@/components/footer/Footer';
import DownloadModal from '@/components/download-modal/DownloadModal';
import CTASection from '@/components/cta-section/CTASection';

function HomeContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const searchParams = useSearchParams();
  const redirectType = searchParams.get('redirectType');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-background text-zinc-900 selection:bg-brand-red/10">
      <Navbar onOpenModal={openModal} />
      <DownloadModal isOpen={isModalOpen} onClose={closeModal} />
      
      <main>
        <Hero onOpenModal={openModal} isInstallRedirect={redirectType === 'install'} />
        <Showcase />
        <Features />
        <Customization />
        <Science />
        <Testimonials />
        <CTASection onOpenModal={openModal} />
      </main>
      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background text-zinc-900">
        <Navbar onOpenModal={() => {}} />
      </div>
    }>
      <HomeContent />
    </Suspense>
  );
}

