import { Plane, Ship, MapPin, DollarSign, Clock, ArrowRight } from 'lucide-react';

export default function GettingToBoracay() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-6 h-6" />
            <span className="text-cyan-100 font-medium">Travel Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Getting to Boracay: Your Complete Travel Guide
          </h1>
          <p className="text-xl text-cyan-50 leading-relaxed">
            Planning your journey to paradise? This comprehensive guide covers everything you need to know about traveling to Boracay from major cities around Asia and beyond. From flight options to ferry transfers, we've got you covered.
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Navigation</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="#manila" className="flex items-center gap-3 p-4 rounded-lg hover:bg-cyan-50 transition-colors group">
              <ArrowRight className="w-5 h-5 text-cyan-600 group-hover:translate-x-1 transition-transform" />
              <span className="font-medium text-gray-700 group-hover:text-cyan-600">From Manila, Philippines</span>
            </a>
            <a href="#korea" className="flex items-center gap-3 p-4 rounded-lg hover:bg-cyan-50 transition-colors group">
              <ArrowRight className="w-5 h-5 text-cyan-600 group-hover:translate-x-1 transition-transform" />
              <span className="font-medium text-gray-700 group-hover:text-cyan-600">From Seoul, Korea</span>
            </a>
            <a href="#australia" className="flex items-center gap-3 p-4 rounded-lg hover:bg-cyan-50 transition-colors group">
              <ArrowRight className="w-5 h-5 text-cyan-600 group-hover:translate-x-1 transition-transform" />
              <span className="font-medium text-gray-700 group-hover:text-cyan-600">From Australia</span>
            </a>
            <a href="#bali" className="flex items-center gap-3 p-4 rounded-lg hover:bg-cyan-50 transition-colors group">
              <ArrowRight className="w-5 h-5 text-cyan-600 group-hover:translate-x-1 transition-transform" />
              <span className="font-medium text-gray-700 group-hover:text-cyan-600">From Bali, Indonesia</span>
            </a>
            <a href="#vietnam" className="flex items-center gap-3 p-4 rounded-lg hover:bg-cyan-50 transition-colors group">
              <ArrowRight className="w-5 h-5 text-cyan-600 group-hover:translate-x-1 transition-transform" />
              <span className="font-medium text-gray-700 group-hover:text-cyan-600">From Vietnam</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* From Manila */}
        <article id="manila" className="mb-16 scroll-mt-24">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Plane className="w-8 h-8 text-cyan-600" />
              <h2 className="text-3xl font-bold text-gray-900">Getting to Boracay from Manila</h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Manila is the primary gateway for travelers heading to Boracay. You have two flight options: Caticlan (Godofredo P. Ramos Airport) or Kalibo International Airport.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4 flex items-center gap-2">
                <Plane className="w-5 h-5 text-cyan-600" />
                Best Airlines & Flight Options
              </h3>
              <div className="bg-cyan-50 p-6 rounded-lg mb-6">
                <p className="font-semibold text-gray-900 mb-3">Manila to Caticlan (Recommended)</p>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Philippine Airlines:</strong> Multiple daily flights, most reliable</li>
                  <li><strong>Cebu Pacific:</strong> Budget-friendly option, frequent departures</li>
                  <li><strong>AirAsia Philippines:</strong> Low-cost carrier with good schedules</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <Clock className="w-5 h-5 text-cyan-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Flight Time</p>
                    <p className="text-gray-700">45-60 minutes to Caticlan</p>
                    <p className="text-gray-700">60-75 minutes to Kalibo</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <DollarSign className="w-5 h-5 text-cyan-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Typical Cost</p>
                    <p className="text-gray-700">₱2,500-₱5,000 one-way</p>
                    <p className="text-sm text-gray-600">(~$45-$90 USD)</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4 flex items-center gap-2">
                <Ship className="w-5 h-5 text-cyan-600" />
                From Caticlan to Boracay
              </h3>
              <ol className="space-y-4 text-gray-700">
                <li><strong>1. Exit the airport</strong> - Follow signs to the jetty port (5-10 minute walk or take a tricycle)</li>
                <li><strong>2. E-Trike to Caticlan Jetty Port</strong> - Cost: ₱50-100 (~$1-2 USD) per person</li>
                <li><strong>3. Pay Terminal Fee</strong> - ₱100 (~$2 USD) at the port counter</li>
                <li><strong>4. Pay Environmental Fee</strong> - ₱75 (~$1.50 USD)</li>
                <li><strong>5. Board the Ferry</strong> - ₱25-30 (~$0.50 USD) for the 10-15 minute boat ride</li>
                <li><strong>6. E-Trike on Boracay</strong> - ₱50-100 (~$1-2 USD) to your hotel</li>
              </ol>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mt-6">
                <p className="font-semibold text-gray-900 mb-2">💡 Pro Tip</p>
                <p className="text-gray-700">Most hotels and resorts on Boracay offer airport transfers. Contact your accommodation in advance to arrange pickup from Caticlan or Kalibo airport - this eliminates the hassle and is often reasonably priced at ₱500-1,500 depending on your location.</p>
              </div>
            </div>
          </div>
        </article>

        {/* From Korea */}
        <article id="korea" className="mb-16 scroll-mt-24">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Plane className="w-8 h-8 text-cyan-600" />
              <h2 className="text-3xl font-bold text-gray-900">Getting to Boracay from Seoul, Korea</h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                There are no direct flights from Korea to Boracay, so you'll need to fly to Manila first, then take a connecting domestic flight.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4 flex items-center gap-2">
                <Plane className="w-5 h-5 text-cyan-600" />
                Best Airlines (Seoul to Manila)
              </h3>
              <div className="bg-cyan-50 p-6 rounded-lg mb-6">
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Korean Air:</strong> Full-service carrier, excellent service, checked bags included</li>
                  <li><strong>Philippine Airlines:</strong> National carrier with good connections to domestic flights</li>
                  <li><strong>Asiana Airlines:</strong> Another quality full-service option</li>
                  <li><strong>Cebu Pacific:</strong> Budget option with direct flights (no checked bags on basic fare)</li>
                  <li><strong>AirAsia:</strong> Low-cost carrier with competitive prices</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <Clock className="w-5 h-5 text-cyan-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Flight Time</p>
                    <p className="text-gray-700">4-4.5 hours (Incheon to Manila)</p>
                    <p className="text-gray-700">+ 1 hour (Manila to Caticlan)</p>
                    <p className="text-sm text-gray-600 mt-1">Total travel time: 8-10 hours including layover</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <DollarSign className="w-5 h-5 text-cyan-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Typical Cost</p>
                    <p className="text-gray-700">$200-$400 (Seoul-Manila)</p>
                    <p className="text-gray-700">+ $45-90 (Manila-Caticlan)</p>
                    <p className="text-sm text-gray-600 mt-1">Total: $245-$490 one-way</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Connecting Flight in Manila</h3>
              <p className="text-gray-700 mb-4">
                After arriving at Ninoy Aquino International Airport (NAIA) in Manila, you'll need to:
              </p>
              <ol className="space-y-3 text-gray-700 mb-6">
                <li><strong>1. Allow 3-4 hours minimum</strong> between international arrival and domestic departure</li>
                <li><strong>2. Collect baggage</strong> and clear customs</li>
                <li><strong>3. Proceed to Terminal 2 or 3</strong> for domestic flights (most airlines operate from these terminals)</li>
                <li><strong>4. Check-in for your Caticlan flight</strong> and re-check baggage</li>
              </ol>

              <p className="text-gray-700 mb-4">
                Once you arrive in Caticlan, follow the same ferry transfer process outlined in the Manila section above.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mt-6">
                <p className="font-semibold text-gray-900 mb-2">🎫 Booking Tip</p>
                <p className="text-gray-700">Book your international and domestic flights as separate tickets or use a booking aggregator. Consider booking Korean Air or PAL for through-ticketing which can make connections smoother.</p>
              </div>
            </div>
          </div>
        </article>

        {/* From Australia */}
        <article id="australia" className="mb-16 scroll-mt-24">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Plane className="w-8 h-8 text-cyan-600" />
              <h2 className="text-3xl font-bold text-gray-900">Getting to Boracay from Australia</h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Australian travelers will fly into Manila and connect to a domestic flight to reach Boracay. Major departure cities include Sydney, Melbourne, Brisbane, and Perth.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4 flex items-center gap-2">
                <Plane className="w-5 h-5 text-cyan-600" />
                Best Airlines (Australia to Manila)
              </h3>
              <div className="bg-cyan-50 p-6 rounded-lg mb-6">
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Philippine Airlines:</strong> Direct flights from Sydney and Melbourne, good domestic connections</li>
                  <li><strong>Cebu Pacific:</strong> Budget-friendly direct flights from Sydney and Melbourne</li>
                  <li><strong>Qantas:</strong> Premium service with codeshare options</li>
                  <li><strong>Singapore Airlines:</strong> Via Singapore hub, excellent service</li>
                  <li><strong>Cathay Pacific:</strong> Via Hong Kong, good for Perth/Brisbane departures</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <Clock className="w-5 h-5 text-cyan-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Flight Time</p>
                    <p className="text-gray-700">8-9 hours (Sydney/Melbourne to Manila)</p>
                    <p className="text-gray-700">+ 1 hour (Manila to Caticlan)</p>
                    <p className="text-sm text-gray-600 mt-1">Total: 12-15 hours including layover</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <DollarSign className="w-5 h-5 text-cyan-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Typical Cost</p>
                    <p className="text-gray-700">AUD $400-$800 (to Manila)</p>
                    <p className="text-gray-700">+ AUD $70-140 (Manila-Caticlan)</p>
                    <p className="text-sm text-gray-600 mt-1">Total: AUD $470-$940 one-way</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Domestic Connection from Manila</h3>
              <p className="text-gray-700 mb-4">
                After your international flight to Manila:
              </p>
              <ol className="space-y-3 text-gray-700 mb-6">
                <li><strong>1. Allow minimum 4-5 hours</strong> layover for international to domestic connections</li>
                <li><strong>2. Clear immigration and customs</strong> - can take 30-90 minutes depending on time of day</li>
                <li><strong>3. Book domestic flight</strong> with Philippine Airlines, Cebu Pacific, or AirAsia to Caticlan</li>
                <li><strong>4. Consider staying overnight in Manila</strong> if arriving late evening to avoid tight connections</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4 flex items-center gap-2">
                <Ship className="w-5 h-5 text-cyan-600" />
                Caticlan to Boracay Transfer
              </h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">Total costs for the Caticlan to Boracay journey:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• E-Trike to port: ₱50-100 (~AUD $1.50-3)</li>
                  <li>• Terminal fee: ₱100 (~AUD $3)</li>
                  <li>• Environmental fee: ₱75 (~AUD $2.20)</li>
                  <li>• Ferry: ₱25-30 (~AUD $0.70-0.90)</li>
                  <li>• E-Trike on Boracay: ₱50-100 (~AUD $1.50-3)</li>
                  <li className="pt-2 border-t border-gray-300"><strong>Total: ~AUD $9-12 per person</strong></li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mt-6">
                <p className="font-semibold text-gray-900 mb-2">🏨 Hotel Transfer Recommendation</p>
                <p className="text-gray-700">After a long international flight, most Australian travelers prefer to pre-arrange hotel transfers. Most Boracay accommodations offer airport pickup for ₱500-1,500 (AUD $15-45), which includes all ferry fees and transportation.</p>
              </div>
            </div>
          </div>
        </article>

        {/* From Bali */}
        <article id="bali" className="mb-16 scroll-mt-24">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Plane className="w-8 h-8 text-cyan-600" />
              <h2 className="text-3xl font-bold text-gray-900">Getting to Boracay from Bali, Indonesia</h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Traveling from Bali to Boracay requires at least one connection, typically through Manila. Some routes may include additional stops in Singapore, Jakarta, or Kuala Lumpur.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4 flex items-center gap-2">
                <Plane className="w-5 h-5 text-cyan-600" />
                Best Airlines & Route Options
              </h3>
              <div className="bg-cyan-50 p-6 rounded-lg mb-6">
                <p className="font-semibold text-gray-900 mb-3">Recommended Routes:</p>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Option 1: Direct to Manila</strong>
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>• Philippine Airlines (direct Bali-Manila)</li>
                      <li>• Cebu Pacific (direct, budget-friendly)</li>
                    </ul>
                  </li>
                  <li><strong>Option 2: Via Singapore</strong>
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>• Singapore Airlines or Scoot</li>
                      <li>• Good connection times</li>
                      <li>• Comfortable layover at Changi Airport</li>
                    </ul>
                  </li>
                  <li><strong>Option 3: Via Kuala Lumpur</strong>
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>• AirAsia (budget-friendly)</li>
                      <li>• Malaysia Airlines</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <Clock className="w-5 h-5 text-cyan-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Flight Time</p>
                    <p className="text-gray-700">4-5 hours (Bali to Manila direct)</p>
                    <p className="text-gray-700">+ 1 hour (Manila to Caticlan)</p>
                    <p className="text-sm text-gray-600 mt-1">Total: 9-14 hours depending on layovers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <DollarSign className="w-5 h-5 text-cyan-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Typical Cost</p>
                    <p className="text-gray-700">$200-$450 (Bali to Manila)</p>
                    <p className="text-gray-700">+ $45-90 (Manila to Caticlan)</p>
                    <p className="text-sm text-gray-600 mt-1">Total: $245-$540 one-way</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Manila Connection & Onward to Boracay</h3>
              <p className="text-gray-700 mb-4">
                Upon arriving in Manila from your international flight:
              </p>
              <ol className="space-y-3 text-gray-700 mb-6">
                <li><strong>1. Allow 4-5 hours minimum</strong> for your connection to Caticlan</li>
                <li><strong>2. Collect baggage and clear customs</strong></li>
                <li><strong>3. Transfer to domestic terminal</strong> (Terminal 2 or 3)</li>
                <li><strong>4. Check-in for Caticlan flight</strong> with Philippine Airlines, Cebu Pacific, or AirAsia</li>
                <li><strong>5. Fly to Caticlan</strong> (45-60 minutes)</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4 flex items-center gap-2">
                <Ship className="w-5 h-5 text-cyan-600" />
                Final Leg: Caticlan to Boracay
              </h3>
              <p className="text-gray-700 mb-4">The journey from Caticlan airport to your Boracay hotel:</p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-2 text-gray-700">
                  <li>• E-Trike to jetty port: ₱50-100</li>
                  <li>• Terminal fee: ₱100</li>
                  <li>• Environmental fee: ₱75</li>
                  <li>• Ferry crossing: ₱25-30 (10-15 minutes)</li>
                  <li>• E-Trike to hotel: ₱50-100</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mt-6">
                <p className="font-semibold text-gray-900 mb-2">✈️ Booking Strategy</p>
                <p className="text-gray-700">For the smoothest journey from Bali, consider booking your international flight to Manila and domestic flight to Caticlan on the same day, but with adequate layover time. Alternatively, spend a night in Manila to rest and explore the capital before heading to Boracay the next day.</p>
              </div>
            </div>
          </div>
        </article>

        {/* From Vietnam */}
        <article id="vietnam" className="mb-16 scroll-mt-24">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Plane className="w-8 h-8 text-cyan-600" />
              <h2 className="text-3xl font-bold text-gray-900">Getting to Boracay from Vietnam</h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Vietnam has excellent connectivity to the Philippines with multiple daily flights from major cities like Ho Chi Minh City (Saigon) and Hanoi to Manila.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4 flex items-center gap-2">
                <Plane className="w-5 h-5 text-cyan-600" />
                Best Airlines & Departure Cities
              </h3>
              <div className="bg-cyan-50 p-6 rounded-lg mb-6">
                <p className="font-semibold text-gray-900 mb-3">From Ho Chi Minh City (SGN):</p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li><strong>Philippine Airlines:</strong> Direct flights, good connections to Caticlan</li>
                  <li><strong>Cebu Pacific:</strong> Budget-friendly direct option</li>
                  <li><strong>VietJet Air:</strong> Low-cost carrier with competitive prices</li>
                  <li><strong>Vietnam Airlines:</strong> Full-service option</li>
                </ul>
                
                <p className="font-semibold text-gray-900 mb-3 mt-6">From Hanoi (HAN):</p>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Philippine Airlines:</strong> Multiple daily direct flights</li>
                  <li><strong>Cebu Pacific:</strong> Budget option</li>
                  <li><strong>VietJet Air:</strong> Low-cost alternative</li>
                  <li><strong>Bamboo Airways:</strong> Newer airline with competitive fares</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <Clock className="w-5 h-5 text-cyan-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Flight Time</p>
                    <p className="text-gray-700">2-2.5 hours (HCMC to Manila)</p>
                    <p className="text-gray-700">2.5-3 hours (Hanoi to Manila)</p>
                    <p className="text-gray-700">+ 1 hour (Manila to Caticlan)</p>
                    <p className="text-sm text-gray-600 mt-1">Total: 7-10 hours with layover</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <DollarSign className="w-5 h-5 text-cyan-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Typical Cost</p>
                    <p className="text-gray-700">$120-$300 (Vietnam to Manila)</p>
                    <p className="text-gray-700">+ $45-90 (Manila to Caticlan)</p>
                    <p className="text-sm text-gray-600 mt-1">Total: $165-$390 one-way</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Connecting in Manila</h3>
              <p className="text-gray-700 mb-4">
                The connection process in Manila is straightforward:
              </p>
              <ol className="space-y-3 text-gray-700 mb-6">
                <li><strong>1. Minimum 3-4 hour layover recommended</strong> between international and domestic flights</li>
                <li><strong>2. Immigration and customs</strong> - usually 30-60 minutes</li>
                <li><strong>3. Baggage collection</strong> from international flight</li>
                <li><strong>4. Transfer to domestic terminal</strong> - NAIA Terminal 2 or 3 for most carriers</li>
                <li><strong>5. Check-in and security</strong> for your Caticlan flight</li>
              </ol>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Popular Routes:</h4>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between items-center">
                    <span>Ho Chi Minh → Manila → Caticlan</span>
                    <span className="text-sm bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full">Most Popular</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Hanoi → Manila → Caticlan</span>
                    <span className="text-sm bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full">Common</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Da Nang → Manila → Caticlan</span>
                    <span className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full">Via HCMC</span>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4 flex items-center gap-2">
                <Ship className="w-5 h-5 text-cyan-600" />
                Arrival in Boracay
              </h3>
              <p className="text-gray-700 mb-4">
                From Caticlan airport, the final journey to Boracay island involves:
              </p>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Transportation Costs:</p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• E-Trike to port: ₱50-100 (~$1-2 / ₫25,000-50,000)</li>
                    <li>• Terminal fee: ₱100 (~$2 / ₫50,000)</li>
                    <li>• Environmental fee: ₱75 (~$1.50 / ₫38,000)</li>
                    <li>• Ferry ticket: ₱25-30 (~$0.50 / ₫13,000)</li>
                    <li>• E-Trike on Boracay: ₱50-100 (~$1-2 / ₫25,000-50,000)</li>
                    <li className="pt-2 border-t border-gray-300"><strong>Total: ~$6-8 per person</strong></li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mt-6">
                <p className="font-semibold text-gray-900 mb-2">🎒 Travel Tip for Vietnamese Travelers</p>
                <p className="text-gray-700">The journey from Vietnam to Boracay is relatively short and affordable. Many digital nomads and tourists make this trip for extended stays. Consider booking your flights in advance during peak season (November-May) as routes can fill up quickly. Hotel transfers from Caticlan typically cost ₱500-1,500 and handle all ferry arrangements.</p>
              </div>
            </div>
          </div>
        </article>

        {/* Final Tips Section */}
        <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Essential Travel Tips for Boracay</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Best Time to Visit
              </h3>
              <p className="text-cyan-50">November to May is the dry season with perfect beach weather. December to February is peak season with higher prices.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                Currency
              </h3>
              <p className="text-cyan-50">Philippine Peso (₱). ATMs are available on the island. Most hotels accept credit cards.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Island Access
              </h3>
              <p className="text-cyan-50">No cars on Boracay - only e-trikes and walking. The island is small and easily navigable.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">📱 Connectivity</h3>
              <p className="text-cyan-50">Most hotels offer WiFi. Our coworking space has Starlink high-speed internet for remote work.</p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

