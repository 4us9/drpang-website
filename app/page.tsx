import Link from "next/link";
import Image from "next/image";
import styles from './moving-container.module.css';

const conditions = [
  { title: "Pain & Injury Recovery", desc: "Muscle, joint, and soft tissue pain from accidents, sports, or daily strain." },
  { title: "Post-Surgery Rehabilitation", desc: "Support the body's healing process and restore function after surgery." },
  { title: "Facial Paralysis / Bell's Palsy", desc: "Acupuncture to stimulate facial nerve repair and restore muscle control." },
  { title: "Trigeminal Neuralgia", desc: "Natural pain relief for one of the most intense facial nerve conditions." },
  { title: "Stress, Fatigue & Sleep", desc: "Regulate the nervous system to reduce chronic stress and improve rest." },
  { title: "Internal & Digestive Health", desc: "Herbal medicine and acupuncture for digestive imbalance and systemic conditions." },
];

export default function Home() {
  return (
    <div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-rose-50 to-amber-50 py-16 px-6">
        <div className="max-w-screen-xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Acupuncture &amp; Chinese Medicine in Saskatoon
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Dr. Pang brings over 25 years of Beijing-trained expertise to help you
            recover naturally, restore balance, and stay well.
          </p>
          <div className="flex justify-center">
            <Link
              href="https://circlechiropractic.janeapp.com/locations/circle-chiropractic-7th/book#/staff_member/15"
              className={`inline-block bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-150 ${styles.movingContainer}`}
            >
              Book Your Appointment — By Appointment Only
            </Link>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-2">
            Conditions Dr. Pang Treats
          </h2>
          <p className="text-center text-gray-500 mb-10">
            A personalized assessment is provided at every visit.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((c) => (
              <div key={c.title} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-150">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About blurb */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-shrink-0">
            <Image
              src="/drpang-pfp.jpeg"
              alt="Dr. Kang Pang"
              width={220}
              height={220}
              className="rounded-lg object-cover shadow-md"
            />
          </div>
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">About Dr. Pang</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Dr. Pang completed five years of study at the Chinese Medical &amp; Acupuncture
              University in Beijing, followed by four years of clinical practice in China before
              bringing his expertise to Canada. He has been practicing in Saskatoon since 2000.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              He takes the time to carefully examine each patient and tailor treatments —
              combining acupuncture with Chinese herbal medicine — so that every person can
              live a happy and healthy life.
            </p>
            <Link href="/about" className="inline-block text-sm font-semibold text-gray-900 border-b-2 border-gray-900 pb-0.5 hover:text-gray-600 hover:border-gray-600 transition-colors duration-150">
              Read full bio
            </Link>
          </div>
        </div>
      </section>

      {/* Images */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center gap-6">
          <Image
            src="/accupuncture.png"
            alt="Acupuncture treatment"
            width={600}
            height={400}
            className="w-72 h-auto md:w-96 lg:w-[28rem] rounded-lg object-cover shadow-sm"
          />
          <Image
            src="/chinese-medicine.jpg"
            alt="Chinese herbal medicine"
            width={600}
            height={400}
            className="w-72 h-auto md:w-96 lg:w-[28rem] rounded-lg object-cover shadow-sm"
          />
        </div>
      </section>

    </div>
  );
}
