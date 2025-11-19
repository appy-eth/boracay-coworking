import { Plane, Home, Briefcase, Palmtree, Users, MapPin } from 'lucide-react';

const benefits = [
  {
    icon: Home,
    title: 'Accommodation + Workspace',
    description: 'Bundle deals including 2 bed apartment plus coworking access available'
  },
  {
    icon: Briefcase,
    title: 'Work-Life Balance',
    description: 'Beach at your doorstep, pool for lunch breaks, rooftop bar for evenings'
  },
  {
    icon: Users,
    title: 'Digital Nomad Community',
    description: 'Connect with like-minded remote workers and entrepreneurs from around the world'
  },
  {
    icon: MapPin,
    title: 'Prime Location',
    description: 'Near D\'Mall for dining and shopping, 2-minute walk to White Beach'
  }
];

export default function DigitalNomads() {
  return (
    <section id="nomads" className="py-24 bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Plane className="w-8 h-8 text-cyan-600" />
            <Palmtree className="w-8 h-8 text-cyan-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Digital Nomads Welcome
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Your next remote work destination awaits. Experience the perfect blend of
            productivity and island paradise in Boracay.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 relative">
            <div className="absolute -top-8 -right-8 z-20 transform rotate-12 bg-gradient-to-br from-orange-500 to-red-500 text-white px-8 py-6 rounded-2xl shadow-2xl border-4 border-white max-w-xs">
              <div className="text-center">
                <div className="text-base font-black uppercase tracking-wide leading-tight">Monthly Accommodation + Coworking Bundle</div>
                <div className="text-sm font-bold mt-2 mb-1">from just</div>
                <div className="text-3xl font-black leading-tight">$1390 USD</div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/Boracay-Island-hopping.jpg"
                alt="Boracay Island Hopping"
                className="w-full h-80 object-cover"
              />
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose Boracay?
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">•</span>
                  <span>World-famous white sand beaches</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">•</span>
                  <span>Vibrant expat and digital nomad community</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">•</span>
                  <span>Affordable cost of living - food $2-$10 USD, massage $6, cocktails $1.50</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">•</span>
                  <span>Amazing food scene with international cuisines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">•</span>
                  <span>Water sports, island hopping, and endless activities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">•</span>
                  <span>English widely spoken</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-10 text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Make Boracay Your Base?
          </h3>
          <p className="text-xl mb-8 text-cyan-50">
            Contact us about accommodation + coworking packages for stays from 1 week to 6+ months
          </p>
          <a
            href="#booking"
            className="inline-block px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-cyan-50 transition-all transform hover:scale-105 shadow-lg"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
