import Image from 'next/image'

export default function About() {
    return (
        <div className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
            <div className="max-w-6xl mx-auto border border-gray-300 rounded-lg shadow-lg p-8 md:p-12 bg-white">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 md:items-center">
                    <div className="flex justify-center md:justify-start md:flex-shrink-0">
                        <Image
                            src="/drpang-pfp.jpeg"
                            alt="Dr. Kang Pang"
                            width={300}
                            height={300}
                            className="w-40 h-40 md:w-64 md:h-64 rounded-lg object-cover shadow-md"
                        />
                    </div>
                    <div className="flex-1">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">About Dr. Pang</h1>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                            Dr. Pang studied for five years at the Chinese Medical &amp; Acupuncture University in Beijing. After four years of clinical practice in China, he moved to Canada to begin his practice here. With degrees in both Chinese Medicine and Acupuncture, Dr. Pang takes the time to carefully examine each patient and prescribe appropriate treatment for their individual condition. He has been practicing in Saskatoon since 2000.
                        </p>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                            Dr. Pang entered the field of Chinese Medicine to help relieve patients of their health concerns so that they and their families can live happy and healthy lives.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )    

}