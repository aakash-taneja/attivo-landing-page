import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#121212]">
      <motion.nav
        className="py-4 px-6 md:px-10 flex items-center justify-between bg-[#121212] backdrop-blur-md sticky top-0 z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-primary">
            Attivo
          </a>
        </div>

        <div className="hidden md:flex space-x-8">
          <a
            href="#features"
            className="text-white font-medium hover:text-primary transition-colors"
          >
            Features
          </a>
          <a
            href="#activities"
            className="text-white font-medium hover:text-primary transition-colors"
          >
            Activities
          </a>
          <a
            href="#performance"
            className="text-white font-medium hover:text-primary transition-colors"
          >
            Performance
          </a>
          <a
            href="#insights"
            className="text-white font-medium hover:text-primary transition-colors"
          >
            Insights
          </a>
          <a
            href="#faq"
            className="text-white font-medium hover:text-primary transition-colors"
          >
            FAQ
          </a>
        </div>

        <div className="hidden md:block">
          <Button className="bg-primary hover:bg-primary-600 text-white">
            Join Waitlist
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute top-16 right-0 left-0 bg-black/80 backdrop-blur-md shadow-lg z-50 py-5 px-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-white font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#activities"
                className="text-white font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Activities
              </a>
              <a
                href="#performance"
                className="text-white font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Performance
              </a>
              <a
                href="#insights"
                className="text-white font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Insights
              </a>
              <a
                href="#faq"
                className="text-white font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <Button
                className="w-full bg-primary hover:bg-primary-600 text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Waitlist
              </Button>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </div>
  );
};

export default Navbar;
