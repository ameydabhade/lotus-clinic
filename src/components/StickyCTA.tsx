interface StickyCtaProps {
  isVisible: boolean;
  onBookAppointment: () => void;
}

export default function StickyCTA({ isVisible, onBookAppointment }: StickyCtaProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary-600 text-white p-4 z-50 transition-transform duration-300">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-center sm:text-left">
          <h3 className="font-bold text-lg">Ready to Transform Your Smile?</h3>
          <p className="text-sm">Free Consultation + Digital Scan</p>
        </div>
        <div className="flex gap-2">
          <button onClick={onBookAppointment} className="bg-purple-500 text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-purple-600 transition-colors">
            BOOK APPOINTMENT
          </button>
          <a href="tel:+917768821234" className="bg-primary-700 text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-primary-700 transition-colors">
            CALL NOW ☏
          </a>
        </div>
      </div>
    </div>
  );
} 