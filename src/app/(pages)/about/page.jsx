import React from "react";
import style from "@/app/page.module.css";
import WhocanHelp from "@/components/WhocanHelp";
import CoreService from "@/components/CoreService";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";
import Founder from "@/components/Founder";
import HeroSection from "@/components/HeroSection";
import TeamSection from "@/components/TeamSection";
import ReadySection from "@/components/ReadySection";

const page = () => {
  return (
    <section>
      <HeroSection
        text="Venture building as a service"
        image={
          "https://framerusercontent.com/images/6eE1fiME80wGDB5tLWKJ2mhYZTY.svg"
        }
      />
      <WhocanHelp />
      <section className={`${style['coresection-padding']}  pt-0`}>
         <CoreService />
      </section>
     
      <WhyWorkWithUs />
      <TeamSection />
      <Founder />
      <ReadySection />
    </section>
  );
};

export default page;
