'use client';

import { useCallback } from 'react';

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

export const useMetaPixel = () => {
  const trackEvent = useCallback((eventName: string, parameters?: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', eventName, parameters);
    }
  }, []);

  const trackCustomEvent = useCallback((eventName: string, parameters?: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', eventName, parameters);
    }
  }, []);

  const trackPageView = useCallback(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, []);

  const trackAppointmentBooked = useCallback((additionalData?: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && window.fbq) {
      // Standard events
      window.fbq('track', 'Lead');
      window.fbq('track', 'CompleteRegistration');
      
      // Custom event with additional data
      window.fbq('trackCustom', 'AppointmentBooked', {
        page: 'thank-you',
        timestamp: new Date().toISOString(),
        ...additionalData
      });
    }
  }, []);

  const trackPhoneCall = useCallback(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Contact');
      window.fbq('trackCustom', 'PhoneCall', {
        source: 'thank-you-page',
        timestamp: new Date().toISOString()
      });
    }
  }, []);

  const trackWhatsAppClick = useCallback(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Contact');
      window.fbq('trackCustom', 'WhatsAppClick', {
        source: 'thank-you-page',
        timestamp: new Date().toISOString()
      });
    }
  }, []);

  return {
    trackEvent,
    trackCustomEvent,
    trackPageView,
    trackAppointmentBooked,
    trackPhoneCall,
    trackWhatsAppClick
  };
}; 