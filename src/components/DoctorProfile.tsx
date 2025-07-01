import Image from 'next/image';

interface DoctorProfileProps {
  onBookAppointment: () => void;
}

export default function DoctorProfile({ onBookAppointment }: DoctorProfileProps) {
  return (
    <section className="p-4 md:p-8 lg:p-12 bg-gradient-to-br from-primary-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block bg-primary-100 text-primary-400 px-6 py-2 rounded-full text-sm font-bold mb-4">
            Expert Cosmetic Dentist in Pune
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
            Meet Your Dental & Cosmetic Specialist
          </h2>
          <p className="text-primary-400 md:text-lg">
            Recreating Smiles with Advanced Dental Technology
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg">
          <div className="md:flex md:gap-12 md:items-start mb-10">
            {/* Doctor's Image & Basic Info */}
            <div className="text-center mb-8 md:mb-0 md:flex-shrink-0 md:w-1/3">
              <div className="relative">
                <div className="w-56 h-56 md:w-72 md:h-72 bg-gradient-to-br from-primary-100 to-purple-100 rounded-2xl mx-auto mb-6 p-2">
                  <div className="w-full h-full overflow-hidden rounded-xl relative">
                    <Image 
                      src="/images/doctor.png" 
                      alt="Dr. Purnata Manohar - Cosmetic Dentist" 
                      fill
                      className="object-cover transform hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 224px, 288px"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-md">
                  <h3 className="text-xl font-bold text-primary-400">Dr. Purnata Manohar</h3>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-purple-600 font-semibold text-lg mb-2">Cosmetic Dentist & Dental Consultant</p>
                <div className="flex justify-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-400">10+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-400">1000+</div>
                    <div className="text-sm text-gray-600">Smile Makeovers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-400">4.9★</div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Doctor's Info & Expertise */}
            <div className="md:flex-grow">
              <div className="prose max-w-none">
                <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                  <p className="text-lg">
                    Dr. Purnata Manohar leads Dr. Purnata&apos;s Dental & Cosmetic Care with a focus on advanced 
                    cosmetic dentistry and comprehensive dental solutions. Her 10+ years of specialized experience 
                    in digital smile designing and dental implants has helped thousands of patients achieve their dream smile.
                  </p>
                  
                  <p className="text-lg">
                    Renowned for her expertise in painless treatments and smile makeovers, Dr. Purnata has 
                    established Pune&apos;s most trusted dental practice. Her commitment to using cutting-edge technology 
                    ensures predictable, aesthetically pleasing results with minimal discomfort.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-primary-800 mb-4">Speciality Services</h3>
                    <ul className="space-y-3">
                      {[
                        "Digital Smile Designing",
                        "Wedding Smile Makeovers",
                        "Dental Implants",
                        "Painless Root Canal Treatment",
                        "Full Mouth Rehabilitation"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <span className="bg-primary-200 p-1 rounded-full">
                            <svg className="w-4 h-4 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </span>
                          <span className="text-primary-900">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-purple-800 mb-4">Why Choose Us</h3>
                    <ul className="space-y-3">
                      {[
                        "3D Digital Planning",
                        "Premium Quality Materials",
                        "Painless Procedures",
                        "Advanced Sterilization",
                        "Two Convenient Locations"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <span className="bg-purple-200 p-1 rounded-full">
                            <svg className="w-4 h-4 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </span>
                          <span className="text-purple-900">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <button 
              onClick={onBookAppointment}
              className="bg-gradient-to-r from-primary-400 to-primary-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 inline-flex items-center gap-2 group"
            >
              Book Your Smile Consultation
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <p className="mt-3 text-primary-400 font-medium">
              Free Consultation + Digital Smile Planning Worth ₹1500
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}