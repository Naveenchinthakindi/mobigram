import React from "react";

const MarqueeSection = () => {
  return (
    <>
      <section className="marquee-section">
        <div className="marquee-container">
          <div className="marquee-track">
            <div className="marquee-content">
              Technology Development <span className="marquee-circle"></span>{" "}
              &nbsp; / Research & Validation &nbsp;{" "}
              <span className="marquee-circle"></span> / Storytelling & Content{" "}
              <span className="marquee-circle"></span> / Talent & Offshore Teams{" "}
              <span className="marquee-circle"></span> &nbsp; /
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MarqueeSection;
