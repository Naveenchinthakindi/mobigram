import React from "react";
import style from "@/app/page.module.css";

const testimonials = [
  {
    quote: "They helped us get the clarity we needed on our unique value and vision when pivoting our business and supported us in perfecting our new pitch.",
    name: "Joseph Pinho",
    title: "Co-founder",
    company: "MOD INC.",
  },
  {
    quote: "The most valuable aspects of our partnership have been the rapid development of an MVP and the swift establishment of a pipeline of interested customers—two critical pillars in our journey towards achieving product-market fit.",
    name: "Kunal Karadia",
    title: "Co-founder",
    company: "venture builder AI",
  },
  {
    quote: "It is impressive to get to know the expertise Amplitude Venture has in AI, as well as how targeted and quickly they work.",
    name: "Atle Riskedal",
    title: "Business Developer",
    company: "Vekstpartner",
  },
  {
    quote: "I would recommend Jakob and the Amplitude team without hesitation to any founder or startup looking for a development partner that combines top-tier technical skills with heart, transparency, and real partnership.",
    name: "Helene Birkeland",
    title: "Founding CEO",
    company: "HappyNova / Blizbi",
  },
];

const Founder = () => {
  return (
    <section className={style["founder-section"]}>
      <div className={style["founder-main-section"]}>
        <h2 className={style["founder-hero-title"]}>
          What our <span>partners</span> say
        </h2>

        <div className={style["founder-grid-section"]}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={style["founder-grid-card"]}>
              <p className={style["founder-name"]}>{testimonial.name}</p>
              <p className={style["founder-address"]}>
                {testimonial.title} {testimonial.company && `- ${testimonial.company}`}
              </p>
              <br />
              <p className={style["founder-description"]}>“{testimonial.quote}”</p>

              <div className={style["star-section"]}>
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="bi bi-star-fill text-warning mx-1" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founder;
