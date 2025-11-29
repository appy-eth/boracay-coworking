import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex-shrink-0">
            <img
              src="/boracay coworking logo.png"
              alt="Boracay Coworking"
              className="h-12"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {isHome ? (
              <>
                <a href="#amenities" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
                  Amenities
                </a>
                <a href="#gallery" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
                  Gallery
                </a>
                <a href="#pricing" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
                  Pricing
                </a>
                <a href="#nomads" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
                  For Nomads
                </a>
              </>
            ) : (
              <>
                <Link to="/#amenities" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
                  Amenities
                </Link>
                <Link to="/#gallery" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
                  Gallery
                </Link>
                <Link to="/#pricing" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
                  Pricing
                </Link>
                <Link to="/#nomads" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
                  For Nomads
                </Link>
              </>
            )}
            <Link to="/getting-to-boracay" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
              Getting Here
            </Link>
            
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 text-gray-700 hover:text-cyan-600 font-medium transition-colors"
              >
                EN
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {langOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                  <Link
                    to="/kr"
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors"
                    onClick={() => setLangOpen(false)}
                  >
                    <span className="text-2xl">🇰🇷</span>
                    <span className="text-gray-700 font-medium">한국어</span>
                  </Link>
                  <Link
                    to="/cn"
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors"
                    onClick={() => setLangOpen(false)}
                  >
                    <span className="text-2xl">🇨🇳</span>
                    <span className="text-gray-700 font-medium">中文（简体）</span>
                  </Link>
                </div>
              )}
            </div>
            
            <a href={isHome ? "#booking" : "/#booking"} className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors">
              Contact Us
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-cyan-600"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {isHome ? (
              <>
                <a href="#amenities" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg" onClick={() => setIsOpen(false)}>
                  Amenities
                </a>
                <a href="#gallery" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg" onClick={() => setIsOpen(false)}>
                  Gallery
                </a>
                <a href="#pricing" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg" onClick={() => setIsOpen(false)}>
                  Pricing
                </a>
                <a href="#nomads" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg" onClick={() => setIsOpen(false)}>
                  For Nomads
                </a>
              </>
            ) : (
              <>
                <Link to="/#amenities" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg" onClick={() => setIsOpen(false)}>
                  Amenities
                </Link>
                <Link to="/#gallery" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg" onClick={() => setIsOpen(false)}>
                  Gallery
                </Link>
                <Link to="/#pricing" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg" onClick={() => setIsOpen(false)}>
                  Pricing
                </Link>
                <Link to="/#nomads" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg" onClick={() => setIsOpen(false)}>
                  For Nomads
                </Link>
              </>
            )}
            <Link to="/getting-to-boracay" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg" onClick={() => setIsOpen(false)}>
              Getting Here
            </Link>
            <a href={isHome ? "#booking" : "/#booking"} className="block px-3 py-2 bg-cyan-500 text-white text-center rounded-lg" onClick={() => setIsOpen(false)}>
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
