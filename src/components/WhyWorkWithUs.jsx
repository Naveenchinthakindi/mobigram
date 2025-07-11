"use client";
import React from "react";
import style from "@/app/page.module.css";
import CountAnimate from "./CountAnimate";
// import CountAnimate from "./CountAnimate";

const images = [
  {
    src: "https://framerusercontent.com/images/tO0JiaZ3V55bHkawuFUEQFk9SU.png",
  },
  {
    src: "https://framerusercontent.com/images/nWNg6ysz7N2hBuVPcFn3WUEOZEI.png",
  },
  { src: "https://framerusercontent.com/images/dngG1j7Bd5YCvdrBkozBWwckk.png" },
  {
    src: "https://framerusercontent.com/images/wtHz0q4Jw47Ubih8aMrJCX2gm4U.png",
  },
  { src: "https://framerusercontent.com/images/kVEHLMiMTNDBiYQBFHMwscvm0.png" },
  {
    src: "https://framerusercontent.com/images/U5N618GP7I8sFGYESkdoTBIyQoU.png",
  },
  {
    src: "https://framerusercontent.com/images/VPgWLAbzpipCHcwf9xEwqH009ME.png",
  },
  {
    src: "https://framerusercontent.com/images/5Wib8ejAmgTuYmCffT8QYkrtrc.png",
  },
  {
    src: "https://framerusercontent.com/images/spFdNsm9odCrzVj4bvaEqzguYW0.png",
  },
  {
    src: "https://framerusercontent.com/images/Gzs0N4XJnyGD3ZAGOPSEY1xhHI.png",
  },
  {
    src: "https://framerusercontent.com/images/kDdOUdy364SzkEvNFnXaO9wuCBs.png",
  },
  { src: "https://framerusercontent.com/images/MH6batHtIZrrvNfzRKFvSkHo.png" },
];

// Duplicate images for seamless scroll
const loopImages = [...images, ...images];
const WhyWorkWithUs = () => {
  return (
    <>
      <section className={style["workwithus-section"]}>
        <h2 className={style["why-work-title"]}>Why Work With Us?</h2>
        <br />
        <div className={style["count-section"]}>
          <div className={style["count-section-card"]}>
            <h3 className={style["count-heading"]}>
              <CountAnimate end={100} duration={3} />
            </h3>
            <br />
            <p className={style["count-para"]}>Investment Cases Built</p>
          </div>
          <div className={style["count-section-card"]}>
            <h3 className={style["count-heading"]}>
              <CountAnimate end={15} duration={1} />
            </h3>
            <br />
            <p className={style["count-para"]}>Companies Co-Owned</p>
          </div>
          <div className={style["count-section-card"]}>
            <h3 className={style["count-heading"]}>
              <CountAnimate end={70} duration={2} />
            </h3>
            <br />
            <p className={style["count-para"]}>Global Team Members</p>
          </div>
        </div>
        <div className={style["scroll-section"]}>
          <ul className={style["image-menu-list"]}>
            {loopImages.map((item, index) => (
              <li key={index}>
                <img className={style["scroll-img"]} src={item.src} alt="" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default WhyWorkWithUs;
