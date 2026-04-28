import Image from 'next/image';

export default function WhyAcupuncture() {
    return (
        <section className="py-14 px-6 bg-rose-50 border-y border-rose-100">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Why Acupuncture for Bell&apos;s Palsy?
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Facial paralysis is understood as disrupted energy flow along the facial
              meridians, and acupuncture has been used to restore it for centuries.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              By stimulating targeted acupoints along the face and body, acupuncture
              promotes local blood circulation, activates damaged nerve pathways, and
              helps prevent muscle atrophy.
            </p>

          </div>
          <div className="flex-shrink-0">
            <Image
              src="/accupuncture.png"
              alt="Acupuncture treatment"
              width={460}
              height={360}
              className="w-72 h-auto lg:w-[24rem] rounded-lg object-cover shadow-md"
            />
          </div>
        </div>
      </section>

    );
}