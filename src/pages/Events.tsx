import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import background from '../images/Background1.jpg'

const events = [
  {
    id: 1,
    title: "Lunar New Year Celebration",
    date: "February 10, 2024",
    time: "12:00 PM - 4:00 PM",
    location: "School Gymnasium",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Join us for our annual Lunar New Year celebration featuring traditional performances, food, and activities."
  },
  {
    id: 2,
    title: "K-Pop Dance Workshop",
    date: "March 15, 2024",
    time: "3:30 PM - 5:00 PM",
    location: "Dance Studio",
    image: "https://images.unsplash.com/photo-1583795128727-6ec3642408f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Learn popular K-pop dance moves from our experienced dance instructors."
  },
  {
    id: 3,
    title: "Asian Food Festival",
    date: "April 20, 2024",
    time: "11:30 AM - 2:30 PM",
    location: "School Cafeteria",
    image: "https://images.unsplash.com/photo-1540648639573-8c848de23f0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Sample various East Asian cuisines and learn about their cultural significance."
  }
];

function Events() {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxStyle = {
    backgroundImage: `url(${background})`,
    backgroundPosition: `center ${scrollY * -0.4}px`,
    backgroundAttachment: 'fixed'
  };

  return (
    <div className="relative min-h-screen">
      <div 
        className="absolute inset-0 z-0"
        style={parallaxStyle}
      />
      <div className="relative z-10 bg-black/20 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-white mb-8">Upcoming Events</h1>
          
          <div className="grid gap-8">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h2 className="text-2xl font-bold mb-4 text-red-800">{event.title}</h2>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-5 w-5 mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-5 w-5 mr-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-5 w-5 mr-2" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">{event.description}</p>
                    <button className="bg-red-800 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;