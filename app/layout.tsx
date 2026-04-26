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
  title: "Wen Kang Pang Acupuncture and Chinese Medicine",
  description: "Dr. Wen Kang Pang works in Saskatoon, Saskatchewan Canada. He studied Chinese medicine and accupuncture in Beijing. He currently works at Circle Chiropratic Clinic.",

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
            <div className="flex flex-row items-center justify-between gap-8">
              <Link href="/" className="inline-block flex-shrink-0">
                <Image
                  src="/landingpage-logo.png"
                  alt="Wen Kang Pang Logo"
                  width={600}
                  height={200}
                  className="w-72 h-auto md:w-96 lg:w-[28rem] xl:w-[32rem] object-contain"
                />
              </Link>

              <div className="flex flex-col items-end gap-1.5 text-right">
                <p className="text-base lg:text-lg text-gray-700">2402 7th St E</p>
                <p className="text-base lg:text-lg text-gray-700">Saskatoon, Saskatchewan, Canada</p>
                <p className="text-base lg:text-lg text-gray-500">Circle Chiropractic Clinic</p>
                <p className="text-base lg:text-lg text-gray-500">Book By Phone: (306) 955-5005</p>
              </div>
            </div>

            <nav className="flex gap-8 items-center justify-center mt-7 border-t border-gray-100 pt-6">
              <Link href="/" className="text-sm lg:text-base font-medium text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-900 pb-0.5 transition-colors duration-150">Home</Link>
              <Link href="/articles" className="text-sm lg:text-base font-medium text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-900 pb-0.5 transition-colors duration-150">Articles</Link>
              <Link href="/about" className="text-sm lg:text-base font-medium text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-900 pb-0.5 transition-colors duration-150">About Me</Link>
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
