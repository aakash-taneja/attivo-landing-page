
import React from 'react';
import { Button } from "@/components/ui/button";

const TrackRecordSection = () => {
  return (
    <section id="activities" className="section">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400&q=80" 
              alt="Activity tracking statistics" 
              className="w-full rounded-xl shadow-lg"
            />
          </div>
          
          <div className="md:w-1/2">
            <div className="mb-4">
              <span className="text-primary font-semibold">ACCURATE TRACKING</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Track And Record Activity</h2>
            <p className="text-gray-600 mb-6">
              Our advanced tracking algorithms ensure accurate measurement of your activities. 
              Get real-time updates on your progress and see how you're performing against your goals.
            </p>
            
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-medium">Accurate GPS tracking for outdoor activities</p>
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-medium">Detailed metrics for every workout</p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-primary-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-medium">Automatic activity detection</p>
              </div>
            </div>
            
            <Button>Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackRecordSection;
