import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-light">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-dark mb-4">Get In Touch</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-dark mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary p-3 rounded-lg">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark">Email</h4>
                  <p className="text-gray-600">gloria.dennis@example.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary p-3 rounded-lg">
                  <FaPhone className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark">Phone</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-dark p-3 rounded-lg">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark">Location</h4>
                  <p className="text-gray-600">San Francisco, California</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h4 className="font-semibold text-dark mb-4">Connect with me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-primary text-white p-3 rounded-lg transition duration-300"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-dark text-white p-3 rounded-lg transition duration-300"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-400 text-white p-3 rounded-lg transition duration-300"
                >
                  <FaTwitter className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;