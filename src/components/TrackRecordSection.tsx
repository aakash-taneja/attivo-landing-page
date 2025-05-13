import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TrackRecordSection = () => {
  const { ref, isInView } = useScrollAnimation();

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.3 + i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <section id="activities" className="section bg-background" ref={ref}>
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="lovable-uploads/trackandrecord.png"
              alt="Activity tracking statistics"
              className="w-full"
            />
          </motion.div>

          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="text-primary font-semibold">
                ACCURATE TRACKING
              </span>
            </motion.div>

            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Track And Record Activity
            </motion.h2>

            <motion.p
              className="text-gray-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our advanced tracking algorithms ensure accurate measurement of
              your activities. Get real-time updates on your progress and see
              how you're performing against your goals.
            </motion.p>

            <div className="mb-8">
              <motion.div
                className="flex items-center gap-4 mb-4"
                custom={0}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={listItemVariants}
              >
                <div className="bg-primary-100 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="font-medium">
                  Accurate GPS tracking for outdoor activities
                </p>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 mb-4"
                custom={1}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={listItemVariants}
              >
                <div className="bg-primary-100 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="font-medium">
                  Detailed metrics for every workout
                </p>
              </motion.div>

              <motion.div
                className="flex items-center gap-4"
                custom={2}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={listItemVariants}
              >
                <div className="bg-primary-100 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="font-medium">Automatic activity detection</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{ display: "flex", justifyContent: "flex-start" }}
            >
              <Button>Learn More</Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackRecordSection;
