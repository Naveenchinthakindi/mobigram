"use client";
import style from "@/app/page.module.css";
import useFadeInOnScroll from "@/hooks/useFadeInOnScroll";
import HowCanHelp from "@/components/home/HowCanHelp";
import MarqueeSection from "@/components/home/MarqueSection";
import WhocanHelp from "@/components/WhocanHelp";
import CoreService from "@/components/CoreService";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";
import TeamSection from "@/components/TeamSection";
import Founder from "@/components/Founder";
import InsightSection from "@/components/InsightSection";
import ReadySection from "@/components/ReadySection";

const HomeHeroSection = () => (
  <div className={`${style["hero-main-section"]} fade-up-animate`}>
    <section className={style["herosection"]}>
      <div className={style["hero-left"]}>
        <h1 className={style["home-hero-title"]}>
          From idea to investor ready
        </h1>
        <br />
        <h6 className={style["hero-main-sub-title"]}>
          FASTER. SMARTER. TOGETHER
        </h6>
      </div>
      <div className={style["hero-right"]}>
        <p className={style["hero-section-para"]}>
          We help founders turn their thoughts, ideas, products, and services
          into scalable, fundable ventures.
        </p>
        <br />
        <p className={style["hero-section-para"]}>
          If you're starting from scratch or stuck mid-journey, Amplitude
          Ventures works with you like a co-founder and co-building partner to
          create profitable and scalable startup.
        </p>
        <br />
        <br />
        <button className={`${style["schedule-call-btn"]} rounded-pill`}>
          Schedule Strategy Call
          <span className={style["btn-icon"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              width="18"
              height="18"
              fill="currentColor"
            >
              <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
            </svg>
          </span>
        </button>
      </div>
    </section>
  </div>
);

const HomeImageSection = () => (
  <section className={`${style["hero-image-section"]}`}>
    {/* <img
      className={style["hero-image"]}
      src="https://framerusercontent.com/images/NE2hVW1a2rWXDSRbEE0NCeRiLQ.jpg?scale-down-to=2048"
      alt=""
    /> */}
    <div className={style["hero-image-wrapper"]}>
      <img
        className={style["hero-image"]}
        src="https://framerusercontent.com/images/NE2hVW1a2rWXDSRbEE0NCeRiLQ.jpg?scale-down-to=2048"
        alt=""
      />
    </div>
  </section>
);

export default function Home() {
  //calling fadeup custom hook
  useFadeInOnScroll();

  return (
    <>
      <HomeHeroSection />
      <HomeImageSection />
      <WhocanHelp />
      <HowCanHelp />
      <section className={style['coresection-padding']}>
      <CoreService />
      </section>
      <WhyWorkWithUs />
      <MarqueeSection />
      <TeamSection />
      <Founder />
      <InsightSection/>
      <ReadySection/>
    </>
  );
}
