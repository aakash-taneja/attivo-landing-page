
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const InsightsSection = () => {
  const { ref, isInView } = useScrollAnimation();
  
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({ 
      opacity: 1, 
      x: 0, 
      transition: { delay: 0.3 + i * 0.1, duration: 0.5 } 
    })
  };

  return (
    <section id="insights" className="section bg-secondary" ref={ref}>
      <div className="container">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="text-primary font-semibold">DAILY GUIDE</span>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Health Insights Your Daily Guide
            </motion.h2>
            
            <motion.p 
              className="text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Receive daily health insights based on your activities and goals. 
              Our AI-powered recommendations help you make better decisions for your fitness journey.
            </motion.p>
            
            <div className="mb-8">
              <motion.div 
                className="flex items-center gap-4 mb-4"
                custom={0}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={listItemVariants}
              >
                <div className="bg-primary/20 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-medium text-white">Personalized daily tips</p>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4 mb-4"
                custom={1}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={listItemVariants}
              >
                <div className="bg-primary/20 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-medium text-white">Health trend analysis</p>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4"
                custom={2}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={listItemVariants}
              >
                <div className="bg-primary/20 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-medium text-white">Nutrition and activity correlation</p>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button className="bg-primary hover:bg-primary-600 text-white">Learn More</Button>
            </motion.div>
          </div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=600&h=400&q=80" 
              alt="Health insights and analytics" 
              className="w-full rounded-xl shadow-lg border border-white/10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
