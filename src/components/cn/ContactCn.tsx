import { Mail, MapPin, Facebook, Instagram } from 'lucide-react';

export default function ContactCn() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              联系我们
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              对我们的联合办公空间、住宿套餐或会员选项有疑问吗？
              我们很乐意收到您的来信。
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">位置</h3>
                  <p className="text-gray-600">
                    D'Mall附近，Station 2<br />
                    长滩岛，Malay, Aklan<br />
                    菲律宾
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">电子邮件</h3>
                  <a href="mailto:hello@boracaycoworking.com" className="text-cyan-600 hover:text-cyan-700">
                    hello@boracaycoworking.com
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">关注我们</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/people/Boracay-Coworking/61584085855187/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-gray-100 hover:bg-cyan-100 flex items-center justify-center transition-colors group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6 text-gray-600 group-hover:text-cyan-600" />
                </a>
                <a
                  href="https://www.instagram.com/boracaycoworking/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-gray-100 hover:bg-cyan-100 flex items-center justify-center transition-colors group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6 text-gray-600 group-hover:text-cyan-600" />
                </a>
              </div>
            </div>
          </div>

          <div id="booking" className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">预订咨询</h3>
            <form action="https://submit-form.com/U0785bgU1" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  姓名
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                  placeholder="张三"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  电子邮件地址
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                  placeholder="zhang@example.com"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                  我感兴趣的是
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all bg-white"
                >
                  <option>日票</option>
                  <option>兼职会员</option>
                  <option>全职会员</option>
                  <option>创始会员</option>
                  <option>住宿 + 联合办公套餐</option>
                  <option>一般咨询</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  消息
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="告诉我们您的需求..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                发送消息
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

