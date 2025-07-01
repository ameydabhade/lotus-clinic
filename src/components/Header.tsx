import Image from 'next/image';
import { useState } from 'react';

interface HeaderProps {
  onBookAppointment: () => void;
}

interface LocationData {
  name: string;
  address: string;
  phone: string;
  mapUrl: string;
}

export default function Header({ onBookAppointment }: HeaderProps) {
  const [showLocationPopup, setShowLocationPopup] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<LocationData | null>(null);

  const locations: { [key: string]: LocationData } = {
    koregaon: {
      name: "Koregaon Park Branch",
      address: "Ganga Cascade, Flat 6, Between lane 5 and 6 Private Lane-5A, N Main Rd, Koregaon Park, Pune, Maharashtra 411001",
      phone: "+91 77688 21234",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.9850094894487!2d73.88967937516963!3d18.53424408256726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1c5c5f9e8eb%3A0x1f5d4c2b8e5f9a8b!2sKoregaon%20Park%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1748290801057!5m2!1sen!2sin"
    },
    viman: {
      name: "Viman Nagar Branch",
      address: "Shop A-104, Shubh Gateway, Airport road, Opposite Symbiosis College, Viman Nagar, Pune, Maharashtra 411014",
      phone: "+91 77589 12578",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2607914962835!2d73.9074905751698!3d18.56338048254163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c6ab7b5b8b8b%3A0x2b8d5f9e8e5c1f7a!2sViman%20Nagar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1748290801057!5m2!1sen!2sin"
    }
  };

  const openLocationPopup = (locationKey: string) => {
    setSelectedLocation(locations[locationKey]);
    setShowLocationPopup(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLocationPopup = () => {
    setShowLocationPopup(false);
    setSelectedLocation(null);
    document.body.style.overflow = '';
  };

  const openInMaps = () => {
    if (selectedLocation) {
      window.open(selectedLocation.mapUrl, '_blank');
    }
  };

  const callLocation = () => {
    if (selectedLocation) {
      window.open(`tel:${selectedLocation.phone}`, '_self');
    }
  };

  return (
    <>
      <header className="bg-white/90 backdrop-blur-md shadow-custom p-4 md:py-6 border-b border-white/20">
        <div className="text-center max-w-6xl mx-auto md:flex md:items-center md:justify-between md:text-left">
          <div className="md:flex md:items-center md:gap-8">
            <div className="relative w-48 h-16 mx-auto mb-4 md:mb-0 md:mx-0">
              <Image 
                src="/images/logo.png" 
                alt="Dr. Purnata's Dental &amp; Cosmetic Care Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
            
            {/* Two Location Buttons - Half Width Each */}
            <div className="flex gap-2 mb-4 md:mb-0 justify-center w-full max-w-sm mx-auto md:mx-0">
              <button 
                onClick={() => openLocationPopup('koregaon')}
                className="flex-1 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-3 py-2 rounded-xl text-sm font-medium hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 shadow-custom flex items-center justify-center gap-1"
              >
                📍 Koregaon Park
              </button>
              <button 
                onClick={() => openLocationPopup('viman')}
                className="flex-1 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-3 py-2 rounded-xl text-sm font-medium hover:from-secondary-600 hover:to-secondary-700 transition-all duration-300 transform hover:scale-105 shadow-custom flex items-center justify-center gap-1"
              >
                📍 Viman Nagar
              </button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:gap-4">
            <button onClick={onBookAppointment} className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 py-3 rounded-xl font-bold hover:from-accent-600 hover:to-accent-700 transition-all duration-300 transform hover:scale-105 shadow-custom">
              BOOK APPOINTMENT
            </button>
            <a href="tel:+917768821234" className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-xl font-bold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:scale-105 text-center shadow-custom">
              CALL NOW ☏
            </a>
          </div>
        </div>
      </header>

      {/* Location Popup */}
      {showLocationPopup && selectedLocation && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-custom-lg border border-white/20">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900 bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 bg-clip-text text-transparent">
                {selectedLocation.name}
              </h3>
              <button 
                onClick={closeLocationPopup}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold transition-colors"
              >
                ×
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary-700 mb-2">📍 Address</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {selectedLocation.address}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-primary-700 mb-2">📞 Phone</h4>
                <a 
                  href={`tel:${selectedLocation.phone}`} 
                  className="text-primary-600 font-bold hover:text-primary-700 transition-colors"
                >
                  {selectedLocation.phone}
                </a>
              </div>

              <div>
                <h4 className="font-semibold text-primary-700 mb-2">⏰ Clinic Hours</h4>
                <div className="text-gray-600 text-sm">
                  <p>Morning: 10:30 AM - 2:00 PM</p>
                  <p>Evening: 4:00 PM - 9:00 PM</p>
                  <p className="text-xs text-accent-600 mt-1">Emergency appointments available</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <button 
                onClick={openInMaps}
                className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-xl font-bold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 shadow-custom flex items-center justify-center gap-2"
              >
                🗺️ Open in Maps
              </button>
              <button 
                onClick={callLocation}
                className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 py-3 rounded-xl font-bold hover:from-accent-600 hover:to-accent-700 transition-all duration-300 transform hover:scale-105 shadow-custom flex items-center justify-center gap-2"
              >
                📞 Call Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}