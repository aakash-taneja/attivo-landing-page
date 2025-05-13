import React from "react";
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
    question: "What is Attivo?",
    answer:
      "A sport social protocol that lets you track activity, share content, and earn rewards — all while building a verifiable athlete profile.",
  },
  {
    question: "How does Attivo reward users?",
    answer:
      "By converting real-world activity and social engagement into digital credentials and on-chain rewards.",
  },
  {
    question: "Do I need crypto to start?",
    answer:
      "No. You can sign up and start tracking with your regular login — Web3 features unlock as you grow.",
  },
  {
    question: "Is Attivo available for all devices?",
    answer:
      "Attivo is available for iOS and Android smartphones. It also integrates with popular wearable fitness devices and smartwatches for enhanced tracking capabilities.",
  },
];

const FaqSection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="faq" className="section bg-background" ref={ref}>
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border-gray-800"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-white">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 text-left">
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
