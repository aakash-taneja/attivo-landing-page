import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: "🏃",
    iconBg: "bg-red-900/30",
    title: "Verifiable Activity Tracking",
    description:
      "Track your workouts, games, and training sessions — every step, every rep, every goal counts.",
  },
  {
    icon: "📱",
    iconBg: "bg-blue-900/30",
    title: "Sport ID (Athlete Profile)",
    description:
      "Create a dynamic on-chain athletic identity. Earn Title NFTs, badges, and reputation by being active.",
  },
  {
    icon: "🤝",
    iconBg: "bg-green-900/30",
    title: "Social Platform for Athletes",
    description:
      "Post your progress, share highlight moments, engage with fellow movers, and receive support from fans.",
  },
  {
    icon: "🎖",
    iconBg: "bg-orange-900/30",
    title: "Daily Challenges & Streaks",
    description:
      "Stay consistent with AI-verified daily challenges and unlock exclusive rewards for sticking with your grind.",
  },
];

const FeaturesSection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="features" className="section bg-secondary">
      <div className="container">
        <motion.div
          className="mb-16 flex flex-col items-center text-center"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Built for Movers, Creators, and Champions
          </h2>
          <p className="text-gray-300 max-w-3xl">
            Attivo is more than a fitness tracker. It’s your sport social
            passport — combining movement data, content, and community in a
            seamless Web3-powered platform.
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
