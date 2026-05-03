'use client';

import Link from 'next/link';
import { FaCalendar, FaUser, FaArrowLeft, FaShare2 } from 'react-icons/fa';
import { useParams } from 'next/navigation';

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

const BlogPostPage = () => {
  const params = useParams();
  const slug = params.slug as string;

  // Mock data - Replace with API call based on slug
  const allPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Top 10 Photography Tips for Beginners',
      slug: 'top-10-photography-tips',
      excerpt: 'Learn essential photography techniques that will improve your images immediately.',
      content: `
        <h2>Introduction</h2>
        <p>Photography is an art form that requires practice, patience, and knowledge. Whether you're using a smartphone or a professional camera, these tips will help you take better photos.</p>
        
        <h2>1. Understand the Rule of Thirds</h2>
        <p>The rule of thirds is one of the most important composition techniques. Imagine dividing your frame into nine equal parts using two equally-spaced horizontal lines and two equally-spaced vertical lines. Place your subject along these lines or at their intersections for more dynamic and engaging photos.</p>
        
        <h2>2. Master Your Camera Settings</h2>
        <p>Understanding aperture, shutter speed, and ISO is crucial for controlling exposure and creating the desired effect. Experiment with different settings to understand how they affect your images.</p>
        
        <h2>3. Use Natural Lighting</h2>
        <p>Natural light is often the best light source for photography. Shoot during the golden hour (just after sunrise or before sunset) for warm, flattering light. Avoid harsh midday sun when possible.</p>
        
        <h2>4. Focus on Composition</h2>
        <p>Good composition can transform an ordinary scene into a compelling photograph. Pay attention to leading lines, depth of field, and negative space in your images.</p>
        
        <h2>5. Get to Know Your Focal Length</h2>
        <p>Different focal lengths create different perspectives. Wide-angle lenses capture more of the scene, while telephoto lenses compress the background. Experiment with different focal lengths to find what works best.</p>
        
        <h2>Conclusion</h2>
        <p>Photography is a journey of continuous learning. These tips are just the beginning. Keep practicing, studying other photographers' work, and developing your unique style.</p>
      `,
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
      content: `
        <h2>Introduction</h2>
        <p>Your wedding day is one of the most important days of your life, and the photographs will be cherished for years to come. Proper preparation ensures you get beautiful, memorable images.</p>
        
        <h2>Timeline and Schedule</h2>
        <p>Discuss the photography timeline with your photographer weeks in advance. Plan when the photographer will arrive, which events to capture, and allocate time for family portraits and couple photos.</p>
        
        <h2>Hair and Makeup</h2>
        <p>Schedule hair and makeup with enough time before the photography session. Professional hair and makeup will look better in photos and will last longer throughout the day.</p>
        
        <h2>Location Scouting</h2>
        <p>Visit your venue with your photographer beforehand. This helps identify the best lighting, backgrounds, and angles for your photos. Scout outdoor locations if you plan to have an outdoor photo session.</p>
        
        <h2>Family Group Planning</h2>
        <p>Create a detailed list of all the family combinations you want photographed. This saves time on the wedding day and ensures no one is left out.</p>
        
        <h2>Wardrobe Coordination</h2>
        <p>Ensure all wedding party members know what they're wearing well in advance. Coordinate colors and styles to create a cohesive look in your photographs.</p>
        
        <h2>Conclusion</h2>
        <p>With proper preparation, your wedding photography session will go smoothly and result in beautiful images that you'll treasure forever.</p>
      `,
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
      content: `
        <h2>Introduction</h2>
        <p>Lighting is one of the most crucial elements of portrait photography. Mastering different lighting techniques will dramatically improve the quality of your portraits.</p>
        
        <h2>Key Light Setup</h2>
        <p>The key light is your main light source. Position it at approximately 45 degrees to the subject and slightly above eye level. This creates dimension and helps define facial features.</p>
        
        <h2>Fill Light</h2>
        <p>Use a fill light or reflector on the opposite side of the key light to soften shadows. This creates a more flattering, professional-looking portrait.</p>
        
        <h2>Back Light (Rim Light)</h2>
        <p>A back light positioned behind the subject helps separate them from the background and adds dimension to the portrait.</p>
        
        <h2>Natural Light Portraits</h2>
        <p>For outdoor portraits, use natural light strategically. Position your subject so the sun creates a rim light, or use overcast days for soft, diffused light.</p>
        
        <h2>Common Mistakes to Avoid</h2>
        <p>Avoid placing your main light too far to the side, which can create unflattering shadows. Don't forget about catch lights in the eyes, which bring life to your portraits.</p>
        
        <h2>Conclusion</h2>
        <p>Experiment with different lighting setups to discover what works best for your style. Consistent practice will make you a master of portrait lighting.</p>
      `,
      author: 'Mike Chen',
      date: '2026-04-20',
      category: 'techniques',
      image: '💡',
      readTime: 10,
    },
  ];

  const post = allPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-secondary py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:text-primary transition-all"
            >
              <FaArrowLeft />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Get related posts (same category, different post)
  const relatedPosts = allPosts
    .filter(p => p.category === post.category && p.slug !== slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-secondary py-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-accent font-semibold hover:text-primary transition-all mb-8"
        >
          <FaArrowLeft />
          Back to Blog
        </Link>

        <article className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-8">
            <div className="mb-4">
              <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold uppercase">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <p className="text-xl text-gray-600 mb-6">{post.excerpt}</p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 pb-6 border-b border-gray-300">
              <div className="flex items-center gap-2">
                <FaUser className="text-accent" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendar className="text-accent" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📖</span>
                <span>{post.readTime} min read</span>
              </div>
              <button className="flex items-center gap-2 text-accent hover:text-primary transition-all ml-auto">
                <FaShare2 />
                Share
              </button>
            </div>
          </header>

          {/* Featured Image */}
          <div className="w-full h-96 bg-gradient-to-br from-accent/30 to-accent/10 rounded-lg flex items-center justify-center text-8xl mb-8">
            {post.image}
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="text-gray-700 leading-relaxed space-y-6"
            >
              {/* Content rendered above */}
            </div>
          </div>

          {/* Author Bio */}
          <div className="bg-white rounded-lg p-6 mb-12 border-l-4 border-accent">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center text-3xl">
                👨‍💼
              </div>
              <div>
                <h3 className="font-bold text-lg">{post.author}</h3>
                <p className="text-sm text-gray-600">Professional Photographer</p>
              </div>
            </div>
            <p className="text-gray-700">
              With over 10 years of experience in photography, our team shares expertise and passion through detailed blog posts and tutorials.
            </p>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold mb-6">Related Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden group"
                  >
                    <div className="h-40 bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-300">
                      {relatedPost.image}
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-sm mb-2 group-hover:text-accent transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-xs text-gray-600">{formatDate(relatedPost.date)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto mt-16 bg-gradient-to-r from-primary to-gray-900 text-white rounded-lg p-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Capture Your Memories?</h2>
          <p className="text-gray-300 mb-6">
            Let's work together to create beautiful photographs that tell your story.
          </p>
          <Link
            href="/booking"
            className="inline-block bg-accent text-primary px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all"
          >
            Book a Session
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
