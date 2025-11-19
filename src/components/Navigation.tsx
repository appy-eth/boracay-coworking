import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <img
              src="/boracay coworking logo.png"
              alt="Boracay Coworking"
              className="h-12"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
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
            <a href="#booking" className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors">
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
            <a href="#booking" className="block px-3 py-2 bg-cyan-500 text-white text-center rounded-lg" onClick={() => setIsOpen(false)}>
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
