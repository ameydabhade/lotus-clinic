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
      description: "Comprehensive smile transformation by Dr. Apurva Chaudhari",
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
      <p className="text-center text-emerald-600 font-bold mb-6 md:text-lg">
        Real results from our satisfied patients
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{testimonial.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{testimonial.description}</p>
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
        Ready to transform your smile?<br />
        Book a consultation to discover your smile potential!
      </p>

      <div className="md:grid md:grid-cols-2 gap-6">
        <div>
          <div className="bg-gray-200 rounded-lg h-48 md:h-64 flex items-center justify-center mb-4">
            <span className="text-gray-500">Patient Success Video 1</span>
          </div>
          <button 
            onClick={onBookAppointment} 
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-4 px-6 rounded-xl font-bold w-full mb-2 hover:from-emerald-600 hover:to-emerald-700 transition-all transform hover:scale-[1.02] shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
          >
            Schedule Your Consultation
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <p className="text-center text-emerald-600 font-medium">
            Free Consultation + Digital Scan
          </p>
        </div>

        <div>
          <div className="bg-gray-200 rounded-lg h-48 md:h-64 flex items-center justify-center mb-4">
            <span className="text-gray-500">Patient Success Video 2</span>
          </div>
          <button 
            onClick={onBookAppointment} 
            className="bg-gradient-to-r from-purple-500 to-purple-600 text-white py-4 px-6 rounded-xl font-bold w-full mb-2 hover:from-purple-600 hover:to-purple-700 transition-all transform hover:scale-[1.02] shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
          >
            Book Your Appointment
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <p className="text-center text-purple-600 font-medium">
            Limited Time Special Offer
          </p>
        </div>
      </div>
    </section>
  );
}