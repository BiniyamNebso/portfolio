import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
      <img
  src={getImageUrl("about/bin.jpg")}
  alt="Me sitting with a laptop"
  style={{ borderRadius: "50%", width: "200px", height: "200px" }}
  className={styles.aboutImage}
/>

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Cloud consultant</h3>
              <p>
                I'm a certified and experienced cloud consultant,i will work with cloud service providers to enhance and financialy 
                optimize the deployment and efficiency of application availablity acrose the aimed users seamlessly.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
