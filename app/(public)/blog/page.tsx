'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: number;
}

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Mock data - Replace with API call
  const posts: BlogPost[] = [
    {
      id: 1,
      title: 'Top 10 Photography Tips for Beginners',
      slug: 'top-10-photography-tips',
      excerpt: 'Learn essential photography techniques that will improve your images immediately.',
      content: 'Full content here...',
      author: 'Alex Photographer',
      date: '2026-04-28',
      category: 'tips',
      image: '📸',
      readTime: 5,
    },
    {
      id: 2,
      title: 'How to Prepare for Your Wedding Day Photos',
      slug: 'wedding-photo-prep',
      excerpt: 'Complete guide to preparing yourself and your family for stunning wedding photography.',
      content: 'Full content here...',
      author: 'Sarah Johnson',
      date: '2026-04-25',
      category: 'weddings',
      image: '💍',
      readTime: 8,
    },
    {
      id: 3,
      title: 'Mastering Portrait Lighting Techniques',
      slug: 'portrait-lighting',
      excerpt: 'Discover professional lighting setups that will transform your portrait photography.',
      content: 'Full content here...',
      author: 'Mike Chen',
      date: '2026-04-20',
      category: 'techniques',
      image: '💡',
      readTime: 10,
    },
    {
      id: 4,
      title: 'The Best Locations for Family Photos',
      slug: 'best-family-photo-locations',
      excerpt: 'Explore stunning outdoor and indoor locations perfect for family photography sessions.',
      content: 'Full content here...',
      author: 'Emma Davis',
      date: '2026-04-15',
      category: 'locations',
      image: '🌳',
      readTime: 6,
    },
    {
      id: 5,
      title: 'Event Photography: Behind the Scenes',
      slug: 'event-photography-behind-scenes',
      excerpt: 'Learn what goes into capturing perfect moments at corporate and social events.',
      content: 'Full content here...',
      author: 'Alex Photographer',
      date: '2026-04-10',
      category: 'events',
      image: '🎉',
      readTime: 7,
    },
    {
      id: 6,
      title: 'Post-Processing Workflow for Professional Results',
      slug: 'post-processing-workflow',
      excerpt: 'Master the art of photo editing to achieve consistent, professional-looking results.',
      content: 'Full content here...',
      author: 'James Wilson',
      date: '2026-04-05',
      category: 'editing',
      image: '🖼️',
      readTime: 12,
    },
  ];

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'tips', label: 'Tips & Tricks' },
    { id: 'weddings', label: 'Weddings' },
    { id: 'techniques', label: 'Techniques' },
    { id: 'locations', label: 'Locations' },
    { id: 'events', label: 'Events' },
    { id: 'editing', label: 'Editing' },
  ];

  const filteredPosts = selectedCategory === 'all'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-secondary py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Photography Blog</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Tips, tricks, and insights from our professional photography team. Learn, grow, and improve your skills.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 text-sm ${
                selectedCategory === category.id
                  ? 'bg-accent text-primary'
                  : 'bg-white text-primary border-2 border-gray-300 hover:border-accent'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Featured Image */}
              <div className="relative h-48 bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center text-5xl overflow-hidden">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {post.image}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="mb-3">
                  <span className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-semibold uppercase">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 text-primary group-hover:text-accent transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-1">
                    <FaCalendar className="text-accent" />
                    {formatDate(post.date)}
                  </div>
                  <div className="flex items-center gap-1">
                    <span>📖</span>
                    {post.readTime} min read
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center gap-2 mb-4">
                  <FaUser className="text-accent text-xs" />
                  <span className="text-xs text-gray-600">{post.author}</span>
                </div>

                {/* Read More Link */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:text-primary transition-all group/link"
                >
                  Read More
                  <FaArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* No Results Message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No blog posts found in this category.</p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-primary to-gray-900 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get the latest photography tips, tutorials, and special offers delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-primary focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
            <button
              type="submit"
              className="bg-accent text-primary px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
