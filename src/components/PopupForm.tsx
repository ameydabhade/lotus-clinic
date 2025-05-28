'use client';

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
  minutes: number;
  seconds: number;
}

export default function PopupForm({ isOpen, onClose, minutes, seconds }: PopupFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for booking your appointment! We will contact you shortly to confirm.');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute right-4 top-4 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
        >
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        {/* Header Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-6 rounded-t-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Transform Your Smile Today!</h2>
          <p className="text-primary-100">Book your consultation with Dr. Apurva Chaudhari</p>
          
          {/* Countdown Timer */}
          <div className="mt-4 flex items-center gap-4 bg-white/10 rounded-xl p-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl">⏰</span>
              </div>
            </div>
            <div>
              <p className="text-sm text-primary-100">Special Offer Expires In:</p>
              <div className="text-2xl font-bold">
                {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Offer Cards */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-lg">
              <h3 className="font-bold text-purple-800 mb-1">Free Consultation + Digital Scan</h3>
              <p className="text-sm text-purple-600">
                Worth <span className="font-bold text-lg">₹1,500</span>
              </p>
            </div>
 
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  required 
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all" 
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  required 
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all" 
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input 
                type="email" 
                required 
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all" 
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Treatment Interest</label>
              <select required className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all">
                <option value="">Select Treatment</option>
                <option value="implants">Dental Implants</option>
                <option value="braces">Braces & Aligners</option>
                <option value="cosmetic">Cosmetic Dentistry</option>
                <option value="general">General Dentistry</option>
                <option value="other">Other Treatment</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
              <textarea 
                rows={3} 
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all resize-none" 
                placeholder="Briefly describe your dental concerns..."
              ></textarea>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                <input 
                  type="date" 
                  required 
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                <select required className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all">
                  <option value="">Select Time Slot</option>
                  <option value="morning">Morning (10:30 AM - 2:00 PM)</option>
                  <option value="evening">Evening (4:00 PM - 9:00 PM)</option>
                </select>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-4 rounded-xl font-bold text-lg hover:from-primary-600 hover:to-primary-700 transition-all transform hover:scale-[1.02] focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Complete Booking
            </button>

           
          </form>
        </div>
      </div>
    </div>
  );
}