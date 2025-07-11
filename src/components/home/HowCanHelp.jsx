import React from "react";
import style from "@/app/page.module.css";

const gridData = [
  {
    image: (
      <i className="bi bi-file-earmark-check fs-2"></i>
    ),

    title: "Validate",
    para: "Pressure-test your startup with market research, competitor insights, and expert analysis",
  },
  {
    image: <i className="bi bi-building-check fs-2"></i>,
    title: "Build ",
    para: "From wireframes to full product launches — all at startup-friendly costs",
  },
  {
    image:<i className="bi bi-arrows-fullscreen fs-2"></i>,
    title: "Pivot ",
    para: "Figure out what’s not working , why, and how to change course",
  },
  {
    image: <i className="bi bi-people fs-2"></i>,
    title: "Team Up",
    para: "Tap into global delivery teams for flexible, affordable staffing",
  },
  {
    image: <i className="bi bi-person-standing fs-2"></i>,
    title: "Storytelling ",
    para: "Craft investor narratives, from your first pitch deck to your brand launch",
  },
];

const Card = ({ item }) => {
  <div>
    <h3 className="fs-4 mb-3 mt-0 fw-normal">{item?.title}</h3>
    <p className="fs-5 mb-0 text-muted">{item?.para}</p>
    <br />
    <button className="btn px-0">Read More</button>
  </div>;
};

const HowCanHelp = () => {
  return (
    <section className={`${style["section-how-can-help"]} fade-up-animate`}>
      <div className={style["how-can-help-first-div"]}>
        <h2 className={style["how-can-help-first-title"]}>How can we help</h2>
        <p className={`${style["how-can-help-first-para"]} text-muted`}>
          We work like a co-founder — from napkin sketch to launch and scale.
        </p>
      </div>
      <div className={style["how-can-help-second-div"]}>
        {gridData?.map((item, index) => (
          <div key={index} className={style["how-can-help-second-div-grid"]}>
            <div>
             {item?.image}
             <br />
            </div>
            <div className={style["how-can-help-second-div-card"]}>
              <div>
                <h3 className={style["how-can-help-card-title"]}>
                  {item?.title}
                </h3>
                <p className={style["how-can-help-card-para"]}>{item?.para}</p>
                <button className="btn px-0">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowCanHelp;
