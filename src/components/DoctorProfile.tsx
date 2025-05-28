import Image from 'next/image';

interface DoctorProfileProps {
  onBookAppointment: () => void;
}

export default function DoctorProfile({ onBookAppointment }: DoctorProfileProps) {
  return (
    <section className="p-4 md:p-8 lg:p-12 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block bg-blue-100 text-blue-600 px-6 py-2 rounded-full text-sm font-bold mb-4">
            Expert Implantologist in Kalyan
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
            Meet Your Dental Implant Specialist
          </h2>
          <p className="text-blue-600 md:text-lg">
            Restoring Smiles with Advanced Implant Technology
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg">
          <div className="md:flex md:gap-12 md:items-start mb-10">
            {/* Doctor's Image & Basic Info */}
            <div className="text-center mb-8 md:mb-0 md:flex-shrink-0 md:w-1/3">
              <div className="relative">
                <div className="w-56 h-56 md:w-72 md:h-72 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl mx-auto mb-6 p-2">
                  <div className="w-full h-full overflow-hidden rounded-xl relative">
                    <Image 
                      src="/images/doctor.png" 
                      alt="Dr. Apurva Chaudhari - Dental Implant Specialist" 
                      fill
                      className="object-cover transform hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 224px, 288px"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-md">
                  <h3 className="text-xl font-bold text-blue-600">Dr. Apurva Chaudhari</h3>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-purple-600 font-semibold text-lg mb-2">Chief Implantologist</p>
                <div className="flex justify-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">8+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">500+</div>
                    <div className="text-sm text-gray-600">Implants Done</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">4.9★</div>
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
                    Dr. Apurva Chaudhari leads Lotus Dental Care &amp; Implant Centre with a focus on advanced 
                    implantology. His 8+ years of specialized experience in dental implants has helped hundreds 
                    of patients regain their confident smile and natural chewing ability.
                  </p>
                  
                  <p className="text-lg">
                    Renowned for his expertise in painless implant procedures, Dr. Apurva has 
                    established one of Kalyan&apos;s most trusted implant practices. His commitment to using 
                    cutting-edge implant technology ensures predictable, long-lasting results with minimal recovery time.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-blue-800 mb-4">Implant Services</h3>
                    <ul className="space-y-3">
                      {[
                        "Single Tooth Implants",
                        "Multiple Teeth Implants",
                        "Full Mouth Rehabilitation",
                        "All-on-4 Implants",
                        "Immediate Load Implants"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <span className="bg-blue-200 p-1 rounded-full">
                            <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </span>
                          <span className="text-blue-900">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-purple-800 mb-4">Why Choose Us</h3>
                    <ul className="space-y-3">
                      {[
                        "Computer-Guided Implants",
                        "Premium Quality Implants",
                        "Painless Procedures",
                        "3D Treatment Planning",
                        "Lifetime Warranty*"
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
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 inline-flex items-center gap-2 group"
            >
              Book Your Implant Consultation
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <p className="mt-3 text-blue-600 font-medium">
              Free Consultation + 3D Implant Planning Worth ₹1500
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}