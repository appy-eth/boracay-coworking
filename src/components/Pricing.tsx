import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Day Pass',
    price: '600',
    period: 'day',
    description: 'Perfect for trying out the space',
    features: [
      'Full day access (8am-5pm)',
      'Starlink WiFi',
      'Coffee & refreshments',
      'Pool access',
      'Rooftop bar access'
    ],
    cta: 'Get Day Pass',
    popular: false
  },
  {
    name: 'Part Time',
    price: '3,500',
    period: 'month',
    description: '2 days per week',
    features: [
      '8 days per month',
      'Choose your days',
      'All amenities included',
      'Podcast booth access',
      'Promo wall space',
      'Happy hour discounts'
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Full Time',
    price: '5,500',
    period: 'month',
    description: '5 days per week',
    features: [
      '20+ days per month',
      'Unlimited access',
      'Reserved seating option',
      'All amenities included',
      'Podcast booth priority',
      'Premium promo wall space',
      'Extended happy hour'
    ],
    cta: 'Go Full Time',
    popular: true
  },
  {
    name: 'Foundation Member',
    price: '4,750',
    period: 'month',
    description: 'Only 10 available!',
    features: [
      'Discount 12 month rate',
      'Reserved seating',
      'All premium amenities',
      'Priority podcast booth',
      'Premium promo placement',
      'Exclusive member perks',
      'Community founder status'
    ],
    cta: 'Become a Founder',
    popular: false,
    highlight: true
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Flexible Pricing Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works for you. Discounts available for longer term commitments.
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
                  Most Popular
                </div>
              )}

              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 text-center font-semibold flex items-center justify-center gap-2">
                  <Star className="w-4 h-4 fill-current" />
                  Limited Offer
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
                  <div className="text-gray-500">per {plan.period}</div>
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
            💰 Special discounts available for 6 and 12-month commitments
          </p>
        </div>
      </div>
    </section>
  );
}
