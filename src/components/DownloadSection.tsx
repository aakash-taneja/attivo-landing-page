import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const DownloadSection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      className="section bg-primary text-white relative overflow-hidden"
      ref={ref}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            className="md:w-3/5"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Available soon on iOS and Android
            </h2>
            <p className="text-primary-100 mb-6">
              Get started with Attivo today and take the first step towards a
              healthier, more active lifestyle. Download our app and join
              thousands of users who have transformed their fitness journey.
            </p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src="/lovable-uploads/app-store-soon.png"
                  alt="App Store"
                  className="h-10 w-30"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src="/lovable-uploads/play-store-soon.png"
                  alt="App Store"
                  className="h-10 w-30"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:w-2/5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div
              className="relative"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <motion.img
                src="/lovable-uploads/attivo-logo-new.jpg"
                alt="Sportivo App on mobile phone"
                className="w-1/2 rounded-xl transform shadow-2xl border border-white/10"
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
