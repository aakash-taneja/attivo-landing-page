
import React from 'react';
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const StatsSection = () => {
  const { ref, isInView } = useScrollAnimation();
  
  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: 0.2 * i,
        duration: 0.6,
        ease: "easeOut"
      } 
    })
  };

  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "900", label: "Active Users" },
    { value: "15K+", label: "Downloads" },
    { value: "120K+", label: "Tracked Activities" }
  ];

  return (
    <section className="bg-primary py-12" ref={ref}>
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              className="stat"
              key={index}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={statVariants}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-primary-100">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
