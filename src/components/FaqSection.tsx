
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "What is Sportivo?",
    answer: "Sportivo is a comprehensive fitness tracking application that helps users monitor their physical activities, set fitness goals, track progress, and gain valuable insights about their health and performance."
  },
  {
    question: "How does Sportivo work?",
    answer: "Sportivo uses advanced algorithms to track your activities through your smartphone or wearable device. It monitors metrics such as steps, distance, calories burned, and active minutes, then provides detailed analytics and personalized insights."
  },
  {
    question: "What are the key features of Sportivo?",
    answer: "Key features include activity tracking, workout analytics, goal setting, progress charts, integration with wearable devices, personalized recommendations, nutrition tracking, and social community features."
  },
  {
    question: "Can Sportivo Track Indoor Activities?",
    answer: "Yes, Sportivo can track various indoor activities including treadmill running, stationary cycling, indoor swimming, weightlifting, yoga, and more through manual logging or automatic detection with compatible devices."
  },
  {
    question: "Is Sportivo available for all devices?",
    answer: "Sportivo is available for iOS and Android smartphones. It also integrates with popular wearable fitness devices and smartwatches for enhanced tracking capabilities."
  }
];

const FaqSection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="faq" className="section" ref={ref}>
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
