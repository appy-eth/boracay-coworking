import { Plane, Home, Briefcase, Palmtree, Users, MapPin } from 'lucide-react';

const benefits = [
  {
    icon: Home,
    title: '숙소 + 워크스페이스',
    description: '침실 2개 아파트와 코워킹 이용권이 포함된 번들 상품 제공'
  },
  {
    icon: Briefcase,
    title: '일과 삶의 균형',
    description: '문앞의 해변, 점심 시간 수영장, 저녁 루프탑 바'
  },
  {
    icon: Users,
    title: '디지털 노마드 커뮤니티',
    description: '전 세계에서 온 같은 생각을 가진 원격 근무자 및 기업가들과 연결'
  },
  {
    icon: MapPin,
    title: '최고의 위치',
    description: '식사 및 쇼핑을 위한 D\'Mall 근처, 화이트 비치까지 도보 2분'
  }
];

export default function DigitalNomadsKo() {
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
            디지털 노마드 환영
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            다음 원격 근무 목적지가 여러분을 기다립니다. 보라카이에서 생산성과 
            섬 낙원의 완벽한 조화를 경험하세요.
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
                <div className="text-base font-black uppercase tracking-wide leading-tight">월간 숙소 + 코워킹 번들</div>
                <div className="text-sm font-bold mt-2 mb-1">단</div>
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
                왜 보라카이를 선택해야 할까요?
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">•</span>
                  <span>세계적으로 유명한 화이트 샌드 비치</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">•</span>
                  <span>활기찬 외국인 및 디지털 노마드 커뮤니티</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">•</span>
                  <span>저렴한 생활비 - 식사 $2-$10 USD, 마사지 $6, 칵테일 $1.50</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">•</span>
                  <span>국제 요리를 제공하는 놀라운 음식 문화</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">•</span>
                  <span>수상 스포츠, 섬 호핑 및 끝없는 액티비티</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">•</span>
                  <span>영어 널리 사용</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-10 text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            보라카이를 귀하의 베이스로 만들 준비가 되셨나요?
          </h3>
          <p className="text-xl mb-8 text-cyan-50">
            1주일부터 6개월 이상 체류를 위한 숙소 + 코워킹 패키지에 대해 문의하세요
          </p>
          <a
            href="#booking"
            className="inline-block px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-cyan-50 transition-all transform hover:scale-105 shadow-lg"
          >
            연락하기
          </a>
        </div>
      </div>
    </section>
  );
}

