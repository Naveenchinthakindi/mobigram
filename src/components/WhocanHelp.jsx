'use client';
import React, { useEffect } from "react";
import style from "@/app/page.module.css";

const Card = ({item}) => {
  return (
    <div className={style["who-can-help-card"]}>
      <h4 className={style["who-can-help-card-title"]}>{item.heading}</h4>
      <p className={style["who-can-help-card-para"]}>{item.para}</p>
    </div>
  );
};

const gridData = [
  {
    heading: "Idea-stage founders",
    para: "Looking for idea validation and building an MVP",
  },
  {
    heading: "Pre-seed / Seed startups",
    para: "Trying to gain traction and raise funding",
  },
  {
    heading: "Stalled ventures",
    para: " Needing a pivot or repositioning",
  },
  {
    heading: "European startups",
    para: "Onboarding teams for affordable offshore execution",
  },
];

const ourValues = [
  { para: "We build together." },
  {
    para: "We’ll tell you what’s not working. Always. ",
  },
  {
    para: "We care about what works five years from now.",
  },
  {
    para: "We care about what works five years from now.",
  },
  {
    para: "We care about what works five years from now.",
  }
];

const WhocanHelp = () => {

  //  useEffect(()=>{
  //   const ele = document.getElementById('herosection');
  //   console.log("ele ",ele)

  //   const cb=(entry, observe)=>{
  //     entry.forEach((entry)=>{
  //       console.log("entry ",entry);
  //       if(entry.isIntersecting){
  //         entry.target.classList.add("animate")
  //       }else{
  //         entry.target.classList.remove("animate")
  //       }
  //     })
  //   }

  //   const option={
  //     root:null,
  //     threshold:0.3
  //   };

  //   const observer = new IntersectionObserver(cb, option)
  //   observer.observe(ele);

  //   return () => {
  //     observer.disconnect();
  //   };
  // },[])


  return (
    <div className={`${style["who-can-help-section"]} fade-up-animate`}  >
      <h2 className={style["who-can-you-title"]}>Who Can We Help</h2>
      <p className={style["who-can-help--subtitle"]}>
        Startups at any early stage:
      </p>
      <div className={style["who-can-help-grid-section"]}>
        <div className={style["who-can-help-left-div"]}>
          {gridData?.map((item, index) => (
            <Card item={item} key={index} />
          ))}
          <p className={`${style["who-can-help-card-para"]}} mt-3 mb-0`}>We partner with you as an early-stage co-founder, utilizing AI and our deep understanding of the startup ecosystem to help you build faster, scale smarter, and achieve investor-ready traction.</p>
        </div>
        <div className={style["who-can-help-right-div"]}>
            <p className={style["our-value-title"]}>Our values</p>
          {ourValues?.map((item, index) => (
            <div key={index} className={style["who-can-help-right-card"]}>
              <p className={style["who-can-help-you-right-para"]}>{item.para}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhocanHelp;
