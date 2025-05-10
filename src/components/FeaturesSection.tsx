
import React from 'react';
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: "🔥",
    iconBg: "bg-red-100",
    title: "Activity Tracking",
    description: "Track your daily step count, distance, calories, and activity duration."
  },
  {
    icon: "⚡",
    iconBg: "bg-blue-100",
    title: "Instant Analytics",
    description: "Get real-time data analysis of your workout with detailed statistics."
  },
  {
    icon: "🔄",
    iconBg: "bg-green-100",
    title: "Daily Goal Tracker",
    description: "Set daily goals and track your progress towards achieving them."
  },
  {
    icon: "📊",
    iconBg: "bg-orange-100",
    title: "Progress Charts",
    description: "Visualize your progress over time with beautiful interactive charts."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section bg-gray-50">
      <div className="container">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Best Features We Offer For You</h2>
          <p className="text-gray-600 max-w-2xl">Discover the powerful features that make Sportivo the best choice for tracking and analyzing your fitness journey.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className={`${feature.iconBg} w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-5`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
