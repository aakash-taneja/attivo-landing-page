
import React from 'react';
import { Button } from "@/components/ui/button";

const PerformanceSection = () => {
  return (
    <section id="performance" className="section">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=400&q=80" 
              alt="Performance charts" 
              className="w-full rounded-xl shadow-lg"
            />
          </div>
          
          <div className="md:w-1/2">
            <div className="mb-4">
              <span className="text-primary font-semibold">PERFORMANCE METRICS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Measure Your Performance</h2>
            <p className="text-gray-600 mb-6">
              Track key performance indicators to understand your fitness progress. 
              Our detailed analytics help you identify strengths and areas for improvement.
            </p>
            
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-medium">Personalized performance indicators</p>
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-medium">Weekly and monthly progress reports</p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-primary-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-medium">Compare performance with previous periods</p>
              </div>
            </div>
            
            <Button>View Demo</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
