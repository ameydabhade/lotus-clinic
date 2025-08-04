import Image from 'next/image';

interface TransformingSmilesProps {
  onBookAppointment: () => void;
}

export default function TransformingSmiles({ onBookAppointment }: TransformingSmilesProps) {
  const testimonials = [
    {
      id: 1,
      title: "Smile Design Transformation",
      description: "Complete smile makeover with advanced dental aesthetics",
      image: "/images/results/1.png"
    },
    {
      id: 2,
      title: "Professional Smile Makeover",
      description: "Comprehensive transformation by Dr. Apurva Chaudhari",
      image: "/images/results/2.png"
    },
    {
      id: 3,
      title: "Full Mouth Rehabilitation",
      description: "Complete dental restoration with implants and prosthetics",
      image: "/images/results/3.png"
    }
  ];

  return (
    <section className="p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
      <h2 className="text-xl md:text-3xl font-bold text-center mb-2">
        <u>Transforming Smiles</u>
      </h2>
      <p className="text-center text-primary-400 font-bold mb-6 md:text-lg">
        Real results from our satisfied patients
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
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

      <p className="text-center my-6 md:text-lg max-w-3xl mx-auto">
        Watch our patient transformation stories<br />
        See how dental implants can change your life!
      </p>

      <div className="md:grid md:grid-cols-2 gap-6">
        <div>
          <div className="bg-white rounded-[20px] overflow-hidden shadow-lg mb-4">
            <div className="relative w-full max-w-sm mx-auto">
              <div className="relative pt-[177.78%]">
                <video 
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-[20px]" 
                  controls
                  muted
                  poster="/images/thumbnail.png"
                >
                  <source src="/images/transformations/1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">Complete Transformation</h3>
              <p className="text-gray-600 text-sm">Watch this amazing dental implant journey</p>
            </div>
          </div>
          <button 
            onClick={onBookAppointment} 
            className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-4 px-6 rounded-xl font-bold w-full mb-2 hover:from-primary-500 hover:to-primary-600 transition-all transform hover:scale-[1.02] shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
          >
            Schedule Your Implant Consultation
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <p className="text-center text-primary-400 font-medium">
            Premium Implant Care with 3D Treatment Planning
          </p>
        </div>

        <div>
          <div className="bg-white rounded-[20px] overflow-hidden shadow-lg mb-4">
            <div className="relative w-full max-w-sm mx-auto">
              <div className="relative pt-[177.78%]">
                <video 
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-[20px]" 
                  controls
                  muted
                  poster="/images/thumbnail.png"
                >
                  <source src="/images/transformations/2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">Life-Changing Results</h3>
              <p className="text-gray-600 text-sm">Experience the power of dental implants</p>
            </div>
          </div>
          <button 
            onClick={onBookAppointment} 
            className="bg-gradient-to-r from-purple-500 to-purple-600 text-white py-4 px-6 rounded-xl font-bold w-full mb-2 hover:from-purple-600 hover:to-purple-700 transition-all transform hover:scale-[1.02] shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
          >
            Book Your Appointment
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <p className="text-center text-purple-600 font-medium">
            Limited Time Special Offer on Implants
          </p>
        </div>
      </div>
    </section>
  );
}