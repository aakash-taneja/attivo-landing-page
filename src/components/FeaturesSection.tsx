import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: "🔥",
    iconBg: "bg-red-900/30",
    title: "Activity Tracking",
    description:
      "Track your daily step count, distance, calories, and activity duration.",
  },
  {
    icon: "⚡",
    iconBg: "bg-blue-900/30",
    title: "Instant Analytics",
    description:
      "Get real-time data analysis of your workout with detailed statistics.",
  },
  {
    icon: "🔄",
    iconBg: "bg-green-900/30",
    title: "Daily Goal Tracker",
    description:
      "Set daily goals and track your progress towards achieving them.",
  },
  {
    icon: "📊",
    iconBg: "bg-orange-900/30",
    title: "Progress Charts",
    description:
      "Visualize your progress over time with beautiful interactive charts.",
  },
];

const FeaturesSection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="features" className="section bg-secondary">
      <div className="container">
        <motion.div
          className="mb-16"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Best Features We Offer For You
          </h2>
          <p className="text-gray-300 ">
            Discover the powerful features that make Sportivo the best choice
            for tracking and analyzing your fitness journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <div
                className={`${feature.iconBg} w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-5`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
