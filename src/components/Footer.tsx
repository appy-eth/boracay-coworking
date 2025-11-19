export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="inline-block bg-white rounded-full px-6 py-2 mb-4">
              <img
                src="/boracay coworking logo.png"
                alt="Boracay Coworking"
                className="h-12"
              />
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Premium coworking space in Boracay. Work from paradise with ultra-fast Starlink internet,
              pool access, and everything you need to stay productive.
            </p>
            <p className="text-gray-400">
              Open Daily: 8:00 AM - 5:00 PM
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#amenities" className="hover:text-cyan-400 transition-colors">Amenities</a></li>
              <li><a href="#gallery" className="hover:text-cyan-400 transition-colors">Gallery</a></li>
              <li><a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing</a></li>
              <li><a href="#nomads" className="hover:text-cyan-400 transition-colors">For Nomads</a></li>
              <li><a href="#booking" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Location</h4>
            <p className="text-gray-400 leading-relaxed">
              Near D'Mall, Station 2<br />
              Boracay Island<br />
              Malay, Aklan<br />
              Philippines
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Boracay Coworking. All rights reserved.</p>
          <p className="mt-2 text-sm">Made with ❤️ in Boracay</p>
        </div>
      </div>
    </footer>
  );
}
