import { Link } from 'react-router-dom';

export default function FooterKo() {
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
              보라카이의 프리미엄 코워킹 스페이스. 초고속 Starlink 인터넷, 수영장 이용,
              그리고 생산적으로 일하는 데 필요한 모든 것과 함께 낙원에서 일하세요.
            </p>
            <p className="text-gray-400">
              매일 운영: 오전 8:00 - 오후 5:00
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">빠른 링크</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#amenities" className="hover:text-cyan-400 transition-colors">편의시설</a></li>
              <li><a href="#gallery" className="hover:text-cyan-400 transition-colors">갤러리</a></li>
              <li><a href="#pricing" className="hover:text-cyan-400 transition-colors">요금</a></li>
              <li><a href="#nomads" className="hover:text-cyan-400 transition-colors">디지털 노마드를 위해</a></li>
              <li><Link to="/getting-to-boracay" className="hover:text-cyan-400 transition-colors">보라카이 가는 방법</Link></li>
              <li><a href="#booking" className="hover:text-cyan-400 transition-colors">연락처</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">위치</h4>
            <p className="text-gray-400 leading-relaxed">
              D'Mall 근처, Station 2<br />
              보라카이섬<br />
              Malay, Aklan<br />
              필리핀
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Boracay Coworking. 모든 권리 보유.</p>
          <p className="mt-2 text-sm">보라카이에서 ❤️으로 제작</p>
        </div>
      </div>
    </footer>
  );
}

