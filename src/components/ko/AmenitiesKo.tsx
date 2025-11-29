import { Wifi, Coffee, Waves, Mic, Speaker, Clock, TrendingUp, Volume2, Armchair } from 'lucide-react';

const amenities = [
  {
    icon: Wifi,
    title: '스타링크 인터넷',
    description: '스타링크가 제공하는 초고속 인터넷. 불안정한 WiFi는 이제 잊으세요.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Coffee,
    title: '커피 머신',
    description: '하루 종일 생산성을 높여줄 프리미엄 커피.',
    color: 'from-amber-500 to-orange-500'
  },
  {
    icon: Waves,
    title: '수영장 이용',
    description: '점심 시간에 상쾌한 수영장에서 휴식을 취하세요.',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Speaker,
    title: '루프탑 바',
    description: '4-7시 해피아워와 함께 일과 후 루프탑 바에서 휴식하세요.',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Mic,
    title: '팟캐스트 부스',
    description: '마이크와 조명 설비가 갖춰진 전문 팟캐스트 부스 이용 가능.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Volume2,
    title: '편안한 음악',
    description: '통화 및 집중 시간에 맞춰 조절 가능한 큐레이티드 배경 음악.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Armchair,
    title: '편안한 좌석',
    description: '아늑한 부스석과 일반 테이블 의자 중 선택하세요.',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    icon: TrendingUp,
    title: '프로모션 월',
    description: '전용 프로모션 게시판에 귀하의 비즈니스를 홍보하세요.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Clock,
    title: '매일 오전 8시 - 오후 5시',
    description: '업무 일정에 완벽한 일관된 운영 시간.',
    color: 'from-slate-500 to-gray-500'
  }
];

export default function AmenitiesKo() {
  return (
    <section id="amenities" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            필요한 모든 것
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            걱정하지 마세요, 필요한 모든 것이 준비되어 있습니다. 좋은 분위기도 포함되어 있어요
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

