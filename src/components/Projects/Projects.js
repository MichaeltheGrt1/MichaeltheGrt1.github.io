import styles from "./Projects.module.css";


function Projects(){
    return(
        <section id="Projects" className={styles["projects-section"]}>
          <h2 id="projects-title">Projects</h2>
          <div className={styles["project-elements"]}>
            <div className="card">
              <img src="./assets/school.png" className="card-img-top" alt="school"></img>
              <div className="card-body">
                <h5 className="card-title">Retro Gaming Handheld Console</h5>
                <p className="card-text">Affiliation: <em>Homebrew Computer Club</em></p>
                <p className="card-text"><em>Created a Handheld gaming console using a Raspberry PI 4 that plays retro games</em></p>
              </div>
            </div>

            <div className="card">
              <img src="./assets/scribblio.png" className="card-img-top" alt="career acclerator"></img>
              <div className="card-body">
                <h5 className="card-title">Scribblio Bot</h5>
                <p className="card-text">Affiliation: <em>Self-Interest</em><br/></p>
                <p className="card-text"><em>Uses OpenCV to analyze the colors of a given image file and recreate the image by simulating mouse clicks, using pyautogui in a drawing game color palette to recreate the image.<br/><a href="https://github.com/MichaeltheGrt1/ScribblioBot">Click here to view on github!</a></em></p>
              </div>
            </div>
          </div>
        </section>
    );
}
export default Projects;