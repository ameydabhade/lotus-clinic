import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white/90 backdrop-blur-sm p-4 md:p-8 lg:p-12 border-t border-white/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-12">
          <div className="relative w-32 md:w-48 h-12 md:h-16 mx-auto mb-4">
            <Image 
              src="/images/logo.png" 
              alt="Dr. Purnata's Dental &amp; Cosmetic Care Logo" 
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left mb-8">
          <div>
            <h3 className="font-bold text-primary-700 mb-3 md:text-lg">Contact Us</h3>
            <div className="mb-3">
              <p className="font-semibold text-primary-700">Koregaon Park Branch</p>
              <a href="tel:+917768821234" className="block text-primary-600 font-bold md:text-lg hover:text-primary-700 transition-colors">+91 77688 21234</a>
            </div>
            <div className="mb-3">
              <p className="font-semibold text-primary-700">Viman Nagar Branch</p>
              <a href="tel:+917758912578" className="block text-primary-600 font-bold md:text-lg hover:text-primary-700 transition-colors">+91 77589 12578</a>
            </div>
            <p className="text-primary-600">purnata.manohar@gmail.com</p>
          </div>

          <div>
            <h3 className="font-bold text-primary-700 mb-3 md:text-lg">Open Hours</h3>
            <p className="text-primary-600 md:text-lg">Morning: 10:30 AM - 2:00 PM</p>
            <p className="text-primary-600 md:text-lg">Evening: 4:00 PM - 9:00 PM</p>
            <p className="text-primary-600 text-sm mt-2">Emergency appointments available</p>
          </div>

          <div>
            <h3 className="font-bold text-primary-700 mb-3 md:text-lg">Our Locations</h3>
            <div className="space-y-4">
              <div>
                <p className="text-primary-600 font-bold text-sm">Koregaon Park Branch</p>
                <p className="text-primary-600 text-sm">
                  📍 Ganga Cascade, Flat 6, Between lane 5 and 6 Private Lane-5A, N Main Rd, Koregaon Park, Pune, Maharashtra 411001
                </p>
              </div>
              <div>
                <p className="text-primary-600 font-bold text-sm">Viman Nagar Branch</p>
                <p className="text-primary-600 text-sm">
                  📍 Shop A-104, Shubh Gateway, Airport road, Opposite Symbiosis College, Viman Nagar, Pune, Maharashtra 411014
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Two Google Maps Side by Side */}
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          {/* Koregaon Park Branch Map */}
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl overflow-hidden h-[250px] md:h-[300px] shadow-custom">
            <div className="bg-gradient-to-r from-primary-600 to-accent-600 text-white p-3 text-center">
              <h4 className="font-bold text-sm md:text-base">Koregaon Park Branch</h4>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.771077760982!2d73.89576317514378!3d18.539244268603678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c105d7d4d42d%3A0xc2377309b118f5a5!2sDr.%20Purnata&#39;s%20Dental%20%26%20Cosmetic%20Care%2C%20Koregaon%20Park!5e0!3m2!1sen!2sin!4v1751350664335!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dr. Purnata's Dental &amp; Cosmetic Care - Koregaon Park Location"
              className="h-[200px] md:h-[250px]"
            ></iframe>
          </div>

          {/* Viman Nagar Branch Map */}
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl overflow-hidden h-[250px] md:h-[300px] shadow-custom">
            <div className="bg-gradient-to-r from-primary-600 to-accent-600 text-white p-3 text-center">
              <h4 className="font-bold text-sm md:text-base">Viman Nagar Branch</h4>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.964156586425!2d73.90266428036496!3d18.575654622461684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1146129368b%3A0x54bd0248d33570b8!2sDr.%20Purnata&#39;s%20Dental%20%26%20Cosmetic%20Care%20Viman%20Nagar%20Branch!5e0!3m2!1sen!2sin!4v1751350691306!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dr. Purnata's Dental &amp; Cosmetic Care - Viman Nagar Location"
              className="h-[200px] md:h-[250px]"
            ></iframe>
          </div>
        </div>

        <div className="text-center mt-6 pt-6 border-t border-gray-200">
          <p className="text-primary-600 text-sm">
            © 2025 Dr. Purnata&apos;s Dental & Cosmetic Care. All rights reserved. | Recreating Smiles
          </p>
        </div>
      </div>
    </footer>
  );
}