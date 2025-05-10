
import React from 'react';
import { Button } from "@/components/ui/button";

const DownloadSection = () => {
  return (
    <section className="section bg-primary text-white relative overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-3/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Download Now</h2>
            <p className="text-primary-100 mb-6">
              Get started with Sportivo today and take the first step towards a healthier, more active lifestyle.
              Download our app and join thousands of users who have transformed their fitness journey.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="secondary" className="gap-2 bg-white text-primary hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.5 12.5c0 .76-.32 1.45-.84 1.92l-5.08 4.24c-.38.32-.92.32-1.3 0l-5.08-4.24c-.52-.47-.84-1.16-.84-1.92V5.15c0-1.3 1.05-2.35 2.35-2.35h8.44c1.3 0 2.35 1.05 2.35 2.35v7.35z"/>
                </svg>
                App Store
              </Button>
              
              <Button variant="secondary" className="gap-2 bg-white text-primary hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5.3 3.2v17.6l7.7-8.8L5.3 3.2zm8.3 4.4l2.9 1.7L8.6 12l7.9 2.7L13.6 16l-4.7-8.4z"/>
                </svg>
                Google Play
              </Button>
            </div>
          </div>
          
          <div className="md:w-2/5">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=400&h=600&q=80"
                alt="Sportivo App on mobile phone" 
                className="mx-auto rounded-xl transform -rotate-6 shadow-2xl"
              />
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&h=600&q=80"
                alt="Sportivo App on mobile phone" 
                className="absolute -bottom-4 -right-4 w-3/4 rounded-xl transform rotate-6 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
