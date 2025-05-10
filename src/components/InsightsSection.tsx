
import React from 'react';
import { Button } from "@/components/ui/button";

const InsightsSection = () => {
  return (
    <section id="insights" className="section bg-gray-50">
      <div className="container">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="mb-4">
              <span className="text-primary font-semibold">DAILY GUIDE</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Health Insights Your Daily Guide</h2>
            <p className="text-gray-600 mb-6">
              Receive daily health insights based on your activities and goals. 
              Our AI-powered recommendations help you make better decisions for your fitness journey.
            </p>
            
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-medium">Personalized daily tips</p>
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-medium">Health trend analysis</p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-primary-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-medium">Nutrition and activity correlation</p>
              </div>
            </div>
            
            <Button>Learn More</Button>
          </div>
          
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=600&h=400&q=80" 
              alt="Health insights and analytics" 
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
