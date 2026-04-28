import Link from 'next/link';
import styles from './moving-container.module.css';

export default function Hero() {
    return (
        <section className="bg-gradient-to-br from-rose-50 to-amber-50 py-20 px-6">
            <div className="max-w-screen-xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-rose-500 mb-3">
                Saskatoon, Saskatchewan
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-5 leading-tight">
                TCM Acupuncture for Bell&apos;s Palsy in Saskatoon
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mb-4">
                With over 25 years of Acupuncture experience, Dr. Pang has helped many patients with Bell's Palsy improve their condition. If you or someone you know is experiencing facial paralysis, a consultation is available.
            </p>
            <p className="text-base text-gray-500 max-w-xl mx-auto mb-10">
                New patients are welcome!
            </p>
            <div className="flex justify-center">
                <Link
                href="https://circlechiropractic.janeapp.com/locations/circle-chiropractic-7th/book#/staff_member/15"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold px-10 py-4 rounded-lg text-lg transition-colors duration-150 ${styles.movingContainer}`}
                >
                Book Your Appointment
                </Link>
            </div>
            </div>
      </section>    
    );
}