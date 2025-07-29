import React, { useEffect } from "react";
import styles from "./About.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="About" className={styles["about-section"]}>
      <div className={styles["about-card"]} data-aos="fade-up" data-aos-once="true">
        <div className="container">
          <h2 className={styles["about-title"]}>About Me</h2>
          <p className="text-secondary">
            I am a driven junior computer science major at West Virginia University passionate about developing new software and seeing my work
            being used for practical purposes. At this point in my career, I am hoping to secure an entry-level programming position part-time (preferably).
            In the future, I will graduate college with a bachelor's in Computer Science and Cybersecurity and hopefully create or add to something 
            that will leave a real impact on other people's lives.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;