'use client';
import Image from 'next/image';
import { useEffect } from 'react';
import { useMetaPixel } from '@/components/useMetaPixel';

export default function ThankYou() {
  const { trackAppointmentBooked, trackPhoneCall, trackWhatsAppClick } = useMetaPixel();

  useEffect(() => {
    // Track appointment booking when the thank you page loads
    trackAppointmentBooked({
      source: 'website_form',
      clinic: 'lotus_dental_care'
    });
  }, [trackAppointmentBooked]);

  const handlePhoneClick = () => {
    trackPhoneCall();
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Success Header */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-8 text-center">
          <div className="mb-4">
            <div className="mx-auto h-16 w-16 bg-white rounded-full flex items-center justify-center">
              <svg className="h-10 w-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Thank You for Booking!</h2>
          <p className="text-primary-100">We&apos;re excited to meet you and help transform your smile.</p>
        </div>

        <div className="p-6 md:p-8">
          {/* Doctor Info Section */}
          <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
            <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-primary-100">
              <Image
                src="/images/doctor.png"
                alt="Dr. Apurva Chaudhari"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Apurva Chaudhari</h3>
              <p className="text-gray-600 mb-4">
                With over 15 years of experience in advanced dentistry, Dr. Apurva Chaudhari specializes in cosmetic dentistry, 
                dental implants, and smile makeovers. Her gentle approach and expertise ensure you receive the highest quality dental care.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="bg-purple-50 px-4 py-2 rounded-lg">
                  <span className="text-purple-800 font-medium">15+ Years Experience</span>
                </div>
                <div className="bg-purple-50 px-4 py-2 rounded-lg">
                  <span className="text-purple-800 font-medium">5000+ Happy Patients</span>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">What happens next?</h4>
            <ol className="space-y-4">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-semibold">1</span>
                <span className="text-gray-600">Our team will review your appointment request</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-semibold">2</span>
                <span className="text-gray-600">We&apos;ll call you within 2 hours to confirm your appointment</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-semibold">3</span>
                <span className="text-gray-600">You&apos;ll receive an email confirmation with appointment details</span>
              </li>
            </ol>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="tel:+919876543210" 
              onClick={handlePhoneClick}
              className="flex-1 inline-flex justify-center items-center px-6 py-4 border border-transparent rounded-xl shadow-sm text-lg font-medium text-white bg-primary-600 hover:bg-primary-700"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
            <a 
              href="https://wa.me/919876543210" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="flex-1 inline-flex justify-center items-center px-6 py-4 border border-transparent rounded-xl shadow-sm text-lg font-medium text-white bg-green-600 hover:bg-green-700"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 