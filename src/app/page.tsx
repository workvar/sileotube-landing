'use client';

import { useState } from 'react';
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

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-background text-zinc-900 selection:bg-brand-red/10">
      <Navbar onOpenModal={openModal} />
      <DownloadModal isOpen={isModalOpen} onClose={closeModal} />
      
      <main>
        <Hero onOpenModal={openModal} />
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

