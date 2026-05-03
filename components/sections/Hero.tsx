'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen bg-gradient-to-br from-primary via-primary to-gray-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className={`text-center px-4 max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-accent">
            Capture Your Moments
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Professional photography services that tell your unique story with artistry and passion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="bg-accent text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
            >
              Book a Session
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-accent text-accent px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent hover:text-primary transition-all"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
