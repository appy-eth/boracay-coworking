import { Wifi, Coffee, Waves, Mic, Speaker, Clock, TrendingUp, Volume2, Armchair, MonitorPlay } from 'lucide-react';

const amenities = [
  {
    icon: Wifi,
    title: 'Starlink Internet',
    description: 'Ultra-fast, reliable internet powered by Starlink. Say goodbye to fragile WiFi connections.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Coffee,
    title: 'Coffee Machine',
    description: 'Premium coffee to fuel your productivity throughout the day.',
    color: 'from-amber-500 to-orange-500'
  },
  {
    icon: Waves,
    title: 'Pool Access',
    description: 'Cool off during your lunch break with access to our refreshing pool.',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Speaker,
    title: 'Rooftop Bar',
    description: 'Unwind after work at our rooftop bar with happy hour from 4-7pm.',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Mic,
    title: 'Podcast Booth',
    description: 'Professional podcast booth with microphone and lighting setup available.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Volume2,
    title: 'Relaxed Music',
    description: 'Curated background music that can be adjusted for your calls and focus time.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Armchair,
    title: 'Comfy Seating',
    description: 'Choose between cozy booth seating or traditional tables and chairs.',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    icon: TrendingUp,
    title: 'Promo Wall',
    description: 'Advertise your business on our dedicated promotional wall.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Clock,
    title: '8am - 5pm Daily',
    description: 'Consistent opening hours perfect for your work schedule.',
    color: 'from-slate-500 to-gray-500'
  }
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't worry, we have everything you need. Good vibes included
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-cyan-200"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${amenity.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <amenity.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {amenity.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
