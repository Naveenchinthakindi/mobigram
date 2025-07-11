'use client'
import React from "react";
import style from "./Portfolio.module.css";
import useFadeInOnScroll from "@/hooks/useFadeInOnScroll";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";
import HeroSection from "@/components/HeroSection";
import ReadySection from "@/components/ReadySection";

const imageData = [
  {
    image:
      "https://framerusercontent.com/images/ZKqeJCHBrgMy55xhpvZ27Tdp404.png",
  },
  {
    image:
      "https://framerusercontent.com/images/AJBGdu6Y8Ap0ah2Zmdzg6mRxMc.png",
  },
  {
    image:
      "https://framerusercontent.com/images/XuywEC9kGWoYuQwyrBINWLMO5KM.png",
  },
  {
    image:
      "https://framerusercontent.com/images/XuywEC9kGWoYuQwyrBINWLMO5KM.png",
  },
  {
    image:
      "https://framerusercontent.com/images/uscxr87POBSIPWXKenIMqsAgQc.png",
  },
  {
    image:
      "https://framerusercontent.com/images/Q0wbLLMjQJDatxZC95AOgmJ1t7w.png",
  },
  {
    image:
      "https://framerusercontent.com/images/hiVVfXK4MSdZuYgi3duB1Uqc6yg.png",
  },
  {
    image:
      "https://framerusercontent.com/images/ZKqeJCHBrgMy55xhpvZ27Tdp404.png",
  },
  {
    image:
      "https://framerusercontent.com/images/AJBGdu6Y8Ap0ah2Zmdzg6mRxMc.png",
  },
  {
    image:
      "https://framerusercontent.com/images/XuywEC9kGWoYuQwyrBINWLMO5KM.png",
  },
  {
    image:
      "https://framerusercontent.com/images/XuywEC9kGWoYuQwyrBINWLMO5KM.png",
  },
  {
    image:
      "https://framerusercontent.com/images/uscxr87POBSIPWXKenIMqsAgQc.png",
  },
];

const page = () => {
  useFadeInOnScroll();
  return (
    <>
      <HeroSection
        text="We build companies."
        image="https://framerusercontent.com/images/Eepq2ZiVG4zXflgM8gmSN2FyjGs.png?lossless=1"
      />
      <br />
      <br />
     <WhyWorkWithUs/>
      <section className={style["portfolio-section"]}>
        <div className={style["client-section"]}>
          {imageData?.map((item, index) => (
            <div className={`${style["client-card"]} fade-up-animate`} key={index}>
              <div className={style["client-image-wrapper"]}>
                <img src={item.image} alt="" className={style["client-img"]} />
                <div className={style["client-card-arrow-section"]}>
                  <i className="bi bi-arrow-up-right "></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <ReadySection />
    </>
  );
};

export default page;
