'use client';

import Image from 'next/image';

interface ClinicPhotosProps {
  onBookAppointment: () => void;
}

export default function ClinicPhotos({ onBookAppointment }: ClinicPhotosProps) {
  return (
    <section className="bg-primary-50 p-4 md:p-8 lg:p-12">
      <h2 className="text-xl md:text-3xl font-bold text-center mb-6">Our State-of-the-Art Clinic</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-gray-200 rounded-lg h-48 sm:h-64 md:h-80 lg:h-96 flex items-center justify-center overflow-hidden relative shadow-md hover:shadow-xl transition-shadow">
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
      <button onClick={onBookAppointment} className="bg-purple-500 text-white py-3 px-6 rounded-lg font-bold w-full md:max-w-md mx-auto block hover:bg-purple-600 transition-colors">
        BOOK APPOINTMENT
      </button>
    </section>
  );
} 