'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the dental implant procedure like?",
      answer: "The procedure involves placing a titanium implant into the jawbone, allowing it to fuse with the bone over time. This serves as a stable foundation for a prosthetic tooth. The process includes a consultation, implant placement, a healing period, and finally, the attachment of a customized crown. At Dr. Purnata's clinic, we use advanced 3D planning and digital scanning for precise implant placement."
    },
    {
      question: "Am I a suitable candidate for dental implants?",
      answer: "Your overall health, bone density, and oral hygiene will be assessed to determine your candidacy for dental implants. Most adults with good general health and sufficient jawbone density are suitable candidates. During your free consultation, Dr. Purnata will conduct a thorough examination including digital scans to understand if implants are viable for you."
    },
    {
      question: "Is the dental implant procedure painful?",
      answer: "No, the procedure is performed under local anesthesia, ensuring you won't feel pain during the surgery. Dr. Purnata specializes in painless treatments and uses advanced techniques to minimize discomfort. Any post-operative discomfort can typically be managed with prescribed pain medication and usually subsides within a few days."
    },
    {
      question: "What is the expected recovery time, and how should I care for the implant afterward?",
      answer: "Recovery times vary, but you can expect a healing period of 3-6 months for the implant to fully integrate with the bone. It's crucial to follow post-operative care instructions, including proper oral hygiene, a soft diet initially, and any prescribed medications. We provide detailed aftercare instructions and regular follow-up appointments to ensure successful healing."
    },
    {
      question: "Are there any risks or complications associated with dental implants?",
      answer: "Like any surgical procedure, there are potential risks, such as infection or implant failure. However, these occurrences are rare (success rate is over 95%). At Dr. Purnata's clinic, we follow strict sterilization protocols and use premium quality implants to minimize potential complications. We will discuss all risks during your consultation."
    },
    {
      question: "What payment options do you offer for dental implants?",
      answer: "We accept all major payment methods including cash, cards, and UPI. For dental implant treatments, we offer flexible EMI options with minimal documentation and 0% interest for up to 12 months. We also provide special package deals for multiple implants and family treatments to make implants more affordable."
    },
    {
      question: "How long do dental implants last and what's the success rate?",
      answer: "Dental implants can last a lifetime with proper care and maintenance. Our success rate is over 95%, and we use premium international-grade titanium implants. The key to long-lasting implants is good oral hygiene, regular dental check-ups, and following our aftercare instructions. Most of our patients have had their implants for 10+ years without any issues."
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
            Frequently Asked Questions about Dental Implants
          </h2>
          <p className="text-primary-600 md:text-lg">
            Get answers to common questions about dental implant procedures and care
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