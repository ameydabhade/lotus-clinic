import Image from 'next/image';

export default function ImplantTypes() {
  const implantData = [
    {
      title: "Single Implants",
      image: "/images/implant/single.png",
      description: "A Single dental implant crown is your ideal solution. It will:",
      benefits: [
        "Look and function just like a natural tooth",
        "Restore your natural chewing ability", 
        "Preserve the underlying bone",
        "Save your money in the long run"
      ]
    },
    {
      title: "Multiple Implants", 
      image: "/images/implant/Multiple.png",
      description: "A Multi-implant bridge. It is ideal for filling medium-sized gaps in your smile.",
      benefits: [
        "Exceptional Strength",
        "A Permanent solution",
        "Bone Preservation", 
        "A life long replacement for your natural teeth"
      ]
    },
    {
      title: "Implant-Supported Dentures",
      image: "/images/implant/supported.png", 
      description: "offer a stable alternative to regular dentures.",
      benefits: [
        "Snap into place over 2-4 implants",
        "Help prevent bone loss",
        "Vastly improve your chewing and confidence"
      ]
    },
    {
      title: "All-on-4 / All-on-6",
      image: "/images/implant/all_in.png",
      description: "All-on-4 &amp; All-on-6 Dental Implants provide extra stability and support:",
      benefits: [
        "Resistant to wear and stains",
        "A permanent solution that does not need removal", 
        "Custom-designed to attach securely to 4-6 implants per arch",
        "It looks natural and strong enough to eat hard food"
      ]
    }
  ];

  return (
    <section className="bg-primary-600 text-white p-4 md:p-8 lg:p-12 pb-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-purple-300 mb-4">
          When it comes to Dental Implants, choose <em>Dr. Purnata&apos;s Dental & Cosmetic Care</em>
        </h2>
        <p className="text-center text-primary-100 mb-8 md:text-lg max-w-3xl mx-auto">
          At Dr. Purnata&apos;s Dental & Cosmetic Care, we specialize in providing all types of dental implants 
          to help you achieve a beautiful and functional smile using the latest procedures and technology.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {implantData.map((implant, index) => (
            <div key={index} className="bg-white text-gray-800 p-4 md:p-6 rounded-lg">
              <div className="bg-primary-50/80 rounded-lg mb-4 relative aspect-[4/3] w-full">
                <Image 
                  src={implant.image} 
                  alt={implant.title} 
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <h3 className="font-bold text-center mb-3 md:text-lg">{implant.title}</h3>
              <p className="text-center mb-3 text-sm md:text-base">{implant.description}</p>
              <ul className="space-y-1">
                {implant.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary-500">✓</span>
                    <span className="text-sm md:text-base">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}