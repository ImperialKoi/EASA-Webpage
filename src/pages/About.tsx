import React from 'react';
import { Heart, Users, Globe2 } from 'lucide-react';

function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-red-800 mb-4">About East Asian Society</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We are a student-led organization dedicated to celebrating and sharing East Asian culture
          within the Abbey Park High School community.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <img
            src="https://images.unsplash.com/photo-1516307365426-d1d4e3943454?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Club members"
            className="rounded-xl shadow-lg w-full h-[400px] object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-red-800 mb-6">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            The East Asian Society aims to create a welcoming space where students can explore,
            celebrate, and share East Asian cultures. We promote cultural understanding through
            various activities, events, and educational programs.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <Heart className="h-6 w-6 text-red-800 mb-2" />
              <h3 className="font-bold mb-1">Inclusivity</h3>
              <p className="text-sm text-gray-600">Open to all students interested in East Asian culture</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <Globe2 className="h-6 w-6 text-red-800 mb-2" />
              <h3 className="font-bold mb-1">Cultural Exchange</h3>
              <p className="text-sm text-gray-600">Sharing traditions and modern culture</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-red-800 mb-8 text-center">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              alt="President"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="font-bold text-lg">Sarah Chen</h3>
            <p className="text-red-800">President</p>
          </div>
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              alt="Vice President"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="font-bold text-lg">David Kim</h3>
            <p className="text-red-800">Vice President</p>
          </div>
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              alt="Events Coordinator"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="font-bold text-lg">Emily Wong</h3>
            <p className="text-red-800">Events Coordinator</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-red-800 mb-6">Join Us!</h2>
        <p className="text-gray-600 mb-8">
          We meet every Wednesday after school in Room 204. New members are always welcome!
        </p>
        <button className="bg-red-800 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors text-lg">
          Become a Member
        </button>
      </div>
    </div>
  );
}

export default About;