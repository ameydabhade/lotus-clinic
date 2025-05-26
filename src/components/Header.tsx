import Image from 'next/image';

interface HeaderProps {
  onBookAppointment: () => void;
}

export default function Header({ onBookAppointment }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm p-4 md:py-6">
      <div className="text-center max-w-6xl mx-auto md:flex md:items-center md:justify-between md:text-left">
        <div className="md:flex md:items-center md:gap-8">
          <div className="relative w-48 h-16 mx-auto mb-4 md:mb-0 md:mx-0">
            <Image 
              src="/images/logo.png" 
              alt="Lotus Dental Care &amp; Implant Centre Logo" 
              fill
              className="object-contain"
                            priority
            />
          </div>
          <p className="text-sm text-emerald-600 mb-4 md:mb-0">
            📍 Shop No. 2, Gulmohar Co-Op Hsg. Society, Flower Valley, Khadakpada Circle, Kalyan (W)
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center md:gap-4">
          <button onClick={onBookAppointment} className="bg-purple-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-600 transition-colors">
            BOOK APPOINTMENT
          </button>
          <a href="tel:+917020210426" className="bg-emerald-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-emerald-700 transition-colors text-center">
            CALL NOW ☏
          </a>
        </div>
      </div>
    </header>
  );
}