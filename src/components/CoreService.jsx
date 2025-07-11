"use client";
import React, { useEffect } from "react";
import style from "@/app/page.module.css";
import useFadeInOnScroll from "@/hooks/useFadeInOnScroll";

const gridCard = [
  {
    title: "Technology Development",
    para: "Build lean MVPs, sharp prototypes, and purposeful AI",
  },
  {
    title: "Research & Validation",
    para: "Test your idea against the market, map reality, and challenge assumptions.",
  },
  {
    title: "Talent & Offshore Teams",
    para: "Flexible, fast, and cost-effective global teams.",
  },
  {
    title: "Storytelling & Content",
    para: "Shape narratives that raise funding, grow customers, and build your brand.",
  },
];

const CoreService = () => {
  useFadeInOnScroll();
  return (
    <section className={`${style["core-service-section"]} `}>
      <div className={style["core-service-main-section"]}>
        <div className={style["core-service-left-div"]}>
          <h2 className={style["core-service-title"]}>
            Our Core <br /> <span>Service</span>{" "}
          </h2>
          <br />
          <p className={style["core-service-para"]}>
            We deliver exactly what early-stage companies need most: technology
            that works, stories that sell, teams that execute, and strategies
            that convert.
          </p>
          <br />
          <button className={`${style["schedule-call-btn"]} rounded-pill`}>
            Let's Talk
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
        <div className={style["core-service-right-div"]}>
          {gridCard?.map((item, index) => (
            <div
              key={index}
              className={`${style["core-service-grid-card"]} fade-up-animate`}
            >
              <div className="d-flex gap-md-2">
                <svg
                  aria-label="Auto Graph"
                  display="block"
                  role="presentation"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  width="30px"
                >
                  <path
                    d="M 13.06 7.94 L 11 7 L 13.06 6.06 L 14 4 L 14.94 6.06 L 17 7 L 14.94 7.94 L 14 10 Z M 3 12 L 3.94 9.94 L 6 9 L 3.94 8.06 L 3 6 L 2.06 8.06 L 0 9 L 2.06 9.94 Z M 7.5 7 L 8.59 4.59 L 11 3.5 L 8.59 2.41 L 7.5 0 L 6.41 2.41 L 4 3.5 L 6.41 4.59 Z M 3.5 18.5 L 9.5 12.49 L 13.5 16.49 L 22 6.93 L 20.59 5.52 L 13.5 13.49 L 9.5 9.49 L 2 17 Z"
                    fill="var(--esondr, rgb(0,0,0))"
                    id="CFiXYQ23K"
                    opacity="1"
                    transform="translate(1 2.75)"
                  />
                </svg>
                {/* <img src="" alt="" /> */}
                <h3 className={style["core-service-grid-card-title"]}>
                  {item.title}t
                </h3>{" "}
                <br />
              </div>
              <p className={style["core-service-grid-card-para"]}>
                {item.para}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreService;
