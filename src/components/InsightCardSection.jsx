import React from "react";
import style from "@/app/page.module.css";
const cardPara = [
  {
    paragraph: "Music Tech Financing – Part 3: The Investor's Narrative",
    img:"https://framerusercontent.com/images/fnyuZP734VVCZFW2upyAqLG4mY.jpg"
  },
  {
    paragraph: "The future of music creation",
    img:"https://framerusercontent.com/images/vdhrdrLyw4iHtB1GDMIrTJPMbA.png?scale-down-to=1024"
  },
  {
    paragraph: "The Future of Music Creation – A Prediction",
    img:"https://framerusercontent.com/images/mOXbFbqRYECMlTpJ9EgSOsR0FUk.jpg?scale-down-to=1024"
  },
  {
    paragraph:
      "Music Tech Founders: You are wasting time chasing investors! Here is what you need to change",
      img:"https://framerusercontent.com/images/vMiiJskQgWpgWWMXrWUJcG0xgQ.png?scale-down-to=1024"
  },
  {
    paragraph: "Navigating the Music Tech Investment Landscape - Part 1",
    img:"https://framerusercontent.com/images/Rgc2nLeF11SHZ9eCQt4bFP69zo.jpg"
  },
];

const InsightCardSection = () => {
  return (
    <div className={`${style["insight-card-section"]}`}>
        {cardPara?.map((item, index) => (
          <div key={index} className={`${style["insight-card"]} fade-up-animate`}>
            {/* bg image */}
            <div className={style["insight-card-bg"]} style={{backgroundImage:`url(${item.img})`}}></div>

            {/* content */}
            <div className={style["insight-card-content"]}>
              <div className={style["insight-card-header-section"]}>
                <h2 className={style["insight-card-title"]}>Article</h2>
                <div className="arrow-section d-flex justify-content-center align-items-center">
                  <i className="bi bi-arrow-up-right text-white"></i>
                </div>
              </div>
              <div className={style["insight-card-subcard"]}>
                <p className={style["insight-card-subcard-para"]}>
                  {item.paragraph}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
  );
};

export default InsightCardSection;
