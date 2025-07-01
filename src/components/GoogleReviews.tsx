import Image from 'next/image';

export default function GoogleReviews() {
  const reviews = [
    {
      name: "Rajeshwari Ajwani",
      initials: "RA",
      date: "March 15, 2024",
      review: "Dr. Purnata is an amazing dentist! Got my smile makeover done here and the experience was completely painless. The clinic is very modern and clean. The staff is friendly and professional. Highly recommend Dr. Purnata's Dental & Cosmetic Care for any dental treatment."
    },
    {
      name: "Abin Varghese", 
      initials: "AV",
      date: "February 28, 2024",
      review: "Best dental clinic in Pune! Dr. Purnata explained everything clearly and made me feel comfortable throughout my cosmetic treatment. The clinic has all the latest equipment and follows strict hygiene protocols. Very happy with my new smile!"
    },
    {
      name: "Priya Sharma",
      initials: "PS", 
      date: "January 10, 2024",
      review: "Had a great experience at Dr. Purnata's Dental & Cosmetic Care. Dr. Purnata is very gentle and patient. Got my digital smile designing done - absolutely amazing results! The clinic is spacious, modern and conveniently located in Koregaon Park. Definitely recommend!"
    }
  ];

  return (
    <section className="p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-10">
          <div className="relative h-12 w-32 mx-auto mb-4">
            <Image 
              src="/images/google.png" 
              alt="Google Logo" 
              fill
              className="object-contain" 
              priority
            />
          </div>
          <h2 className="text-xl md:text-3xl font-bold">What Our Patients Say</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white border rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                  {review.initials}
                </div>
                <div>
                  <h3 className="font-bold md:text-lg">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.date}</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="text-gray-700 text-sm md:text-base">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}