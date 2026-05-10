import Image from 'next/image';

const testimonials = [
  { src: '/test1.png', alt: 'Handwritten patient testimonial 1' },
  { src: '/test2.png', alt: 'Handwritten patient testimonial 2' },
];

export default function HomeTestimonial() {
  return (
    <section className="py-14 px-6 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-2">
          Patient Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-gray-100">
              <Image
                src={t.src}
                alt={t.alt}
                width={900}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
        
          ))}
        </div>
      </div>
    </section>
  );
}
