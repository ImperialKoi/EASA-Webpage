import React from 'react';
import { Calendar, Users, Globe2 } from 'lucide-react';
import { Boat } from '../components/Boat';

// Sample boat data
const boats = [
  {
    name: "Sarah Chen",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    delay: 0,
    bottom: '40%',
    title: 'Exec'
  },
  {
    name: "David Kim",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    delay: 4,
    bottom: '35%', 
    title: 'Exec'
  },
  {
    name: "Emily Wong",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    delay: 8,
    bottom: '40%',
    title: 'Exec'
  }
];

function Home() {
  return (
    <div className="min-h-screen bg-red-50">
      <div className='bg-red-50'>
        {/* Hero Section with intertwined text */}
        <div className="max-w-7xl mx-auto px-4 pt-16 pb-24">
          <div className="relative text-center mb-24">
            <h1 className="text-6xl font-bold text-red-800 mb-4 relative">
              <span className="inline-block">Welcome to East Asian Society!</span>
            </h1>
          </div>

          {/* Fun Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-3xl shadow-lg border-4 border-red-200 transform hover:scale-105 transition-transform duration-300 hover:rotate-2">
              <Calendar className="h-16 w-16 text-red-800 mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-red-800">Weekly Fun!</h3>
              <p className="text-gray-600">Join our Wednesday gatherings for games, snacks, and cultural adventures! 🎮 🍜</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg border-4 border-yellow-200 transform hover:scale-105 transition-transform duration-300 hover:-rotate-2">
              <Users className="h-16 w-16 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-red-800">Friend Squad</h3>
              <p className="text-gray-600">Make awesome friends who share your love for East Asian culture! 🤝 ✨</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg border-4 border-red-200 transform hover:scale-105 transition-transform duration-300 hover:rotate-2">
              <Globe2 className="h-16 w-16 text-red-800 mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-red-800">Culture Party</h3>
              <p className="text-gray-600">Experience the coolest traditions and modern trends! 🎌 🎭</p>
            </div>
          </div>

          {/* Next Event Card */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border-4 border-yellow-200 transform hover:scale-[1.02] transition-transform duration-300 mb-16">
            <div className="md:flex">
              <div className="md:w-1/2 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Lunar New Year Celebration"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-red-800 text-white px-4 py-2 rounded-full text-sm font-bold">
                  Coming Soon!
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <h2 className="text-3xl font-bold mb-4 text-red-800">Lunar New Year Party! 🐲</h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Get ready for the most epic celebration of the year! We've got:
                  <ul className="list-disc list-inside mt-2 space-y-2">
                    <li>Amazing Performances 🎭</li>
                    <li>Delicious Snacks 🥟</li>
                    <li>Fun Games 🎮</li>
                    <li>Cool Prizes 🎁</li>
                  </ul>
                </p>
                <button className="bg-red-800 text-white px-8 py-4 rounded-full hover:bg-red-700 transition-colors text-lg font-bold transform hover:scale-105 hover:rotate-2 transition-transform duration-300 shadow-lg">
                  Join the Fun! ✨
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Waves Animation */}
        <div className="relative h-96 overflow-hidden">
          <div className="absolute inset-0">
            {/* Wave 1 - Fastest */}
            <div className="absolute inset-0 flex wave-container">
              <svg className="h-96 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ width: '200%' }}>
                <path className="wave wave-1" fill="rgba(24, 144, 235, 0.41)" d="M0,96L40,112C80,128,160,160,240,165.3C320,171,400,149,480,149.3C560,149,640,171,720,165.3C800,160,880,128,960,128C1040,128,1120,160,1200,165.3C1280,171,1360,149,1400,138.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
              </svg>
            </div>
            
            {/* Wave 2 */}
            <div className="absolute inset-0 flex wave-container">
              <svg className="h-96 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ width: '200%' }}>
                <path className="wave wave-2" fill="rgba(0, 136, 255, 0.58)" d="M0,128L40,144C80,160,160,192,240,186.7C320,181,400,139,480,133.3C560,128,640,160,720,165.3C800,171,880,149,960,144C1040,139,1120,149,1200,154.7C1280,160,1360,160,1400,160L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
              </svg>
            </div>

            {/* Boats Layer */}
            <div className="absolute inset-0 z-10">
              {boats.map((boat, index) => (
                <Boat key={index} {...boat} />
              ))}
            </div>
            
            {/* Wave 3 */}
            <div className="absolute inset-0 flex wave-container z-20">
              <svg className="h-96 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ width: '200%' }}>
                <path className="wave wave-3" fill="rgba(0, 84, 210, 0.57)" d="M0,192L40,181.3C80,171,160,149,240,154.7C320,160,400,192,480,202.7C560,213,640,203,720,181.3C800,160,880,128,960,128C1040,128,1120,160,1200,176C1280,192,1360,192,1400,192L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
              </svg>
            </div>
            
            {/* Wave 4 - Slowest */}
            <div className="absolute inset-0 flex wave-container z-30">
              <svg className="h-96 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ width: '200%' }}>
                <path className="wave wave-4" fill="rgb(24, 75, 204)" d="M0,224L40,213.3C80,203,160,181,240,186.7C320,192,400,224,480,218.7C560,213,640,171,720,160C800,149,880,171,960,181.3C1040,192,1120,192,1200,186.7C1280,181,1360,171,1400,165.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
              </svg>
            </div>
          </div>
        </div>
        <footer className="bg-red-800 text-white">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-bold">East Asian Society</h3>
                <p className="text-sm">Abbey Park High School</p>
              </div>
              <div className="text-sm">
                <p>Meeting every Wednesday</p>
                <p>Example Text</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;