import Image from 'next/image'

export default function About() {
    return (
        <div className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
            <div className="max-w-6xl mx-auto border border-gray-300 rounded-lg shadow-lg p-12 bg-white">
                <div className="flex gap-12 items-center">
                    <div className="flex-1">
                        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Dr. Kang Pang</h1>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            Dr. Kang Pang studied for 5 years at the Chinese Medical & Acupuncture University in Beijing. After 4 years of experience in China he moved to Canada to begin his practice here. With degrees in Chinese Medicine and Acupuncture, Dr. Kang Pang has the knowledge and takes the time to carefully examine clients and prescribe appropriate herbs for many conditions. He has been practicing in Canada since year 2000.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Dr. Kang Pang entered the field of Chinese Medicine to enable him to take care of his family and help relieve patients of their health concerns so that they can live happy and healthy lives.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <Image
                            src="/drpang-pfp.jpeg"
                            alt="Dr. Kang Pang"
                            width={300}
                            height={300}
                            className="rounded-lg object-cover shadow-md"
                        />
                    </div>
                </div>
            </div>
        </div>
    )    

}