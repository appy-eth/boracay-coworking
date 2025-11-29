import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: '일일 이용권',
    price: '600',
    period: '일',
    description: '공간을 체험하기에 완벽',
    features: [
      '전일 이용 (오전 8시-오후 5시)',
      '스타링크 WiFi',
      '커피 & 다과',
      '수영장 이용',
      '루프탑 바 이용'
    ],
    cta: '일일권 구매',
    popular: false
  },
  {
    name: '파트타임',
    price: '3,500',
    period: '월',
    description: '주 2일',
    features: [
      '월 8일',
      '원하는 날 선택',
      '모든 편의시설 포함',
      '팟캐스트 부스 이용',
      '프로모션 월 공간',
      '해피아워 할인'
    ],
    cta: '시작하기',
    popular: false
  },
  {
    name: '풀타임',
    price: '5,500',
    period: '월',
    description: '주 5일',
    features: [
      '월 20일 이상',
      '무제한 이용',
      '고정 좌석 옵션',
      '모든 편의시설 포함',
      '팟캐스트 부스 우선권',
      '프리미엄 프로모션 월 공간',
      '연장 해피아워'
    ],
    cta: '풀타임으로 가기',
    popular: true
  },
  {
    name: '창립 멤버',
    price: '4,750',
    period: '월',
    description: '단 10명만 가능!',
    features: [
      '12개월 할인 요금',
      '고정 좌석',
      '모든 프리미엄 편의시설',
      '팟캐스트 부스 우선권',
      '프리미엄 프로모션 배치',
      '독점 회원 혜택',
      '커뮤니티 창립자 지위'
    ],
    cta: '창립자 되기',
    popular: false,
    highlight: true
  }
];

export default function PricingKo() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            유연한 요금제
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            귀하에게 맞는 플랜을 선택하세요. 장기 약정시 할인 혜택이 있습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                plan.highlight ? 'ring-2 ring-cyan-500 transform lg:scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  가장 인기
                </div>
              )}

              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 text-center font-semibold flex items-center justify-center gap-2">
                  <Star className="w-4 h-4 fill-current" />
                  한정 혜택
                  <Star className="w-4 h-4 fill-current" />
                </div>
              )}

              <div className={`p-8 ${plan.highlight ? 'pt-14' : ''}`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6 h-12">{plan.description}</p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">PHP</span>
                  </div>
                  <div className="text-gray-500">{plan.period}당</div>
                </div>

                <a
                  href="#booking"
                  className={`block w-full py-3 px-6 rounded-lg font-semibold text-center transition-all mb-6 ${
                    plan.highlight || plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 shadow-md hover:shadow-lg'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </a>

                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg">
            💰 6개월 및 12개월 약정시 특별 할인 혜택
          </p>
        </div>
      </div>
    </section>
  );
}

