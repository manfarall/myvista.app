import React from 'react';

const VISTALanding = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950" />
        
        <div className="container mx-auto px-6 relative z-10 text-center mt-48">
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Edit Videos with the Power of Your Hands
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Create stunning content in half the time with our intuitive gesture interface
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-full text-lg font-semibold transition-colors">
            Start Creating Now
          </button>
        </div>
      </header>

      {/* Features */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <FeatureCard
              icon={<Gesture />}
              title="Gesture Editing"
              description="Cut, filter and enhance your videos with natural hand movements."
            />
            <FeatureCard
              icon={<Wand />}
              title="Smart Timing Correction"
              description="Our AI automatically adjusts cuts to the perfect moments."
            />
            <FeatureCard
              icon={<Cloud />} 
              title="Cloud Sync"
              description="Access your projects from any device, anytime."
            />
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-32 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">
            Ready to Revolutionize Your Video Editing?
          </h2>
          <button className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-full text-lg font-semibold transition-colors">
            Join the Revolution
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 VISTA. Transforming video editing.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-indigo-500/30 transition-colors">
      <div className="text-indigo-400 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default VISTALanding;

