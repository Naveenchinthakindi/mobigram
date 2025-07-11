"use client";
import React, { useEffect } from "react";

const useFadeInOnScroll = (
  className = "fade-up-animate",
  ref,
  options = { threshold: 0.2 }
) => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up-animate");
    if (!elements?.length) return;

    const cb = (entries, observe) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    };

    const observer = new IntersectionObserver(cb, options);

    elements.forEach((ele) => observer.observe(ele));

    return () => observer.disconnect();
  }, [ref, options]);
};

export default useFadeInOnScroll;
