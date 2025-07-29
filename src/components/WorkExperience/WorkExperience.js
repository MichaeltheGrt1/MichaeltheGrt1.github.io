import styles from "./WorkExperience.module.css";

function WorkExperience() {
  return (
    <section id="Work" >
      <h2 className={styles["work-title"]}>Work Experience</h2>
      <div className={styles["experience-section"]}>

        <div className="card" data-aos="fade-up" data-aos-once="true">
          <div className="card-body">
            <h5 className="card-title">Scrum Master</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              CS 330 - Intro to Software Engineering<br />
              Jan 2025 - May 2025
            </h6>
            <ul className="card-text">
              <li>Worked to ensure relevant information was addressed during scrum meetings.</li>
              <li>Organized team meetings every other day ensuring group members were on task.</li>
              <li>Collaborated with product owner to create a kanban board and discussed which user stories should be addressed each sprint.</li>
              <li>Completed deliverables as assigned in a timely manner as delegated.</li>
              <li>Developed a rocket launch calculator using NOAA databases to calculate ideal launch sites based on historical data.</li>
            </ul>
          </div>
        </div>

        <div className="card" data-aos="fade-up" data-aos-once="true">
          <div className="card-body">
            <h5 className="card-title">Software Developer</h5>
            <h6 className="card-subtitle text-muted">
              Global Career Accelerator<br />
              Jan 2024 - May 2024
            </h6>
            <ul className="card-text">
              <li>Programmed using React and used Node.js to create a local web server that output JSON data.</li>
              <li>Built a tab system with dynamic selectors for rich information display.</li>
              <li>Developed a personal profile website with mobile-first responsive design principles.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
