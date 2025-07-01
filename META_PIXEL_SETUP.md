# Meta Pixel Implementation Guide

## ✅ Status: Successfully Implemented & Build Passing

This project includes Facebook Meta Pixel tracking with comprehensive event monitoring and URL change detection. The implementation is specifically optimized for tracking dental appointment bookings and user interactions.

## Pixel ID
**Pixel ID:** 1488475935472820

## Implementation Details

### 1. Core Components

#### MetaPixel Component (`src/components/MetaPixel.tsx`)
- Uses Next.js `Script` component for optimal loading
- Initializes the Facebook Pixel using `dangerouslySetInnerHTML` for compatibility
- Automatically tracks page views on route changes using `usePathname`
- Provides special tracking for the thank you page
- Includes noscript fallback for users with JavaScript disabled

#### useMetaPixel Hook (`src/components/useMetaPixel.ts`)
- Custom React hook for easy tracking functionality
- Provides reusable functions for common events
- Type-safe implementation with proper TypeScript types
- Uses `unknown` instead of `any` for ESLint compliance

### 2. Tracked Events

#### Standard Facebook Events
- **PageView**: Automatically tracked on all page loads and route changes
- **Lead**: Tracked when users reach the thank you page
- **CompleteRegistration**: Tracked when appointment booking is completed
- **Contact**: Tracked when users click phone or WhatsApp buttons

#### Custom Events
- **AppointmentBooked**: Triggered on thank you page load with metadata
- **PhoneCall**: Tracked when users click the phone number
- **WhatsAppClick**: Tracked when users click the WhatsApp button

### 3. URL Change Detection

The implementation uses Next.js `usePathname` hook to detect route changes and automatically track:
- Page views on navigation
- Special conversion events on the thank you page (`/thank-you`)
- Additional context data for better analytics

### 4. Build Compliance

✅ **All ESLint errors resolved**
✅ **TypeScript compilation successful**
✅ **Production build passes**

The implementation follows Next.js and TypeScript best practices:
- Uses `Script` component instead of manual script injection
- Proper TypeScript typing with `unknown` instead of `any`
- SSR-compatible with proper window checks

### 5. Event Data Structure

Each event includes relevant metadata:

```javascript
// Appointment Booking Event
{
  page: 'thank-you',
  timestamp: '2024-01-01T12:00:00.000Z',
  source: 'website_form',
  clinic: 'dr_purnata_dental_care'
}

// Phone Call Event
{
  source: 'thank-you-page',
  timestamp: '2024-01-01T12:00:00.000Z'
}

// WhatsApp Click Event
{
  source: 'thank-you-page',
  timestamp: '2024-01-01T12:00:00.000Z'
}
```

### 6. Usage Examples

#### In React Components
```tsx
import { useMetaPixel } from '@/components/useMetaPixel';

const MyComponent = () => {
  const { trackCustomEvent, trackPhoneCall } = useMetaPixel();

  const handleSpecialAction = () => {
    trackCustomEvent('SpecialAction', { value: 100 });
  };

  const handlePhoneClick = () => {
    trackPhoneCall();
  };

  return (
    <button onClick={handlePhoneClick}>Call Now</button>
  );
};
```

### 7. Browser Compatibility

The implementation includes:
- Server-side rendering (SSR) compatibility
- Window object checks for browser environment
- Graceful degradation when JavaScript is disabled
- TypeScript support with proper type declarations
- Next.js Script component for optimal loading

### 8. Privacy & Compliance

- Noscript fallback ensures tracking works without JavaScript
- All tracking respects user privacy settings
- Data collection follows Facebook's guidelines
- No personally identifiable information (PII) is tracked

### 9. Testing & Verification

To verify the implementation:

1. **Browser Developer Tools**
   - Check Network tab for `fbevents.js` loading
   - Verify pixel fire in Network requests to `facebook.com/tr`

2. **Facebook Pixel Helper**
   - Install Facebook Pixel Helper browser extension
   - Visit the website and check for pixel fires
   - Verify events are firing correctly

3. **Facebook Events Manager**
   - Check real-time events in Facebook Ads Manager
   - Verify custom events are appearing correctly
   - Monitor conversion tracking

### 10. Build Status

✅ **Production Build:** Successful
✅ **Type Checking:** Passed
✅ **ESLint:** Compliant (1 minor warning about img tag in noscript - acceptable)

Build command: `npm run build` - **PASSES**

### 11. Troubleshooting

#### Common Issues
- **Pixel not loading**: Check console for JavaScript errors
- **Events not firing**: Verify window.fbq is available
- **Double tracking**: Ensure component isn't mounted multiple times

#### Debug Mode
```javascript
// Add to browser console for debugging
window.fbq('track', 'PageView', {}, { eventID: 'test-event-123' });
```

## Files Modified

1. `src/app/layout.tsx` - Added MetaPixel component
2. `src/components/MetaPixel.tsx` - Main pixel implementation (uses Script component)
3. `src/components/useMetaPixel.ts` - Custom tracking hook (TypeScript compliant)
4. `src/app/thank-you/page.tsx` - Enhanced with conversion tracking

## Deployment Ready

The Meta Pixel implementation is now production-ready and will work correctly on Vercel or any other hosting platform. The build passes all checks and the pixel will start tracking immediately upon deployment. 