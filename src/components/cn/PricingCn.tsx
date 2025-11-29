import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: '日票',
    price: '600',
    period: '天',
    description: '非常适合体验空间',
    features: [
      '全天使用（8am-5pm）',
      'Starlink WiFi',
      '咖啡和茶点',
      '泳池使用',
      '屋顶酒吧使用'
    ],
    cta: '获取日票',
    popular: false
  },
  {
    name: '兼职',
    price: '3,500',
    period: '月',
    description: '每周2天',
    features: [
      '每月8天',
      '选择您的日期',
      '包含所有设施',
      '播客录音室使用',
      '推广墙空间',
      '欢乐时光折扣'
    ],
    cta: '开始使用',
    popular: false
  },
  {
    name: '全职',
    price: '5,500',
    period: '月',
    description: '每周5天',
    features: [
      '每月20天以上',
      '无限使用',
      '可选固定座位',
      '包含所有设施',
      '播客录音室优先',
      '优质推广墙空间',
      '延长欢乐时光'
    ],
    cta: '选择全职',
    popular: true
  },
  {
    name: '创始会员',
    price: '4,750',
    period: '月',
    description: '仅限10名！',
    features: [
      '12个月折扣价',
      '固定座位',
      '所有优质设施',
      '播客录音室优先',
      '优质推广位置',
      '独家会员福利',
      '社区创始人身份'
    ],
    cta: '成为创始人',
    popular: false,
    highlight: true
  }
];

export default function PricingCn() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            灵活的价格方案
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            选择适合您的方案。长期承诺享受优惠折扣。
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
                  最受欢迎
                </div>
              )}

              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 text-center font-semibold flex items-center justify-center gap-2">
                  <Star className="w-4 h-4 fill-current" />
                  限时优惠
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
                  <div className="text-gray-500">每{plan.period}</div>
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
            💰 6个月和12个月承诺可享特别折扣
          </p>
        </div>
      </div>
    </section>
  );
}

