'use client'
import React from "react";
import style from "@/app/page.module.css";
import useFadeInOnScroll from "@/hooks/useFadeInOnScroll";
import HeroSection from "@/components/HeroSection";
import ReadySection from "@/components/ReadySection";
import InsightCardSection from "@/components/InsightCardSection";

const page = () => {
  useFadeInOnScroll();

  return (
    <>
      <HeroSection
        text="Insights & Updates"
        image="https://framerusercontent.com/images/aI7AWcJoBEveoXJ1Qu9izZqPjoM.png"
      />
      <section className={`${style["news-section"]} fade-up-animate`}>
        <div className={style["news-hero-title"]}>
          <h1>
            Expert perspectives on venture building, startup development, and
            global entrepreneurship from our team of builders and innovators
          </h1>
        </div>
      </section>
      <section className={style["news-insight-padding"]}>
       <InsightCardSection/>
      </section>
      <br />
      <ReadySection/>
    </>
  );
};

export default page;
