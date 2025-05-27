'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes Lotus Dental Care different from other clinics?",
      answer: "At Lotus Dental Care, we combine advanced technology with personalized care. Our clinic features state-of-the-art equipment, a highly sterilized environment, and a team led by Dr. Apurva Chaudhari who specializes in implantology and orthodontics. We're also one of the few clinics in Kalyan offering digital smile design, painless treatments, and complimentary consultation with digital scan worth 1500."
    },
    {
      question: "What types of dental implants do you offer and how much do they cost?",
      answer: "We offer single tooth implants, multiple teeth implants, and full mouth rehabilitation options. Our implants are available at competitive prices with flexible EMI options available. We use premium quality implant materials from trusted international brands, ensuring long-lasting results."
    },
    {
      question: "How long does it take to get braces or clear aligners?",
      answer: "The treatment duration varies based on your specific case. Typically, braces treatment takes 12-18 months, while clear aligners might take 6-15 months. During your consultation, Dr. Apurva will provide a detailed timeline based on your unique dental structure and requirements."
    },
    {
      question: "Do you provide emergency dental services?",
      answer: "Yes, we understand dental emergencies can happen anytime. Our clinic is open from 10:30 AM to 2:00 PM and 4:00 PM to 9:00 PM, and we prioritize emergency cases. You can reach us at 70202 10426 or 73046 14767 for immediate assistance."
    },
    {
      question: "What payment options do you accept?",
      answer: "We accept all major payment methods including cash, cards, and UPI. For extensive treatments like implants or orthodontics, we offer flexible EMI options with minimal documentation. We also provide special discounts for senior citizens and family packages."
    },
    {
      question: "Is the clinic easily accessible?",
      answer: "Yes, our clinic is conveniently located in Kalyan West with ample parking space. We're easily accessible by public transport and have a spacious, modern facility designed for patient comfort. You can find us using Google Maps or call us for directions."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="p-4 md:p-8 lg:p-12 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-emerald-600 md:text-lg">
            Get answers to common questions about our dental services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border-2 rounded-xl transition-all duration-300 ${
                openFAQ === index 
                  ? 'border-emerald-500 shadow-lg' 
                  : 'border-gray-200 hover:border-emerald-200'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-5 text-left font-medium flex justify-between items-center gap-4"
              >
                <span className={`flex-grow pr-4 transition-colors duration-300 ${
                  openFAQ === index ? 'text-emerald-600' : 'text-gray-700'
                }`}>
                  {faq.question}
                </span>
                <span className="text-emerald-600 flex-shrink-0">
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </span>
              </button>
              {openFAQ === index && (
                <div className="p-5 border-t border-gray-100 bg-white rounded-b-xl">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}