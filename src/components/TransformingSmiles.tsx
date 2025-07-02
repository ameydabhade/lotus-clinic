import Image from 'next/image';

interface TransformingSmilesProps {
  onBookAppointment: () => void;
}

export default function TransformingSmiles({ onBookAppointment }: TransformingSmilesProps) {
  const testimonials = [
    {
      id: 1,
      title: "Basal Implants Transformation",
      description: "Complete full mouth reconstruction using basal implant technology",
      image: "/images/results/1.png"
    },
    {
      id: 2,
      title: "Single Tooth Implant",
      description: "Precise single tooth replacement with natural-looking results",
      image: "/images/results/2.png"
    },
    {
      id: 3,
      title: "Advanced Basal Implant Case",
      description: "Full mouth rehabilitation with immediate loading basal implants",
      image: "/images/results/3.png"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-50 p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-2 bg-gradient-to-r from-primary-700 via-accent-600 to-secondary-600 bg-clip-text text-transparent">
          <u>Implant Transformations by Dr. Purnata</u>
        </h2>
        <p className="text-center text-primary-600 font-bold mb-6 md:text-lg">
          Actual before & after cases from our clinic
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-custom hover:shadow-custom-lg transition-all duration-300 hover:-translate-y-1 border border-white/20 overflow-hidden">
              <div className="p-4">
                <div className="relative h-64 w-full">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.title} - Before and After`}
                    fill
                    className="object-contain rounded"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center my-6 md:text-lg max-w-3xl mx-auto text-gray-700">
          These are actual cases treated by Dr. Purnata Manohar<br />
          Watch our patient testimonials and see how our advanced implant techniques can transform your smile!
        </p>

        <div className="md:grid md:grid-cols-2 gap-6">
          <div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-custom hover:shadow-custom-lg transition-all duration-300 mb-4 border border-white/20">
              <div className="relative w-full max-w-sm mx-auto">
                <div className="relative pt-[177.78%]">
                  <video 
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-t-2xl" 
                    controls
                    muted
                    poster="/images/transformations/1.png"
                  >
                    <source src="/images/transformations/1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1 text-gray-900">Patient Testimonial</h3>
                <p className="text-gray-600 text-sm">Patient sharing their dental implant transformation experience</p>
              </div>
            </div>
            <button 
              onClick={onBookAppointment} 
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-4 px-6 rounded-xl font-bold w-full mb-2 hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 shadow-custom flex items-center justify-center gap-2 group"
            >
              Schedule Your Implant Consultation
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <p className="text-center text-primary-600 font-medium">
              Free Consultation + 3D Implant Planning
            </p>
          </div>

          <div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-custom hover:shadow-custom-lg transition-all duration-300 mb-4 border border-white/20">
              <div className="relative w-full max-w-sm mx-auto">
                <div className="relative pt-[177.78%]">
                  <video 
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-t-2xl" 
                    controls
                    muted
                    poster="/images/transformations/2.png"
                  >
                    <source src="/images/transformations/2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1 text-gray-900">Patient Success Story</h3>
                <p className="text-gray-600 text-sm">Another satisfied patient shares their implant journey and results</p>
              </div>
            </div>
            <button 
              onClick={onBookAppointment} 
              className="bg-gradient-to-r from-accent-500 to-accent-600 text-white py-4 px-6 rounded-xl font-bold w-full mb-2 hover:from-accent-600 hover:to-accent-700 transition-all duration-300 transform hover:scale-105 shadow-custom flex items-center justify-center gap-2 group"
            >
              Book Your Implant Consultation
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <p className="text-center text-accent-600 font-medium">
              Free Consultation + Digital Implant Planning
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}