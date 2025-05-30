import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const tips = [
  {
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&h=400&q=80",
    category: "Running",
    title: "Unlock Your Potential: Running Fundamentals",
  },
  {
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=600&h=400&q=80",
    category: "Swimming",
    title: "Advanced Swimming Techniques",
  },
  {
    image:
      "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=600&h=400&q=80",
    category: "Workout Strategies",
    title: "Maximize Your Gym Time",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=600&h=400&q=80",
    category: "Hiking",
    title: "Explore Nature: Hiking Tips for Beginners",
  },
];

const TipsSection = () => {
  const { ref, isInView } = useScrollAnimation();

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="section bg-background" ref={ref}>
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Find Some Tips
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover expert advice to improve your workouts, nutrition, and
            overall fitness journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg group"
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={tip.image}
                  alt={tip.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <span className="text-primary text-sm font-medium">
                  {tip.category}
                </span>
                <h3 className="text-lg font-bold mt-1 mb-3">{tip.title}</h3>
                <a
                  href="#"
                  className="text-primary font-medium inline-flex items-center"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TipsSection;
