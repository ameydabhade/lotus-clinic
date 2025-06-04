'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    fbq: any;
  }
}

const MetaPixel = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize Meta Pixel
    if (typeof window !== 'undefined') {
      (function(f: any, b: any, e: string, v: string, n?: any, t?: any, s?: any) {
        if (f.fbq) return;
        n = f.fbq = function() {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
      
      window.fbq('init', '1488475935472820');
      window.fbq('track', 'PageView');
    }
  }, []);

  useEffect(() => {
    // Track page view on route change
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
      
      // Special tracking for thank you page
      if (pathname === '/thank-you') {
        // Track appointment booking conversion
        window.fbq('track', 'Lead');
        window.fbq('track', 'CompleteRegistration');
        
        // Custom event for appointment booking
        window.fbq('trackCustom', 'AppointmentBooked', {
          page: 'thank-you',
          timestamp: new Date().toISOString()
        });
      }
    }
  }, [pathname]);

  return (
    <>
      {/* Noscript fallback */}
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=1488475935472820&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
    </>
  );
};

export default MetaPixel; 