import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="section pt-10 md:pt-20 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-12 md:mb-0 pr-0 md:pr-10"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <motion.span
              className="text-primary font-semibold mb-3 inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              ENERGIZE YOUR GAME
            </motion.span>
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Reward Your Stats, Elevate Your Life!
            </motion.h1>
            <motion.p
              className="text-gray-300 mb-8 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Get detailed insights on your workouts, track your progress, and
              optimize your fitness journey with our advanced analytics.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button className="px-8 py-6 bg-primary hover:bg-primary-600 text-white">
                Get Started
              </Button>
              <Button
                variant="outline"
                className="px-8 py-6 border-primary text-primary hover:bg-primary/10"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:w-1/2 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
          >
            <div className="gradient-blur top-1/4 -left-20"></div>
            <div className="gradient-blur bottom-1/4 right-0"></div>
            <img
              src="/lovable-uploads/hero-image.png"
              alt="Sportivo App Screenshot"
              className="w-full max-w-sm mx-auto animate-float"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
