import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Hexagon as Dragon } from 'lucide-react';
import Home from './pages/Home';
import Events from './pages/Events';
import About from './pages/About';
import Contact from './pages/Contact';
import Wall from './pages/Wall/Wall';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-red-50">
        {/* Navigation */}
        <nav className="bg-red-700 text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center transition-transform duration-200 hover:scale-125">
                <Dragon className="h-8 w-8 text-yellow-500" />
                <Link to="/">
                  <span className="ml-2 text-xl font-bold inline-block">
                    East Asian Society
                  </span>
                </Link>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                <Link to="/events" className="hover:text-yellow-500 transition-colors">Events</Link>
                <Link to="/about" className="hover:text-yellow-500 transition-colors">About</Link>
                <Link to="/contact" className="hover:text-yellow-500 transition-colors">Contact</Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white hover:text-yellow-500"
                >
                  {isMenuOpen ? <X /> : <Menu />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/events"
                  className="block px-3 py-2 hover:bg-red-700 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Events
                </Link>
                <Link
                  to="/about"
                  className="block px-3 py-2 hover:bg-red-700 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="block px-3 py-2 hover:bg-red-700 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/wall" element={<Wall />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;