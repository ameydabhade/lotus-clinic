import Image from 'next/image';

interface TransformingSmilesProps {
  onBookAppointment: () => void;
}

export default function TransformingSmiles({ onBookAppointment }: TransformingSmilesProps) {
  return (
    <section className="p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
      <h2 className="text-xl md:text-3xl font-bold text-center mb-2">
        <u>Transforming Smiles</u>
      </h2>
      <p className="text-center text-emerald-600 font-bold mb-6 md:text-lg">
        Witness the before and after the magic of our Painless Dental Implants!
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-gray-200 rounded-lg p-4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col items-center sm-h-2">
                <div className={`relative w-full ${i <= 2 ? 'h-40 md:h-48' : 'h-64'}`}>
                  <Image 
                    src={`/images/results/doubledf${i}before.png`} 
                    alt={`Before Smile ${i}`} 
                    fill
                    className={`${i <= 2 ? 'object-contain' : 'object-cover'} rounded shadow`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <span className="text-sm mt-2 text-gray-600">Before</span>
              </div>
              <div className="flex flex-col items-center">
                <div className={`relative w-full ${i <= 2 ? 'h-40 md:h-48' : 'h-64'}`}>
                  <Image 
                    src={`/images/results/doubledf${i}after.png`} 
                    alt={`After Smile ${i}`} 
                    fill
                    className={`${i <= 2 ? 'object-contain' : 'object-cover'} rounded shadow`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <span className="text-sm mt-2 text-gray-600">After</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center my-6 md:text-lg max-w-3xl mx-auto">
        Ready to witness the enchanting before-and-after journey?<br />
        Explore the magic of your potential new smile today!
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
            Free Consultation Worth ₹1,500
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