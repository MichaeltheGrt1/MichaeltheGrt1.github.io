import './App.css';
import React, { useState, useEffect } from 'react';
import AOS from 'aos'; //Library used for fade in animation
import 'aos/dist/aos.css';



//Every component import
import Navbar from "./components/Navbar/Navbar.js";
import Banner from "./components/Banner/Banner.js";
import About from "./components/About/About.js";
import Education from "./components/Education/Education.js";
import WorkExperience from "./components/WorkExperience/WorkExperience.js";
import Skills from "./components/Skills/Skills.js";
import Projects from "./components/Projects/Projects.js";
import Contact from "./components/Contact/Contact.js";





function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <About/>
      <Education/>
      <WorkExperience/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  );
}

export default App;
  



//   /*Initializes AOS import */
//   useEffect(() => {
//     AOS.init({ 
//       duration: 1000,
//       once: true
//     });
    
//   }, []);


//     return (
//     <div>
//       <header>
//       </header>
//       <section id="home-section">
//         <div data-spy="scroll" data-target=".navbar" data-offset="70">
//           <nav className="navbar navbar-expand-lg bg-body-tertiary header-navbar w-100">
//           <div className="container-fluid">
//             <a className="navbar-brand" href="#home-section">Home</a>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarScroll"
//               aria-controls="navbarScroll"
//               aria-expanded="false"
//               aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarScroll">
//               <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
//                 <li className="nav-item">
//                   <a className="nav-link" href="#about-section">About Me</a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#experience-section">Relevant Experience</a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#education-section">Education</a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#skills-section">Skills</a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#projects-section">Projects</a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#contact-section">Contact Me</a>
//                 </li>
//               </ul>
//               <ul className="navbar-nav ms-auto">
//                 <li className="nav-item">
//                   <a className="nav-link" href="./assets/Programmer Resume 2025-2026.docx" download>
//                     <i className="bi bi-download"></i>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
        


//           
//       </section>

        
        



        
//         <section id="skills-section">
//           <h2 id="skills-title">Languages/Frameworks</h2>
//           <div className="skills-wrapper">
//             <div className="skills-container">
//               <img src="./assets/html5.png" className="skills-image" alt="HTML5 logo" />
//               <div className="skills-description">HTML5</div>
//             </div>
//             <div className="skills-container">
//               <img src="./assets/css.png" className="skills-image" alt="CSS logo" />
//               <div className="skills-description">CSS</div>
//             </div>
//             <div className="skills-container">
//               <img src="./assets/javascript.png" className="skills-image" alt="JS logo" />
//               <div className="skills-description">Javascript</div>
//             </div>
//             <div className="skills-container">
//               <img src="./assets/python.png" className="skills-image" alt="Python logo" />
//               <div className="skills-description">Python</div>
//             </div>
//             <div className="skills-container">
//               <img src="./assets/c.png" className="skills-image" alt="C logo" />
//               <div className="skills-description">C</div>
//             </div>
//             <div className="skills-container">
//               <img src="./assets/node.png" className="skills-image" alt="Node logo"/>
//               <div className="skills-description">NodeJS</div>
//             </div>
//             <div className="skills-container">
//               <img src="./assets/react.png" className="skills-image" alt="React logo" />
//               <div className="skills-description">React</div>
//             </div>
//             <div className="skills-container">
//               <img src="./assets/bootstrap.png" className="skills-image" alt="Bootstrap logo" />
//               <div className="skills-description">Bootstrap</div>
//             </div>
//           </div>
//         </section>
        
        


//         <footer>
          
//         </footer>
      
//     </div>
//   );
// }

// export default App;

