import React from "react";
import style from "@/app/page.module.css";

const ReadySection = () => {
  return (
    <section className={`${style["ready-section"]} fade-up-animate`}>
      <div className={style["ready-main-section"]}>
        <h2>Ready to Start?</h2>
        <br />
        <p>Let’s talk about your idea, your traction, or your pivot.</p>
        <br />
        <br />
        <button className={`${style["schedule-call-btn"]} rounded-pill`}>
          Contact Us
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
  );
};

export default ReadySection;
