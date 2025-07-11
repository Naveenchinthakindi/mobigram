'use client'

import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const CountAnimate = ({end, duration = 2}) => {
  const [startCount, setStartCount] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: false, // allows repeated animation
    threshold: 0.3, // trigger when 30% in view
  });

  useEffect(() => {
    if (inView) {
      setStartCount(false); // Reset
      setTimeout(() => setStartCount(true), 10); // Re-trigger
    }
  }, [inView]);

  return (
    <div>
      <h3 ref={ref}>
        {startCount ? <CountUp end={end} duration={duration} useEasing={false} startOnMount={true} /> : 0}+
      </h3>
    </div>
  );
};

export default CountAnimate;
