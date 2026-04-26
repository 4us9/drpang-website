import Link from "next/link";
import Image from "next/image"

import styles from './moving-container.module.css'

export default function Home() {
  return (
    <div>
      

      <div className="flex justify-center mt-6">
        <Link href="https://circlechiropractic.janeapp.com/locations/circle-chiropractic-7th/book#/staff_member/15" className={`border-2 border-yellow-500 bg-orange-200 p-4 ${styles.movingContainer}`}>
          Book Your Visit Now — BY APPOINTMENT ONLY
        </Link>
      </div>

      <p className="ml-4 mr-4 mt-3 text-xl text-gray-600">
        Welcome to Dr. Wen Kang Pang Accupuncture. The blends of accpuncture and chinese traditional medicine to help you recover fro minjury, surgery, illness in a natural way to restore your health and to prevent diseases.
      </p>

      <div className="flex mt-9 justify-center">
        <Image
          src="/accupuncture.png"
          alt="Accupuncture image"
          width={600}
          height={200}
          className="w-72 h-auto md:w-96 lg:w-[28rem] xl:w-[32rem] object-contain m-4"
        />

        <Image
          src="/chinese-medicine.jpg"
          alt="Accupuncture image"
          width={700}
          height={400}
          className="w-72 h-auto md:w-96 lg:w-[28rem] xl:w-[32rem] object-contain"
      />
      </div>

    </div>
  );
}
