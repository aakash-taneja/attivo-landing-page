
import React from 'react';

const testimonials = [
  {
    quote: "With Sportivo, I've been able to track my daily activities and see real progress in my fitness journey. The insights are incredibly helpful!",
    name: "Karen Smith",
    position: "Fitness Enthusiast",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    quote: "As a personal trainer, I recommend Sportivo to all my clients. The detailed analytics and progress tracking make it indispensable.",
    name: "Michael Rogers",
    position: "Personal Trainer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100&q=80"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Customers Says?</h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="relative">
              <blockquote className="text-xl text-gray-700 text-center mb-6">
                "{testimonials[activeIndex].quote}"
              </blockquote>
              
              <div className="flex items-center justify-center">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-primary-100"
                />
                <div className="ml-4">
                  <p className="font-bold">{testimonials[activeIndex].name}</p>
                  <p className="text-gray-600 text-sm">{testimonials[activeIndex].position}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4 mt-6">
            <button 
              onClick={handlePrev}
              className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-primary hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={handleNext}
              className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-primary hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
