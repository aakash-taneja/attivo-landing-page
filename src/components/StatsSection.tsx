
import React from 'react';

const StatsSection = () => {
  return (
    <section className="bg-primary py-12">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="stat">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">5+</h3>
            <p className="text-primary-100">Years Experience</p>
          </div>
          
          <div className="stat">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">900</h3>
            <p className="text-primary-100">Active Users</p>
          </div>
          
          <div className="stat">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">15K+</h3>
            <p className="text-primary-100">Downloads</p>
          </div>
          
          <div className="stat">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">120K+</h3>
            <p className="text-primary-100">Tracked Activities</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
