import styles from "./Skills.module.css";

function Skills() {
  return (
    <section id="Skills" className={styles["skills-section"]}>
      <h2 id="skills-title" className={styles["skills-title"]}>Languages/Frameworks</h2>
      <div className={styles["skills-wrapper"]}>
        <div className={styles["skills-container"]}>
          <img src="./assets/html5.png" className={styles["skills-image"]} alt="HTML5 logo" />
          <div className={styles["skills-description"]}>HTML5</div>
        </div>
        <div className={styles["skills-container"]}>
          <img src="./assets/css.png" className={styles["skills-image"]} alt="CSS logo" />
          <div className={styles["skills-description"]}>CSS</div>
        </div>
        <div className={styles["skills-container"]}>
          <img src="./assets/javascript.png" className={styles["skills-image"]} alt="JS logo" />
          <div className={styles["skills-description"]}>Javascript</div>
        </div>
        <div className={styles["skills-container"]}>
          <img src="./assets/python.png" className={styles["skills-image"]} alt="Python logo" />
          <div className={styles["skills-description"]}>Python</div>
        </div>
        <div className={styles["skills-container"]}>
          <img src="./assets/c.png" className={styles["skills-image"]} alt="C logo" />
          <div className={styles["skills-description"]}>C</div>
        </div>
        <div className={styles["skills-container"]}>
          <img src="./assets/node.png" className={styles["skills-image"]} alt="Node logo" />
          <div className={styles["skills-description"]}>NodeJS</div>
        </div>
        <div className={styles["skills-container"]}>
          <img src="./assets/react.png" className={styles["skills-image"]} alt="React logo" />
          <div className={styles["skills-description"]}>React</div>
        </div>
        <div className={styles["skills-container"]}>
          <img src="./assets/bootstrap.png" className={styles["skills-image"]} alt="Bootstrap logo" />
          <div className={styles["skills-description"]}>Bootstrap</div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
