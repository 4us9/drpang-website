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
      <div>
        <Link href="/" className="relative h-screen w-full">
          <Image
            src="/landingpage-logo.png"
            alt="Description"
            width={500}
            height={500}
          />
        </Link>

        <div className="font-extrabold">
          <p className= "flex justify-end margin mr-4"> 
            Location: 2402 7th St E
          </p>
          <p className= "flex justify-end mr-4"> 
            Saskatoon Saskatchewan Canada
          </p>

          <p className= "flex justify-end mr-4"> 
            Clinic Phone Number: (306) 955-5005
          </p>
          
        </div>
      </div>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
