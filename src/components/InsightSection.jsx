import React from "react";
import style from "@/app/page.module.css";
import InsightCardSection from "./InsightCardSection";

const InsightSection = () => {
  return (
    <section className={style["insight-section"]}>
      <div className={style["insight-hero-section"]}>
        <div className={style["insight-hero-left"]}>
          <h2>Expert Insights</h2>
          <br />
          <p>
            Expert perspectives on venture building, startup development, and
            global <br /> entrepreneurship from our team of builders and
            innovators
          </p>
        </div>
        <div className={style["insight-hero-right"]}>
          <button className={style["view-all-btn"]}>
            View All
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
      </div>
     <InsightCardSection/>
    </section>
  );
};

export default InsightSection;
