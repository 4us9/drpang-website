import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from 'next/image'
import Link from 'next/link'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: " Dr. Pang Face Paralysis Acupuncture",
  description: "Dr. Pang is one of the few practitioners in Saskatchewan specializing in facial paralysis and Bell's Palsy recovery through traditional Chinese medicine and acupuncture. Located at Circle Chiropractic Clinic, Saskatoon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <Link href="/" className="inline-block">
                <Image
                  src="/landinglogo.png"
                  alt="Wen Kang Pang Logo"
                  width={600}
                  height={200}
                  className="w-56 h-auto sm:w-72 md:w-96 lg:w-[28rem] xl:w-[32rem] object-contain"
                />
              </Link>

              <div className="flex flex-col md:items-end gap-1 text-left md:text-right">
                <p className="text-sm md:text-base lg:text-lg text-gray-700">2402 7th St E</p>
                <p className="text-sm md:text-base lg:text-lg text-gray-700">Saskatoon, Saskatchewan, Canada</p>
                <p className="text-sm md:text-base lg:text-lg text-gray-500">Circle Chiropractic Clinic</p>
                <p className="text-sm md:text-base lg:text-lg text-gray-500">Book By Phone: (306) 955-5005</p>
              </div>
            </div>

            <nav className="flex gap-8 items-center justify-center mt-7 border-t border-gray-100 pt-6">
              <Link href="/" className="text-sm lg:text-base font-medium text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-900 pb-0.5 transition-colors duration-150">Home</Link>
              <Link href="/about" className="text-sm lg:text-base font-medium text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-900 pb-0.5 transition-colors duration-150">About</Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">
          {children}
        </main>

        <footer className="mt-auto border-t border-gray-200 bg-white">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-6 text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Wen Kang Pang. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
