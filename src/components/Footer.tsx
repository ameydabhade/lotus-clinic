import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-12">
          <div className="relative w-32 md:w-48 h-12 md:h-16 mx-auto mb-4">
            <Image 
              src="/images/logo.png" 
              alt="Lotus Dental Care &amp; Implant Centre Logo" 
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left mb-8">
          <div>
            <h3 className="font-bold text-blue-600 mb-2 md:text-lg">Contact Us</h3>
            <a href="tel:+917020210426" className="block text-blue-600 font-bold md:text-lg hover:text-blue-700 transition-colors">+91 70202 10426</a>
            <a href="tel:+917304614767" className="block text-blue-600 font-bold md:text-lg hover:text-blue-700 transition-colors">+91 73046 14767</a>
            <p className="text-blue-600">lotusdentalcare01@gmail.com</p>
          </div>

          <div>
            <h3 className="font-bold text-blue-600 mb-2 md:text-lg">Open Hours</h3>
            <p className="text-blue-600 md:text-lg">Morning: 10:30 AM - 2:00 PM</p>
            <p className="text-blue-600 md:text-lg">Evening: 4:00 PM - 9:00 PM</p>
          </div>

          <div>
            <h3 className="font-bold text-blue-600 mb-2 md:text-lg">Location</h3>
            <p className="text-blue-600 font-bold">
              📍 Shop No. 2, Gulmohar Co-Op Hsg. Society, Flower Valley, Khadakpada Circle, Near Anat Halwai, Beturkar Pada, Kalyan (W), Maharashtra – 421301
            </p>
            <p className="text-blue-600 mt-2">
              <strong>Landmark:</strong> Near Monginis Cake Shop, facing Station Road / Kalatalav Road
            </p>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-6 bg-gray-200 rounded-lg overflow-hidden h-[300px] md:h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.68164664658!2d73.13387997517542!3d19.252701381988583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be797c65c39f01d%3A0xdfe1304f863e2f74!2sLotus%20Dental%20care%20and%20implant%20Centre%20in%20kalyan!5e0!3m2!1sen!2sin!4v1748290801057!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lotus Dental Care &amp; Implant Centre Location"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}