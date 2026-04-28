import Image from 'next/image';

export default function BeforeAfter() {
    return (

          <section className="py-14 px-6 bg-white">
          <div className="max-w-screen-xl mx-auto flex justify-center">
            <Image
              src="/paralysis1.png"
              alt="Facial paralysis acupuncture before and after treatment"
              width={900}
              height={500}
              className="w-full max-w-3xl rounded-xl object-contain shadow-md"
            />
          </div>
        </section>    
    )
}