import Image from 'next/image';

const testimonials = [
  { src: '/testimonial1.png', alt: 'Handwritten patient testimonial 1' },
  { src: '/testimonial2.png', alt: 'Handwritten patient testimonial 2' },
];

export default function Testimonials() {
  return (
    <div className="py-16 px-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-10">Patient Stories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-100 border border-gray-200 rounded-xl overflow-hidden shadow-sm">
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
    </div>
  );
}
