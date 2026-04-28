import Image from 'next/image';
import Link from 'next/link';


export default function SubAboutDrPang() {
    return (

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
                    He entered this field to help patients overcome conditions that conventional
                    medicine struggles to address — restoring health so people can live full,
                    happy lives.
                    </p>
                    <Link
                    href="/about"
                    className="inline-block text-sm font-semibold text-gray-900 border-b-2 border-gray-900 pb-0.5 hover:text-gray-600 hover:border-gray-600 transition-colors duration-150"
                    >
                    Read full bio
                    </Link>
                </div>
                </div>
            </section>        
    )
}