import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Biniyam Nebso</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 5 years of experience using React and
          NodeJS. Motivated and dynamic Web Developer with a keen focus and experience in web application development and web
          layout design, with a strong work ethic and innate ability to adapt in ever-changing and challenging environments.
          Education and experience in comprehensive problem solving, creative troubleshooting, and complex project
          management. Accomplished with effective collaboration skills, team building capabilities and leadership in diverse
          and multifaceted operations.
           Reach out if you'd like to learn more!
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/photo.png")}
        alt="image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
