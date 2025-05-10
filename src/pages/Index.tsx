
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import TrackRecordSection from '@/components/TrackRecordSection';
import OptimizeActivitiesSection from '@/components/OptimizeActivitiesSection';
import PerformanceSection from '@/components/PerformanceSection';
import InsightsSection from '@/components/InsightsSection';
import StatsSection from '@/components/StatsSection';
import TipsSection from '@/components/TipsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import DownloadSection from '@/components/DownloadSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TrackRecordSection />
        <OptimizeActivitiesSection />
        <PerformanceSection />
        <InsightsSection />
        <StatsSection />
        <TipsSection />
        <TestimonialsSection />
        <FaqSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
