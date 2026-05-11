'use client';

import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  content: string;
  detail: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const contactInfo: ContactInfo[] = [
    {
      icon: <FaPhone className="text-3xl" />,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      detail: 'Mon-Fri, 9AM-6PM EST',
    },
    {
      icon: <FaEnvelope className="text-3xl" />,
      title: 'Email',
      content: 'hello@photographer.com',
      detail: 'We respond within 24 hours',
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl" />,
      title: 'Location',
      content: 'New York, NY',
      detail: 'Available for travel',
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: 'Hours',
      content: '9AM - 6PM EST',
      detail: 'Closed on Sundays',
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setLoading(false);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-secondary py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have a question or ready to book your session? We'd love to hear from you. Contact us today!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-accent mb-3">{info.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                  <p className="text-primary font-semibold mb-1">{info.content}</p>
                  <p className="text-sm text-gray-600">{info.detail}</p>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8 p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg">
              <h3 className="font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-accent text-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  f
                </a>
                <a href="#" className="w-10 h-10 bg-accent text-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  📷
                </a>
                <a href="#" className="w-10 h-10 bg-accent text-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  t
                </a>
                <a href="#" className="w-10 h-10 bg-accent text-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  in
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <FaCheckCircle className="text-6xl text-success mb-4" />
                  <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
                  <p className="text-gray-600 text-center">
                    We've received your message and will get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-accent transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-accent transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Phone & Subject Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-accent transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-accent transition-colors"
                        placeholder="How can we help?"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="Tell us more about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-accent text-primary font-bold py-3 rounded-lg hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>

                  {/* Privacy Notice */}
                  <p className="text-xs text-gray-600 text-center">
                    We respect your privacy. Your information will never be shared with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                question: 'How far in advance should I book?',
                answer: 'We recommend booking 4-6 weeks in advance to ensure availability for your preferred date.',
              },
              {
                question: 'What is your cancellation policy?',
                answer: 'Cancellations made 2 weeks before the session receive a full refund. Cancellations within 2 weeks are subject to a 50% fee.',
              },
              {
                question: 'How long does it take to receive photos?',
                answer: 'Edited photos are typically delivered within 2-3 weeks of the session date. Rush delivery options are available.',
              },
              {
                question: 'Do you offer international services?',
                answer: 'Yes! We travel internationally for weddings and special events. Contact us to discuss your specific needs and travel costs.',
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group border-2 border-gray-300 rounded-lg p-4 cursor-pointer hover:border-accent transition-colors"
              >
                <summary className="font-semibold flex items-center justify-between">
                  {faq.question}
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-600 mt-4 pt-4 border-t border-gray-300">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* Map Section (Placeholder) */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="h-96 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
            <div className="text-center">
              <FaMapMarkerAlt className="text-6xl text-accent mx-auto mb-4" />
              <p className="text-gray-600 text-lg">Map Coming Soon</p>
              <p className="text-gray-500 text-sm">Located in New York, NY</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-gray-900 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Session?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Don't wait! Check our availability and secure your perfect photography experience today.
          </p>
          <a
            href="/booking"
            className="inline-block bg-accent text-primary px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
