'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes Dr. Purnata's Dental & Cosmetic Care different from other clinics?",
      answer: "At Dr. Purnata's Dental & Cosmetic Care, we combine advanced technology with personalized care. Our clinics feature state-of-the-art equipment, a highly sterilized environment, and a team led by Dr. Purnata Manohar who specializes in cosmetic dentistry and digital smile designing. We're one of the few clinics in Pune offering comprehensive dental and cosmetic solutions, painless treatments, and complimentary consultation with digital scan worth ₹1500."
    },
    {
      question: "What types of cosmetic and dental treatments do you offer?",
      answer: "We offer a comprehensive range of treatments including Digital Smile Designing, Wedding Smile Makeovers, Dental Implants, Painless Root Canal Treatment, Full Mouth Rehabilitation, Teeth Whitening, and advanced cosmetic dentistry procedures. Our treatments use premium quality materials from trusted international brands, ensuring long-lasting and aesthetically pleasing results."
    },
    {
      question: "How long does digital smile designing take and what's the process?",
      answer: "Digital smile designing typically takes 2-3 appointments. First, we conduct a comprehensive digital scan and analysis of your current smile. Then we create a customized treatment plan showing you the expected results before starting. The actual treatment duration varies based on your specific case, ranging from a few weeks to a few months depending on the complexity."
    },
    {
      question: "Do you provide emergency dental services?",
      answer: "Yes, we understand dental emergencies can happen anytime. Both our clinics are open from 10:30 AM to 2:00 PM and 4:00 PM to 9:00 PM, and we prioritize emergency cases. You can reach us at +91 77688 21234 (Koregaon Park) or +91 77589 12578 (Viman Nagar) for immediate assistance."
    },
    {
      question: "What payment options do you accept?",
      answer: "We accept all major payment methods including cash, cards, and UPI. For extensive treatments like implants or cosmetic procedures, we offer flexible EMI options with minimal documentation and 0% interest for up to 12 months. We also provide special discounts for students and family packages."
    },
    {
      question: "Where are your clinics located and how do I reach them?",
      answer: "We have two convenient locations in Pune: Koregaon Park Branch at Ganga Cascade, N Main Rd, Koregaon Park, and Viman Nagar Branch at Shubh Gateway, Airport Road, opposite Symbiosis College. Both clinics are easily accessible by public transport with ample parking space. You can find us using Google Maps or call us for directions."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="p-4 md:p-8 lg:p-12 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-primary-600 md:text-lg">
            Get answers to common questions about our dental & cosmetic services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border-2 rounded-xl transition-all duration-300 ${
                openFAQ === index 
                  ? 'border-primary-500 shadow-lg' 
                  : 'border-gray-200 hover:border-primary-200'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-5 text-left font-medium flex justify-between items-center gap-4"
              >
                <span className={`flex-grow pr-4 transition-colors duration-300 ${
                  openFAQ === index ? 'text-primary-600' : 'text-gray-700'
                }`}>
                  {faq.question}
                </span>
                <span className="text-primary-600 flex-shrink-0">
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