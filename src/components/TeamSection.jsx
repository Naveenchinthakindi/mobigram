import React from "react";
import style from "@/app/page.module.css";

const TeamSection = () => {
  return (
    <section className={style["team-section"]}>
      <div className={style["team-img-section"]}>
        <div className={style["img-section-header-card"]}>
          <span>70 +</span>
          <p>people across Europe, Africa, and Asia</p>
        </div>
        <div className={style["img-section-header-card"]}>
          <span>25 +</span>
          <p>Satisfied clients</p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
