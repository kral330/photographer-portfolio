'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Photo {
  id: number;
  title: string;
  category: 'weddings' | 'portraits' | 'events' | 'commercial';
  image: string;
  description: string;
}

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Mock data - Replace with API call
  const photos: Photo[] = [
    {
      id: 1,
      title: 'Wedding Day - Sarah & John',
      category: 'weddings',
      image: '💍',
      description: 'Beautiful wedding ceremony',
    },
    {
      id: 2,
      title: 'Portrait Session - Emma',
      category: 'portraits',
      image: '👤',
      description: 'Professional portrait',
    },
    {
      id: 3,
      title: 'Corporate Event Coverage',
      category: 'events',
      image: '🎤',
      description: 'Corporate event photography',
    },
    {
      id: 4,
      title: 'Product Photography',
      category: 'commercial',
      image: '📦',
      description: 'Commercial product shoot',
    },
    {
      id: 5,
      title: 'Engagement Session',
      category: 'weddings',
      image: '💑',
      description: 'Romantic engagement shoot',
    },
    {
      id: 6,
      title: 'Family Portraits',
      category: 'portraits',
      image: '👨‍👩‍👧‍👦',
      description: 'Family photo session',
    },
    {
      id: 7,
      title: 'Conference Coverage',
      category: 'events',
      image: '📊',
      description: 'Conference documentation',
    },
    {
      id: 8,
      title: 'Brand Photography',
      category: 'commercial',
      image: '🏢',
      description: 'Brand lifestyle photography',
    },
    {
      id: 9,
      title: 'Beach Wedding',
      category: 'weddings',
      image: '🏖️',
      description: 'Destination wedding',
    },
    {
      id: 10,
      title: 'Headshots',
      category: 'portraits',
      image: '🎬',
      description: 'Professional headshots',
    },
    {
      id: 11,
      title: 'Festival Photography',
      category: 'events',
      image: '🎭',
      description: 'Festival event coverage',
    },
    {
      id: 12,
      title: 'Real Estate Photos',
      category: 'commercial',
      image: '🏠',
      description: 'Real estate photography',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'weddings', label: 'Weddings' },
    { id: 'portraits', label: 'Portraits' },
    { id: 'events', label: 'Events' },
    { id: 'commercial', label: 'Commercial' },
  ];

  const filteredPhotos = selectedCategory === 'all'
    ? photos
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <div className="min-h-screen bg-secondary py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our complete collection of photography work across different categories and styles.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-accent text-primary'
                  : 'bg-white text-primary border-2 border-accent hover:border-accent hover:bg-accent hover:text-primary'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 h-80 cursor-pointer"
            >
              {/* Placeholder - Replace with actual image */}
              <div className="w-full h-full bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center text-6xl hover:from-accent/40 hover:to-accent/20 transition-all duration-300">
                {photo.image}
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col gap-4 p-4">
                <h3 className="text-white text-xl font-bold text-center">{photo.title}</h3>
                <p className="text-gray-300 text-sm text-center">{photo.description}</p>
                <button className="mt-4 bg-accent text-primary px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                  View Details
                </button>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 right-4 bg-accent text-primary px-3 py-1 rounded-full text-sm font-semibold capitalize">
                {photo.category}
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredPhotos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No photos found in this category.</p>
          </div>
        )}

        {/* Stats Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <p className="text-gray-600">Photos Taken</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">150+</div>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <p className="text-gray-600">Weddings</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">10+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-gray-900 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Working Together?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's create beautiful memories together. Get in touch to discuss your photography needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="bg-accent text-primary px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all"
            >
              Book Now
            </Link>
            <Link
              href="/contact"
              className="border-2 border-accent text-accent px-8 py-3 rounded-lg font-bold hover:bg-accent hover:text-primary transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
