'use client';

import Image from 'next/image';

interface ClinicPhotosProps {
  onBookAppointment: () => void;
}

export default function ClinicPhotos({ onBookAppointment }: ClinicPhotosProps) {
  return (
    <section className="bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-50 p-4 md:p-8 lg:p-12">
      <h2 className="text-xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-primary-700 via-accent-600 to-secondary-600 bg-clip-text text-transparent">Our State-of-the-Art Clinic</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white/80 backdrop-blur-sm rounded-2xl h-48 sm:h-64 md:h-80 lg:h-96 flex items-center justify-center overflow-hidden relative shadow-custom hover:shadow-custom-lg transition-all duration-300 hover:-translate-y-1 border border-white/20">
            {i <= 4 ? (
              <Image 
                src={`/images/clinic/${i}.png`} 
                alt={`Clinic Photo ${i}`} 
                fill
                className="object-cover" 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={i <= 2}
              />
            ) : (
              <span className="text-gray-500 text-sm">Clinic Photo {i}</span>
            )}
          </div>
        ))}
      </div>
      <button onClick={onBookAppointment} className="bg-gradient-to-r from-accent-500 to-accent-600 text-white py-4 px-8 rounded-xl font-bold w-full md:max-w-md mx-auto block hover:from-accent-600 hover:to-accent-700 transition-all duration-300 transform hover:scale-105 shadow-custom">
        BOOK APPOINTMENT
      </button>
    </section>
  );
} 