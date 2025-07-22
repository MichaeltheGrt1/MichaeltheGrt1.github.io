import './App.css';
import React, { useState, useEffect } from 'react';
import AOS from 'aos'; //Library used for fade in animation
import 'aos/dist/aos.css';
import hampdenAudio from './assets/Hampden_parks.mp3';




//Cool opening variable to bring user through profile
const coolOpeningClick = () => {
  const bubble = document.querySelector(".speech-bubble");
  const glasses = document.querySelector(".glasses");

  if (bubble && glasses){
    glasses.classList.remove("glasses-animate");
    void glasses.offsetWidth;
    glasses.classList.add("glasses-animate");

    const audio = new Audio(hampdenAudio);
    audio.play().catch(error => {
      console.error("Playback failed:", error);
    });
  }
};


function App() {
  
  //if the text bubble is clicked set state and stop text bounce
  const [isClicked, setIsClicked] = useState(false);
  const text = "Click here to get started!";
  const handleClick = () => {
    setIsClicked(true);
  };

  useEffect(() => {
    const bubble = document.querySelector(".speech-bubble");
    if (bubble){
      bubble.addEventListener("click", coolOpeningClick, { once: true });
      return () => {
        bubble.removeEventListener("click", coolOpeningClick);
      };
    }
  }, []);

  /*Initializes AOS import */
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true
    });
    
  }, []);


    return (
    <div>
      <header>
      </header>
      <section id="home-section">
        <div data-spy="scroll" data-target=".navbar" data-offset="70">
          <nav className="navbar navbar-expand-lg bg-body-tertiary header-navbar w-100">
          <div className="container-fluid">
            <a className="navbar-brand" href="#home-section">Home</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                  <a className="nav-link" href="#about-section">About Me</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#experience-section">Relevant Experience</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#education-section">Education</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#skills-section">Skills</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects-section">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact-section">Contact Me</a>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="./assets/Programmer Resume 2025-2026.docx" download>
                    <i className="bi bi-download"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        


          <div id="banner">
            <img src="/assets/banner.jpg" alt="Banner Image" id="banner-img" />
            <img className="glasses" src="/assets/glasses.png" alt="Glasses" />
            <div id="banner-content">
              <h1 id="my-name">Michael Kaulfuss</h1>
                <div className="profile-wrapper">
                  <button
                    className="speech-bubble"
                    onClick={handleClick}
                  >Click here to get started!
                  </button>
                  <img src="/assets/image0.jpg" alt="Profile Picture" id="profile-pic" />
                </div>
              <p id="banner-subtext"><i>Computer Science and Cybersecurity Student at WVU</i></p>
            </div>
          </div>
        </div>
      </section>

        <section id="about-section">
          <div id="about-card" data-aos="fade-up">
            <div className="container">
              <h2 id="about-title">About Me</h2>
              <p>I am a driven junior computer science major at West Virginia University passionate about developing new software and seeing my work
                being used for practical purposes. At this point in my career, I am hoping to secure an entry-level programming position part-time (preferably).
                In the future, I will graduate college with a bachelor's in Computer Science and Cybersecurity and hopefully create or add to something 
                that will leave a real impact on other people's lives.
              </p>
            </div>
          </div>
        </section>
        
        <h2 id="work-title">Work Experience</h2>
        <div id="experience-section">
          <div className="card" data-aos="fade-up">
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

          <div className="card" data-aos="fade-up">
            <div className="card-body">
              <h5 className="card-title">Software Developer</h5>
              <h6 className="card-subtitle mb-2 text-muted">
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



        <section id="education-section">
          <h2 id="education-title">Education</h2>
          <div className="education-elements">
            <div className="card" data-aos="fade-up">
              <img src="./assets/school.png" class="card-img-top" alt="school"></img>
              <div className="card-body">
                <h5 className="card-title">High School Diploma</h5>
                <p className="card-text">Aug 2018 – May 2023</p>
                <p className="card-text">Hedgesville High School</p>
                <p className="card-text"><em>Hedgesville, WV</em></p>
              </div>
            </div>
          

            <div className="card" data-aos="fade-up">
              <img src="./assets/wvu.png" class="card-img-top" alt="college"></img>
              <div className="card-body">
                <h5 className="card-title">Bachelor of Science in Computer Science and Cybersecurity</h5>
                <p className="card-text">2023 - Current</p>
                <p className="card-text">West Virginia University</p>
                <p className="card-text"><em>Morgantown, WV</em></p>
              </div>
            </div>
          

            <div className="card" data-aos="fade-up">
              <img src="./assets/career.png" class="card-img-top" alt="career acclerator"></img>
              <div className="card-body">
                <h5 className="card-title">Global Career Accelerator in Web</h5>
                <p className="card-text">Aug 2024 – Dec 2024</p>
                <p className="card-text"><em>Online Asynchronous Course</em></p>
              </div>
            </div>
          </div>
        </section>
        
        <section id="skills-section">
          <h2 id="skills-title">Languages/Frameworks</h2>
          <div className="skills-wrapper">
            <div className="skills-container">
              <img src="./assets/html5.png" className="skills-image" alt="HTML5 logo" />
              <div className="skills-description">HTML5</div>
            </div>
            <div className="skills-container">
              <img src="./assets/css.png" className="skills-image" alt="CSS logo" />
              <div className="skills-description">CSS</div>
            </div>
            <div className="skills-container">
              <img src="./assets/javascript.png" className="skills-image" alt="JS logo" />
              <div className="skills-description">Javascript</div>
            </div>
            <div className="skills-container">
              <img src="./assets/python.png" className="skills-image" alt="Python logo" />
              <div className="skills-description">Python</div>
            </div>
            <div className="skills-container">
              <img src="./assets/c.png" className="skills-image" alt="C logo" />
              <div className="skills-description">C</div>
            </div>
            <div className="skills-container">
              <img src="./assets/node.png" className="skills-image" alt="Node logo"/>
              <div className="skills-description">NodeJS</div>
            </div>
            <div className="skills-container">
              <img src="./assets/react.png" className="skills-image" alt="React logo" />
              <div className="skills-description">React</div>
            </div>
            <div className="skills-container">
              <img src="./assets/bootstrap.png" className="skills-image" alt="Bootstrap logo" />
              <div className="skills-description">Bootstrap</div>
            </div>
          </div>
        </section>
        
        <section id="projects-section">
          <h2 id="projects-title">Projects</h2>
          <div className="education-elements">
            <div className="card">
              <img src="./assets/school.png" class="card-img-top" alt="school"></img>
              <div className="card-body">
                <h5 className="card-title">Retro Gaming Handheld Console</h5>
                <p className="card-text">Affiliation: <em>Homebrew Computer Club</em></p>
                <p className="card-text"><em>Created a Handheld gaming console using a Raspberry PI 4 that plays retro games</em></p>
              </div>
            </div>

            <div className="card">
              <img src="./assets/scribblio.png" class="card-img-top" alt="career acclerator"></img>
              <div className="card-body">
                <h5 className="card-title">Scribblio Bot</h5>
                <p className="card-text">Affiliation: <em>Self-Interest</em><br/></p>
                <p className="card-text"><em>Uses OpenCV to analyze the colors of a given image file and recreate the image by simulating mouse clicks, using pyautogui in a drawing game color palette to recreate the image.<br/><a href="https://github.com/MichaeltheGrt1/ScribblioBot">Click here to view on github!</a></em></p>
              </div>
            </div>
          </div>
        </section>


        <footer>
          <h2>Contact Me!</h2>
          <section id="contact-section">
            <a className="button-icons" href="https://github.com/MichaeltheGrt1"><i className="bi bi-github"></i></a>
            <a className="button-icons" href="https://www.linkedin.com/in/michael-kaulfuss-693387327"><i className="bi bi-linkedin"></i></a>
            <a className="button-icons" href="mailto:mlk00029@mix.wvu.edu"><i className="bi bi-envelope"></i></a>
          </section>
        </footer>
      
    </div>
  );
}

export default App;

