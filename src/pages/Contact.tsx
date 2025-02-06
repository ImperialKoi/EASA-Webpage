import React from 'react';
import { Mail, MapPin, Clock, Send } from 'lucide-react';

function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-red-800 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Have questions about the East Asian Society? We'd love to hear from you!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-red-800 mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-red-800 mr-4" />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-gray-600">eastasiansociety@abbeypark.ca</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-red-800 mr-4" />
                <div>
                  <h3 className="font-bold">Location</h3>
                  <p className="text-gray-600">Room 204, Abbey Park High School</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-red-800 mr-4" />
                <div>
                  <h3 className="font-bold">Meeting Time</h3>
                  <p className="text-gray-600">Every Wednesday, 3:30 PM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-red-800 mb-6">Follow Us</h2>
            <p className="text-gray-600 mb-4">
              Stay updated with our latest events and activities on social media!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-red-800 hover:text-red-700">
                Instagram
              </a>
              <a href="#" className="text-red-800 hover:text-red-700">
                Facebook
              </a>
              <a href="#" className="text-red-800 hover:text-red-700">
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-red-800 mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-800 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center"
            >
              <Send className="h-5 w-5 mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;