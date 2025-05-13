import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    quote:
      "With Attivo, I've been able to track my daily activities and see real progress in my fitness journey. The insights are incredibly helpful!",
    name: "Karen Smith",
    position: "Fitness Enthusiast",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    quote:
      "As a personal trainer, I recommend Attivo to all my clients. The detailed analytics and progress tracking make it indispensable.",
    name: "Michael Rogers",
    position: "Personal Trainer",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100&q=80",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const { ref, isInView } = useScrollAnimation();

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="section bg-secondary" ref={ref}>
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Customers Says?
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-background rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <motion.blockquote
                className="text-xl text-gray-200 text-center mb-6"
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                "{testimonials[activeIndex].quote}"
              </motion.blockquote>

              <motion.div
                className="flex items-center justify-center"
                key={`profile-${activeIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-primary-100"
                />
                <div className="ml-4">
                  <p className="font-bold text-white">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-gray-300 text-sm">
                    {testimonials[activeIndex].position}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-4 mt-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.button
              onClick={handlePrev}
              className="rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-primary hover:text-white transition-colors border-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>
            <motion.button
              onClick={handleNext}
              className=" rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-primary hover:text-white transition-colors border-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
