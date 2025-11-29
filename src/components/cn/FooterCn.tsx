import { Link } from 'react-router-dom';

export default function FooterCn() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="inline-block bg-white rounded-full px-6 py-2 mb-4">
              <img
                src="/boracay coworking logo.png"
                alt="Boracay Coworking"
                className="h-12"
              />
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              长滩岛的高级联合办公空间。使用超高速Starlink互联网、泳池使用权，
              以及在天堂高效工作所需的一切。
            </p>
            <p className="text-gray-400">
              每日营业：上午8:00 - 下午5:00
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#amenities" className="hover:text-cyan-400 transition-colors">设施</a></li>
              <li><a href="#gallery" className="hover:text-cyan-400 transition-colors">图库</a></li>
              <li><a href="#pricing" className="hover:text-cyan-400 transition-colors">价格</a></li>
              <li><a href="#nomads" className="hover:text-cyan-400 transition-colors">数字游民</a></li>
              <li><Link to="/getting-to-boracay" className="hover:text-cyan-400 transition-colors">前往长滩岛</Link></li>
              <li><a href="#booking" className="hover:text-cyan-400 transition-colors">联系方式</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">位置</h4>
            <p className="text-gray-400 leading-relaxed">
              D'Mall附近，Station 2<br />
              长滩岛<br />
              Malay, Aklan<br />
              菲律宾
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Boracay Coworking. 保留所有权利。</p>
          <p className="mt-2 text-sm">在长滩岛用 ❤️ 制作</p>
        </div>
      </div>
    </footer>
  );
}

