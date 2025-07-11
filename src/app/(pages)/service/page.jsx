import React from "react";
import styles from "./service.module.css";
import style from "@/app/page.module.css";
import MarqueeSection from "@/components/home/MarqueSection";
import CoreService from "@/components/CoreService";
import HeroSection from "@/components/HeroSection";
import TeamSection from "@/components/TeamSection";

const page = () => {
  return (
    <>
      <HeroSection
        text="Our Solutions"
        image="https://framerusercontent.com/images/XgTXquoa6vwlTN7yFwqnc9O5k.svg"
      />
      <section className={styles["service-section"]}>
        <div className={styles['service-why-choose-section']}>
          <h1>Why choose us</h1>
          <div className={styles['why-choose-right']}>
            <h2>
              we help entrepreneurs build faster, smarter, and more efficiently
              than ever before.
            </h2>
            <br />
            <div className={styles['why-choose-right-description-section']}>
              <p>
                Startups often face challenges in building momentum, scaling
                efficiently, and achieving investor-ready traction.
                <br />
                We solve these challenges by operating as your early-stage
                co-founder, providing everything you need to build and scale
                successfully.
              </p>

              <p>
                From initial concept to capital raise, we provide the
                technology, talent, and strategic guidance necessary for
                success. Our team of over 70 professionals across three
                continents delivers fast, cost-effective solutions that
                traditional development approaches often can't match.
              </p>
            </div>
            <br />
             <button className={`${styles["schedule-call-btn"]} rounded-pill`}>
              Schedule Strategy Call
              <span className={styles["btn-icon"]}>
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
        </div>
      </section>
      <MarqueeSection/>
       <section className={`${style['coresection-padding']}  pt-0`}>
         <CoreService />
      </section>

      <TeamSection/>
    </>
  );
};

export default page;
