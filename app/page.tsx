import Link from "next/link";
import Image from "next/image";
import styles from './moving-container.module.css';

const conditions = [
  {
    title: "Facial Paralysis / Bell's Palsy",
    desc: "Acupuncture to stimulate facial nerve repair, restore muscle control, and prevent long-term complications.",
    featured: true,
  },
  {
    title: "Trigeminal Neuralgia",
    desc: "Natural pain relief for facial nerve conditions.",
    featured: false,
  },
  {
    title: "Pain & Injury Recovery",
    desc: "Muscle, joint, and soft tissue pain from accidents, sports, or daily strain.",
    featured: false,
  },
  {
    title: "Post-Surgery Rehabilitation",
    desc: "Support the body's healing process and restore function after surgery.",
    featured: false,
  },
  {
    title: "Stress, Fatigue & Sleep",
    desc: "Regulate the nervous system to reduce chronic stress and improve rest.",
    featured: false,
  },
  {
    title: "Internal & Digestive Health",
    desc: "Herbal medicine and acupuncture for digestive imbalance and systemic conditions.",
    featured: false,
  },
];

export default function Home() {
  return (
    <div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-rose-50 to-amber-50 py-16 px-6">
        <div className="max-w-screen-xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-rose-500 mb-3">
            Saskatoon, Saskatchewan
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Acupuncture for Facial Paralysis &amp; Bell&apos;s Palsy
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mb-3">
            Specializing in facial nerve recovery through acupuncture and traditional Chinese medicine.
          </p>
          <p className="text-base text-gray-500 max-w-xl mx-auto mb-8">
            Dr. Pang also treats a broad range of conditions — bringing over 25 years
            of Beijing-trained expertise to patients across Saskatoon.
          </p>
          <div className="flex justify-center">
            <Link
              href="https://circlechiropractic.janeapp.com/locations/circle-chiropractic-7th/book#/staff_member/15"
              className={`inline-block bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-150 ${styles.movingContainer}`}
            >
              Book Your Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Facial Paralysis explainer */}
      <section className="py-14 px-6 bg-rose-50 border-y border-rose-100">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Why Acupuncture for Facial Paralysis?
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              The condition is understood as disrupted energy flow along the facial meridians, and
              acupuncture has been used to address it for centuries.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              By stimulating targeted acupoints along the face and body, acupuncture promotes
              local blood circulation, activates the damaged nerve pathways, and helps prevent
              muscle atrophy.
            </p>
            <Link
              href="/articles"
              className="inline-block text-sm font-semibold text-rose-600 border-b-2 border-rose-400 pb-0.5 hover:text-rose-800 hover:border-rose-800 transition-colors duration-150"
            >
              Read our articles on facial paralysis and acupuncture
            </Link>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/paralysis1.png"
              alt="Facial paralysis acupuncture before and after"
              width={500}
              height={380}
              className="w-72 h-auto lg:w-[26rem] rounded-lg object-cover shadow-md"
            />
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
              <div
                key={c.title}
                className={`rounded-lg p-6 transition-shadow duration-150 hover:shadow-md ${
                  c.featured
                    ? "border-2 border-rose-400 bg-rose-50 col-span-1 sm:col-span-2 lg:col-span-1"
                    : "border border-gray-200"
                }`}
              >
                {c.featured && (
                  <span className="inline-block text-xs font-semibold uppercase tracking-widest text-rose-500 mb-2">
                    Specialty
                  </span>
                )}
                <h3 className={`font-semibold mb-2 ${c.featured ? "text-xl text-rose-900" : "text-lg text-gray-900"}`}>
                  {c.title}
                </h3>
                <p className={`text-sm leading-relaxed ${c.featured ? "text-rose-800" : "text-gray-600"}`}>
                  {c.desc}
                </p>
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
              He takes the time to carefully examine each patient and tailor treatments
              combining acupuncture with Chinese herbal medicine so that every person can
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
