
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="section pt-10 md:pt-20">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 pr-0 md:pr-10">
            <span className="text-primary font-semibold mb-3 inline-block">SMART WORKOUT COMPANION</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Track And Analyze Your Activity</h1>
            <p className="text-gray-600 mb-8 text-lg">
              Get detailed insights on your workouts, track your progress, and optimize your fitness journey with our advanced analytics.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="px-8 py-6">Get Started</Button>
              <Button variant="outline" className="px-8 py-6">Learn More</Button>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="gradient-blur top-1/4 -left-20"></div>
            <div className="gradient-blur bottom-1/4 right-0"></div>
            <img 
              src="/lovable-uploads/hero-image.png" 
              alt="Sportivo App Screenshot" 
              className="w-full max-w-sm mx-auto animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
