import { Plane, Home, Briefcase, Palmtree, Users, MapPin } from 'lucide-react';

const benefits = [
  {
    icon: Home,
    title: '住宿 + 工作空间',
    description: '提供包含2卧室公寓和联合办公使用权的套餐'
  },
  {
    icon: Briefcase,
    title: '工作生活平衡',
    description: '门前的海滩，午休的泳池，晚上的屋顶酒吧'
  },
  {
    icon: Users,
    title: '数字游民社区',
    description: '与来自世界各地志同道合的远程工作者和企业家建立联系'
  },
  {
    icon: MapPin,
    title: '优越位置',
    description: '靠近D\'Mall用餐和购物，步行2分钟到白沙滩'
  }
];

export default function DigitalNomadsCn() {
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
            欢迎数字游民
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            您的下一个远程工作目的地在等着您。在长滩岛体验高效工作与海岛天堂的完美结合。
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
                <div className="text-base font-black uppercase tracking-wide leading-tight">月度住宿 + 联合办公套餐</div>
                <div className="text-sm font-bold mt-2 mb-1">仅需</div>
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
                为什么选择长滩岛？
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">•</span>
                  <span>世界著名的白沙滩</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">•</span>
                  <span>充满活力的外籍人士和数字游民社区</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">•</span>
                  <span>低廉的生活成本 - 餐食$2-$10美元，按摩$6，鸡尾酒$1.50</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">•</span>
                  <span>提供国际美食的精彩餐饮场景</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">•</span>
                  <span>水上运动、跳岛游和无尽的活动</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">•</span>
                  <span>广泛使用英语</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-10 text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            准备好以长滩岛为基地了吗？
          </h3>
          <p className="text-xl mb-8 text-cyan-50">
            联系我们了解1周至6个月以上的住宿 + 联合办公套餐
          </p>
          <a
            href="#booking"
            className="inline-block px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-cyan-50 transition-all transform hover:scale-105 shadow-lg"
          >
            联系我们
          </a>
        </div>
      </div>
    </section>
  );
}

