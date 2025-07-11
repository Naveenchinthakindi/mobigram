import React from 'react'
import styles from "@/app/Hero.module.css"

const HeroSection = ({text, image}) => {
  return (
     <section
      className={styles["hero-section"]}
      style={{ backgroundImage: `url(${image})` }}
    >
      <h2 className={styles["hero-text"]}>{text}</h2>
    </section>
  )
}

export default HeroSection
