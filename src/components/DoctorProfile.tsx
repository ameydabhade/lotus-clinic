interface DoctorProfileProps {
  onBookAppointment: () => void;
}

export default function DoctorProfile({ onBookAppointment }: DoctorProfileProps) {
  return (
    <section className="p-4 md:p-8 lg:p-12 bg-gradient-to-br from-emerald-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block bg-emerald-100 text-emerald-600 px-6 py-2 rounded-full text-sm font-bold mb-4">
            Your Smile Journey Begins Here
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
            Meet Our Expert Implantologist
          </h2>
          <p className="text-emerald-600 md:text-lg">
            Transforming Smiles with Precision & Care
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg">
          <div className="md:flex md:gap-12 md:items-start mb-10">
            {/* Doctor's Image & Basic Info */}
            <div className="text-center mb-8 md:mb-0 md:flex-shrink-0 md:w-1/3">
              <div className="relative">
                <div className="w-56 h-56 md:w-72 md:h-72 bg-gradient-to-br from-emerald-100 to-purple-100 rounded-2xl mx-auto mb-6 p-2">
                  <div className="w-full h-full overflow-hidden rounded-xl">
                    <img 
                      src="/images/doctor.png" 
                      alt="Dr. Apurva Chaudhari" 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-md">
                  <h3 className="text-xl font-bold text-emerald-600">Dr. Apurva Chaudhari</h3>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-purple-600 font-semibold text-lg mb-2">Founder & Chief Implantologist</p>
                <div className="flex justify-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-600">8+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-600">1000+</div>
                    <div className="text-sm text-gray-600">Happy Patients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-600">4.9★</div>
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
                    Dr. Apurva Chaudhari leads Lotus Dental Care & Implant Centre with a vision to provide 
                    world-class dental care in Kalyan. Her 8+ years of specialized experience in implantology 
                    and orthodontics has helped countless patients achieve their dream smiles.
                  </p>
                  
                  <p className="text-lg">
                    Renowned for her gentle approach and commitment to painless dentistry, Dr. Apurva has 
                    established one of Kalyan's most trusted dental practices. Her focus on patient comfort 
                    and use of advanced technology ensures optimal results with minimal discomfort.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-emerald-800 mb-4">Specializations</h3>
                    <ul className="space-y-3">
                      {[
                        "Dental Implants & Smile Design",
                        "Orthodontics & Clear Aligners",
                        "Full Mouth Rehabilitation",
                        "Laser Dentistry",
                        "Cosmetic Dentistry"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <span className="bg-emerald-200 p-1 rounded-full">
                            <svg className="w-4 h-4 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </span>
                          <span className="text-emerald-900">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-purple-800 mb-4">Our Approach</h3>
                    <ul className="space-y-3">
                      {[
                        "Patient-First Philosophy",
                        "Painless Treatments",
                        "Latest Digital Technology",
                        "Personalized Care Plans",
                        "International Sterilization Standards"
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
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 inline-flex items-center gap-2 group"
            >
              Schedule a Consultation with Dr. Apurva
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <p className="mt-3 text-emerald-600 font-medium">
              Get a Complimentary Consultation Worth ₹1,500
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}