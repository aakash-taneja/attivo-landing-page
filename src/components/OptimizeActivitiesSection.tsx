
import React from 'react';
import { Button } from "@/components/ui/button";

const OptimizeActivitiesSection = () => {
  return (
    <section id="optimize" className="section bg-gray-50">
      <div className="container">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="mb-4">
              <span className="text-primary font-semibold">PERSONALIZED INSIGHTS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Optimize Activities Easy Integration</h2>
            <p className="text-gray-600 mb-6">
              Integrate with your favorite devices and apps to consolidate all your fitness data. 
              Get personalized recommendations to optimize your workouts and achieve better results.
            </p>
            
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-medium">Connect with wearable fitness devices</p>
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-medium">Import data from other fitness apps</p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-primary-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-medium">Sync across all your devices</p>
              </div>
            </div>
            
            <Button>Learn More</Button>
          </div>
          
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=600&h=400&q=80" 
              alt="Integration with fitness devices" 
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptimizeActivitiesSection;
