import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isKR = location.pathname === '/kr';
  const isCN = location.pathname === '/cn';
  const currentLang = isKR ? 'kr' : isCN ? 'cn' : 'en';

  const getContactLink = () => {
    if (location.pathname === '/getting-to-boracay') {
      return "/#booking";
    }
    if (isKR) {
      return "#booking";
    }
    if (isCN) {
      return "#booking";
    }
    return "#booking";
  };

  const getSectionLink = (section: string) => {
    if (isKR) {
      return `#${section}`;
    }
    if (isCN) {
      return `#${section}`;
    }
    return `#${section}`;
  };

  const getNavText = (key: string) => {
    if (isKR) {
      const krTexts: { [key: string]: string } = {
        amenities: '편의시설',
        gallery: '갤러리',
        pricing: '요금',
        nomads: '디지털 노마드를 위해',
        gettingHere: '보라카이 가는 방법',
        contactUs: '연락하기'
      };
      return krTexts[key] || key;
    }
    if (isCN) {
      const cnTexts: { [key: string]: string } = {
        amenities: '设施',
        gallery: '图库',
        pricing: '价格',
        nomads: '数字游民',
        gettingHere: '前往长滩岛',
        contactUs: '联系我们'
      };
      return cnTexts[key] || key;
    }
    const enTexts: { [key: string]: string } = {
      amenities: 'Amenities',
      gallery: 'Gallery',
      pricing: 'Pricing',
      nomads: 'For Nomads',
      gettingHere: 'Getting Here',
      contactUs: 'Contact Us'
    };
    return enTexts[key] || key;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to={isKR ? "/kr" : isCN ? "/cn" : "/"} className="flex-shrink-0">
            <img
              src="/boracay coworking logo.png"
              alt="Boracay Coworking"
              className="h-12"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {(isHome || isKR || isCN) ? (
              <>
                <a href={getSectionLink('amenities')} className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
                  {getNavText('amenities')}
                </a>
                <a href={getSectionLink('gallery')} className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
                  {getNavText('gallery')}
                </a>
                <a href={getSectionLink('pricing')} className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
                  {getNavText('pricing')}
                </a>
                <a href={getSectionLink('nomads')} className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
                  {getNavText('nomads')}
                </a>
              </>
            ) : (
              <>
                <Link to="/#amenities" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
                  {getNavText('amenities')}
                </Link>
                <Link to="/#gallery" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
                  {getNavText('gallery')}
                </Link>
                <Link to="/#pricing" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
                  {getNavText('pricing')}
                </Link>
                <Link to="/#nomads" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
                  {getNavText('nomads')}
                </Link>
              </>
            )}
            <Link to="/getting-to-boracay" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
              {getNavText('gettingHere')}
            </Link>
            
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 text-gray-700 hover:text-cyan-600 font-medium transition-colors"
              >
                {currentLang.toUpperCase()}
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {langOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                  <Link
                    to="/"
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors"
                    onClick={() => setLangOpen(false)}
                  >
                    <span className="text-2xl">🇬🇧</span>
                    <span className="text-gray-700 font-medium">English</span>
                  </Link>
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
            
            <a href={getContactLink()} className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors">
              {getNavText('contactUs')}
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
            {(isHome || isKR || isCN) ? (
              <>
                <a href={getSectionLink('amenities')} className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg" onClick={() => setIsOpen(false)}>
                  {getNavText('amenities')}
                </a>
                <a href={getSectionLink('gallery')} className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg" onClick={() => setIsOpen(false)}>
                  {getNavText('gallery')}
                </a>
                <a href={getSectionLink('pricing')} className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg" onClick={() => setIsOpen(false)}>
                  {getNavText('pricing')}
                </a>
                <a href={getSectionLink('nomads')} className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg" onClick={() => setIsOpen(false)}>
                  {getNavText('nomads')}
                </a>
              </>
            ) : (
              <>
                <Link to="/#amenities" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg" onClick={() => setIsOpen(false)}>
                  {getNavText('amenities')}
                </Link>
                <Link to="/#gallery" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg" onClick={() => setIsOpen(false)}>
                  {getNavText('gallery')}
                </Link>
                <Link to="/#pricing" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg" onClick={() => setIsOpen(false)}>
                  {getNavText('pricing')}
                </Link>
                <Link to="/#nomads" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg" onClick={() => setIsOpen(false)}>
                  {getNavText('nomads')}
                </Link>
              </>
            )}
            <Link to="/getting-to-boracay" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg" onClick={() => setIsOpen(false)}>
              {getNavText('gettingHere')}
            </Link>
            <a href={getContactLink()} className="block px-3 py-2 bg-cyan-500 text-white text-center rounded-lg" onClick={() => setIsOpen(false)}>
              {getNavText('contactUs')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
