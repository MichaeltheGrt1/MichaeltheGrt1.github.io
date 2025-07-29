import styles from "./Education.module.css";

function Education(){
    return(
        <section id="Education" className={styles["education-section"]}>
          <h2 className={styles["education-title"]}>Education</h2>
          <div className={styles["education-elements"]}>
            <div className="card" data-aos="fade-up" data-aos-once="true">
              <img src="./assets/school.png" className="card-img-top" alt="school"></img>
              <div className="card-body">
                <h5 className="card-title">High School Diploma</h5>
                <p className="card-text">Aug 2018 – May 2023</p>
                <p className="card-text">Hedgesville High School</p>
                <p className="card-text"><em>Hedgesville, WV</em></p>
              </div>
            </div>
          

            <div className="card" data-aos="fade-up" data-aos-once="true">
              <img src="./assets/wvu.png" class="card-img-top" alt="college"></img>
              <div className="card-body">
                <h5 className="card-title">Bachelor of Science in Computer Science and Cybersecurity</h5>
                <p className="card-text">2023 - Current</p>
                <p className="card-text">West Virginia University</p>
                <p className="card-text"><em>Morgantown, WV</em></p>
              </div>
            </div>
          

            <div className="card" data-aos="fade-up" data-aos-once="true">
              <img src="./assets/career.png" class="card-img-top" alt="career acclerator"></img>
              <div className="card-body">
                <h5 className="card-title">Global Career Accelerator in Web</h5>
                <p className="card-text">Aug 2024 – Dec 2024</p>
                <p className="card-text"><em>Online Asynchronous Course</em></p>
              </div>
            </div>
          </div>
        </section>
    );
}
export default Education;