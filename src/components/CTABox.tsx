interface CTABoxProps {
  onBookAppointment: () => void;
}

export default function CTABox({ onBookAppointment }: CTABoxProps) {
  return (
    <section className="bg-gradient-to-br from-primary-600 via-accent-600 to-secondary-600 text-white p-8 md:p-12 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 animate-pulse-soft"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full -ml-20 -mb-20"></div>
      
      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-8">
          <span className="inline-block bg-gradient-to-r from-yellow-400 to-secondary-400 text-gray-900 px-6 py-2 rounded-full text-sm font-bold mb-4 animate-pulse-soft">
            🎉 Free Consultation + Digital Scan worth ₹1500
          </span>
          
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Transform Your Smile Today!
          </h2>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-6">
            <div className="text-3xl md:text-5xl font-bold text-yellow-300 mb-2">
              Limited Time Offer
            </div>
            <p className="text-yellow-100 text-lg">Digital Smile Designing & Cosmetic Treatments</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
              <h3 className="text-xl font-bold mb-2 text-accent-200">
                Free Consultation + Digital Scan Package
              </h3>
              <ul className="space-y-2 text-left">
                <li className="flex items-center gap-2">
                  <span className="text-yellow-300">✓</span>
                  <span>Complete Oral Health Check-up</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-300">✓</span>
                  <span>Digital Smile Analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-300">✓</span>
                  <span>Treatment Plan & Cost Estimate</span>
                </li>
              </ul>
              <div className="mt-2 text-yellow-300 font-bold">
                Free Consultation + Digital Scan worth ₹1500
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
              <h3 className="text-xl font-bold mb-2 text-accent-200">
                Exclusive Benefits
              </h3>
              <ul className="space-y-2 text-left">
                <li className="flex items-center gap-2">
                  <span className="text-yellow-300">✓</span>
                  <span>0% EMI for up to 12 Months</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-300">✓</span>
                  <span>Special Discount on First Treatment</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-300">✓</span>
                  <span>Free Follow-up Visits</span>
                </li>
              </ul>
              <div className="mt-2 text-accent-200 font-bold">
                Valid for Next 48 Hours
              </div>
            </div>
          </div>

          <button 
            onClick={onBookAppointment}
            className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-8 py-4 rounded-2xl text-xl font-bold shadow-custom-lg transition-all duration-300 hover:scale-105 w-full md:w-auto inline-flex items-center justify-center gap-2 group"
          >
            Book Your Free Consultation + Digital Scan
            <span className="group-hover:translate-x-1 transition-transform">➤</span>
          </button>
          
          <p className="mt-4 text-sm text-primary-100">
            *Limited slots available. T&C apply.
          </p>
        </div>
      </div>
    </section>
  );
} 