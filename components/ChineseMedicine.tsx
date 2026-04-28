import Image from 'next/image';

export default function ChineseMedicine() {
  return (
    <section className="py-14 px-6 bg-white">
      <div className="max-w-screen-xl mx-auto flex justify-center">
        <Image
          src="/shutterstock_chinesemed.jpg"
          alt="Chinese herbal medicine"
          width={600}
          height={400}
          className="w-72 h-auto md:w-96 lg:w-[36rem] rounded-lg object-cover shadow-sm"
        />
      </div>
    </section>
  );
}
