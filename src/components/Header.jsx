"use client";
import React, { useState } from "react";
import style from "@/app/page.module.css";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={style["main-header"]}>
        <div className={style["logo-section"]}>
          <div>
            <Link href={"/"}>
              <img
                className={style["header-logo"]}
                src="https://framerusercontent.com/images/9MeREx0lRBdBwg2vdLc9WmenQdg.png"
                alt="header-logo"
              />
            </Link>
          </div>
          <div
            className={`hamburger ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
          </div>
        </div>
        <nav
          className={`${style["nav-main"]} nav-bar ${
            isOpen ? "open" : "close"
          }`}
        >
          <ul className={`${style["nav-list"]}`}>
            <li className={style["nav-item"]}>
              <Link href={"/about"} onClick={()=>setIsOpen(false)}>About Us</Link>
            </li>
            <li className={style["nav-item"]}>
              <Link href={"/service"} onClick={()=>setIsOpen(false)}>Services</Link>
            </li>
            <li className={style["nav-item"]}>
              <Link href={"/portfolio"} onClick={()=>setIsOpen(false)}>Portfolio</Link>
            </li>
            <li className={style["nav-item"]}>
              <Link href={"/news"} onClick={()=>setIsOpen(false)}>News</Link>
            </li>
            <li className={style["nav-item"]}>
              <Link href={"/contact-us"} onClick={()=>setIsOpen(false)}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
