import Link from "next/link";
import Image from "next/image";

//components
import ChineseMedicine from "@/components/ChineseMedicine";
import SubAboutDrPang from "@/components/AboutDrPang";
import HomeTestimonial from "@/components/testimonial";
import WhyAcupuncture from "@/components/WhyAcupuncture";
import BeforeAfter from "@/components/BeforeAfter";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>

      {/* Hero */}
      <Hero/>

      <BeforeAfter/>

      {/* Why acupuncture explainer */}
      <WhyAcupuncture/>

      {/* Testimonial */}
      <HomeTestimonial/>

      {/* About Dr. Pang */}
      <SubAboutDrPang/>
      
      {/*Chinese medicine image */}
      <ChineseMedicine/> 


    </div>
  );
}
