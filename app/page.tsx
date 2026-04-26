import Link from "next/link";
import Image from "next/image"

export default function Home() {
  return (
    <div>
      

      <a href="mailto:weikanping@yahoo.com" className="bg-gray-100 rounded-lg text-gray-500 font-bold 
        py-3 px-4 whitespace-nowrap hover:bg-pink-500 
        hover:text-pink-100 transition flex justify-end inline-flex mr-4">Send Email</a> 

      <Link href="https://circlechiropractic.janeapp.com/locations/circle-chiropractic-7th/book#/staff_member/15" className = "border-2 border-black p-4 flex justify-end mr-4">Book</Link> 
       
      <nav className="max-w-5xl mx-auto flex gap-4 flex items-center justify-center">
        <Link href="/" className="underline">Home</Link>
        <Link href="/services" className="underline">Services Offered</Link>
        <Link href="/testimonies" className="underline">Testimonies</Link>
        <Link href="/about" className="underline">About Me</Link>
      </nav>

      <p className="ml-4 mr-4 mt-3 text-xl text-gray-600">
        Welcome to Dr. Wen Kang Pang Accupuncture. The blends of accpuncture and chinese traditional medicine to help you recover fro minjury, surgery, illness in a natural way to restore your health and to prevent diseases.
      </p>
    </div>
  );
}
