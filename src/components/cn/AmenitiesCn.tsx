import { Wifi, Coffee, Waves, Mic, Speaker, Clock, TrendingUp, Volume2, Armchair } from 'lucide-react';

const amenities = [
  {
    icon: Wifi,
    title: 'Starlink 互联网',
    description: '由Starlink提供的超高速可靠互联网。告别不稳定的WiFi连接。',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Coffee,
    title: '咖啡机',
    description: '全天提供优质咖啡，提升您的工作效率。',
    color: 'from-amber-500 to-orange-500'
  },
  {
    icon: Waves,
    title: '泳池使用',
    description: '在午休时间到我们清爽的泳池中放松一下。',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Speaker,
    title: '屋顶酒吧',
    description: '下班后在我们的屋顶酒吧放松，每天4-7点欢乐时光。',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Mic,
    title: '播客录音室',
    description: '配有麦克风和照明设备的专业播客录音室可供使用。',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Volume2,
    title: '舒缓音乐',
    description: '精选的背景音乐，可根据您的通话和专注时间进行调整。',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Armchair,
    title: '舒适座位',
    description: '可选择舒适的隔间座位或传统桌椅。',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    icon: TrendingUp,
    title: '推广墙',
    description: '在我们专用的推广墙上宣传您的业务。',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Clock,
    title: '每日8am - 5pm',
    description: '一致的营业时间，完美适合您的工作安排。',
    color: 'from-slate-500 to-gray-500'
  }
];

export default function AmenitiesCn() {
  return (
    <section id="amenities" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            您需要的一切
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            别担心，我们为您准备了一切所需。还包括良好的氛围
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

