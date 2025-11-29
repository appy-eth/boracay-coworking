import { Wifi, Coffee, Waves, MapPin } from 'lucide-react';

export default function HeroKo() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/hammock-on-beach-boracay.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-6">
          <MapPin className="w-6 h-6 text-cyan-400" />
          <span className="text-cyan-400 font-medium tracking-wide">보라카이섬, 필리핀</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          낙원에서 일하세요
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          해변에서 가까운 보라카이의 프리미엄 코워킹 스페이스. 빠른 스타링크 인터넷, 수영장 이용,
          그리고 낙원에서 생산적으로 일하는 데 필요한 모든 것.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <Wifi className="w-5 h-5 text-cyan-400" />
            <span className="text-white font-medium">스타링크 인터넷</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <Coffee className="w-5 h-5 text-cyan-400" />
            <span className="text-white font-medium">커피 바</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <Waves className="w-5 h-5 text-cyan-400" />
            <span className="text-white font-medium">수영장 이용</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#pricing"
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            요금 보기
          </a>
          <a
            href="#amenities"
            className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold rounded-lg transition-all border border-white/30"
          >
            편의시설 둘러보기
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

