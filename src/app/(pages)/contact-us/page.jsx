"use client";
import React, { useState, useRef } from "react";
import HeroSection from "../../../components/HeroSection";
import style from "@/app/page.module.css";
import useFadeInOnScroll from "@/hooks/useFadeInOnScroll";
import ReCAPTCHA from "react-google-recaptcha";

const page = () => {
  const [formValues, setFormValues] = useState({});
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const recaptchaRef = useRef(null);

  useFadeInOnScroll(); // load the animation

  //check the form values must not be empty
  const isFormIncomplete = () => {
    return Object.values(formValues).some(
      (val) => val === "" || val === false || val === null || val === undefined
    );
  };

  //method to verify the recaptcha
  const handleRecaptcha = async (token) => {
    if (token) {
      try {
        const res = await fetch("/api/captcha", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });

        const data = await res.json();
        console.log("data ", data);

        if (res.ok) {
          setIsVerified(true);
        } else {
          console.error("Error:", data.message);
          setIsVerified(false); // Failed to verify CAPTCHA
        }
      } catch (error) {
        console.error("Error submitting CAPTCHA:", error);
        setIsVerified(false); // On error, set verification to false
      }
    }
  };

  //method to handle the form values
  const handleFormValues = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  //method to submit the form values
  const handleSubmit = (e) => {
    e.preventDefault();

     if(isFormIncomplete()){
      setErrorMessage("Please Fill all details")
      return;
    }

    if (!isVerified) {
      setErrorMessage("Please Verify the Captcha");
      return
    }

    try {
      
    } catch (error) {
      
    }finally{

    }
    
   
    console.log("formValues ", formValues);
    setFormValues({});
  };

  return (
    <>
      <HeroSection
        text="Contact us"
        image="https://framerusercontent.com/images/0UgWoivTfKNGeFA1hdXoqFsLvcQ.svg"
      />
      <section className={`${style["contact-us-section"]} fade-up-animate`}>
        <div className={style["contact-us-left-section"]}>
          <h3>Reach out to us</h3>
          <p>We are ready to help you</p>
          <br />
          <form onSubmit={handleSubmit} className={style["contact-us-form"]}>
            <input
              required
              type="text"
              name="name"
              value={formValues?.name || ""}
              placeholder="Your Name"
              className={style["input-field"]}
              onChange={handleFormValues}
            />
            <input
              required
              type="email"
              name="email"
              value={formValues?.email || ""}
              placeholder="Your Email"
              className={style["input-field"]}
              onChange={handleFormValues}
            />
            <textarea
              required
              type="text"
              name="message"
              rows={5}
              cols={30}
              value={formValues?.message || ""}
              placeholder="Your Message"
              className={style["input-field"]}
              onChange={handleFormValues}
            ></textarea>
            <ReCAPTCHA
              ref={recaptchaRef}
              className="g-recaptcha"
              sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_PUBLIC_KEY}`}
              onChange={handleRecaptcha}
            />
            {errorMessage ? <p className={style['form-error']}>{errorMessage}</p> : null}
            {success ? <p >Form submitted Successfully.</p> : null}
            <button type="submit" className={style["contact-us-btn"]}>
              {loading ? "Loading..." : "Submit"} &nbsp; <i className="bi bi-arrow-right"></i>
            </button>
          </form>
        </div>
        <div className={style["contact-us-right-section"]}>
          <h2>Creating value and driving success.</h2>
          <br />
          <p>
            We partner with you as an early-stage co-founder, utilizing AI and
            our deep understanding of the startup ecosystem to help you build
            faster, scale smarter, and achieve investor-ready traction.
          </p>
          <hr />
          {/* <br /> */}
          <address className={style["contact-us-address"]}>
            <i className="bi bi-geo-alt-fill"></i>{" "}
            <p>Johannes Gate, Stavanger, Rogaland 4014, NO</p>
          </address>
        </div>
      </section>
    </>
  );
};

export default page;
