import Image from 'next/image';

interface HeroSectionProps {
  onBookAppointment: () => void;
}

export default function HeroSection({ onBookAppointment }: HeroSectionProps) {
  return (
    <section className="p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-6 leading-tight">
        Transform Your Smile with<br />
        <span className="text-primary-600">Advanced Dental Care</span>
      </h1>

      <div className="md:flex md:items-center md:gap-8 md:mb-12">
        <div className="relative rounded-lg h-48 md:h-[400px] mb-6 md:mb-0 md:flex-1 overflow-hidden ">
          <Image 
            src="/images/hero.png" 
            alt="Dental Care Showcase" 
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Special Offer Section */}
        <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-600 text-white p-6 rounded-xl text-center mb-6 md:mb-0 md:flex-1 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary-500 opacity-10 rounded-full -mr-12 -mt-12"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-500 opacity-10 rounded-full -ml-16 -mb-16"></div>
          
          <div className="relative">
            <span className="inline-block bg-yellow-400 text-primary-900 px-4 py-1 rounded-full text-sm font-bold mb-4 animate-pulse">
              Limited Time Offer
            </span>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Smile Makeover Package
            </h2>
            
            <div className="bg-primary-500 bg-opacity-50 p-4 rounded-lg mb-4">
              <div className="text-yellow-300 text-4xl md:text-5xl font-bold mb-1">
                Special Offer
              </div>
              <p className="text-yellow-100 text-sm">Premium Treatments at Best Prices</p>
            </div>

            <ul className="text-left mb-4 space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-yellow-300">✓</span>
                <span className="text-sm">Free Consultation + Digital Scan</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-300">✓</span>
                <span className="text-sm">Easy EMI Options Available</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-300">✓</span>
                <span className="text-sm">International Quality Materials</span>
              </li>
            </ul>

            <button 
              onClick={onBookAppointment}
              className="bg-purple-500 text-white px-8 py-4 rounded-xl text-xl font-bold shadow-lg hover:bg-purple-600 transition-all hover:scale-105 w-full md:w-auto group"
            >
              Book Now & Save
              <span className="block text-sm text-purple-200 group-hover:text-white transition-colors">Limited Slots Available</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 mb-8 md:flex-row md:justify-center">
        <button onClick={onBookAppointment} className="bg-purple-500 text-white py-4 px-8 rounded-lg font-bold text-lg hover:bg-purple-600 transition-colors md:min-w-[240px]">
          📞 Book Free Consultation + Digital Scan
        </button>
        <a 
          href="tel:+917020210426" 
          className="bg-primary-600 text-white py-4 px-8 rounded-lg font-bold text-lg text-center hover:bg-primary-900 transition-colors md:min-w-[240px]"
        >
          CALL NOW ☏
        </a>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gradient-to-br from-primary-50 to-white p-6 md:p-8 rounded-2xl shadow-lg md:max-w-4xl md:mx-auto">
        <div className="text-center mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Why Choose <span className="text-primary-600">Lotus Dental Care?</span>
          </h3>
          <p className="text-primary-600 md:text-lg">Experience Excellence in Dental Care</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Left Column */}
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-3">
                <div className="bg-primary-100 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Premium Location</h4>
                  <p className="text-gray-600">Largest dental clinic in Kalyan West with easy accessibility</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-3">
                <div className="bg-primary-100 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Trusted Excellence</h4>
                  <p className="text-gray-600">Top-rated clinic with consistent 5-star Google reviews</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-3">
                <div className="bg-primary-100 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Flexible Payments</h4>
                  <p className="text-gray-600">Easy EMI options with 0% interest for up to 12 months</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-3">
                <div className="bg-primary-100 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Safety First</h4>
                  <p className="text-gray-600">International-grade sterilization & hygiene protocols</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-3">
                <div className="bg-primary-100 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Modern Facility</h4>
                  <p className="text-gray-600">State-of-the-art equipment & comfortable environment</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-3">
                <div className="bg-primary-100 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Expert Specialization</h4>
                  <p className="text-gray-600">Advanced implant & orthodontic treatments</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={onBookAppointment} 
            className="bg-purple-500 text-white py-4 px-8 rounded-xl font-bold text-lg hover:bg-purple-600 transition-all hover:scale-105 inline-flex items-center gap-2 group"
          >
            Schedule Your Visit
            <span className="group-hover:translate-x-1 transition-transform">➤</span>
          </button>
          <div className="mt-3 space-y-1">
            <p className="text-primary-600 font-bold">Book Now & Get Free Consultation + Digital Scan</p>
            <p className="text-sm text-gray-500">Limited Time Offer</p>
          </div>
        </div>
      </div>
    </section>
  );
}