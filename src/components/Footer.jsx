import React from "react";
import style from "@/app/page.module.css";

const Footer = () => {
  return (
    <section className={style["footer-section"]}>
      <div className={style["footer-main-section"]}>
        <div className={style["footer-left-section"]}>
          {/* <div className={style["logo-section"]}> */}
          <img
            className={style["footer-logo"]}
            src="https://framerusercontent.com/images/9MeREx0lRBdBwg2vdLc9WmenQdg.png"
            alt="header-logo"
          />
          <br />
          <br />
          {/* </div> */}
          <p>A Venture Studio providing Venture Building as a service.</p>
          <span>
            <i className="bi bi-linkedin fs-2"></i>
          </span>
        </div>
        <div className={style["footer-right-section"]}>
          <div className={style["footer-right-section-left-div"]}>
            <h3 className="text-center">COMPANY</h3>
            <ul className={style["footer-menu-list"]}>
              <li className={style["nav-item"]}>Home</li>
              <li className={style["nav-item"]}>About Us</li>
              <li className={style["nav-item"]}>Services</li>
              <li className={style["nav-item"]}>Portfolio</li>
            </ul>
          </div>
          <div className={style["footer-right-section-right-div"]}>
            <h3 className="text-center">RESOURCES</h3>
            <ul className={style["footer-menu-list"]}>
              <li className={style["nav-item"]}>News</li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <hr />
      <div >
        <p className={style["copyright"]}>
          © Amplitude Venture 2025. All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
