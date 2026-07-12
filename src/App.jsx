import React from "react";
import "./App.css";

function App() {

  const projects = [
    { title: "Portfolio Website", desc: "Personal portfolio with responsive design using HTML, CSS, JS. Deployed on GitHub Pages.", link: "https://devadharshini-devops.github.io/CODSOFT/" },
    { title: "Landing Page", desc: "CODSOFT branded landing page with Hero section, features and CTA button. Mobile responsive.", link: "https://devadharshini-devops.github.io/CODSOFT-Landingpage/" },
    { title: "Calculator App", desc: "Functional calculator built with HTML CSS and JavaScript with basic arithmetic operations.", link: "https://devadharshini-devops.github.io/calculator" },
    { title: "Job Board Website", desc: "Job listing platform with search and filter options. Frontend built with HTML CSS JS.", link: "https://devadharshini-devops.github.io/jobboard-website" },
    { title: "Online Quiz Maker", desc: "React quiz app with timer, multiple questions, score tracking and results page. Uses React Hooks.", link: "https://devadharshini-devops.github.io/quiz-app-react" },
    { title: "E-Commerce Website", desc: "Full e-commerce site with product listing, cart functionality and checkout page. Built with React.", link: "https://codsoft-ecommerce-sable.vercel.app" },
    { title: "Project Management Tool", desc: "Dashboard to manage tasks, teams and project progress. Clean UI with responsive design.", link: "https://devadharshini-devops.github.io/royal-m-dashboard/" },
  ];

  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Devadharshini</h2>
        <div className="nav-right">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero with Center Round Profile */}
      <section className="hero">
        <div className="hero-profile">
          <img src="https://t4.ftcdn.net/jpg/11/57/72/95/360_F_1157729568_bzWI9dV4PoA1URwoIwgqeXO50BhQ3kfR.jpg" alt="Devadharshini" className="hero-img" />
        </div>
        <p className="greeting">Hello, I'm</p>
        <h1>Devadharshini</h1>
        <h2>Full Stack Developer</h2>
        <p className="hero-desc">
          Passionate Full Stack Developer specializing in React, Node.js, and modern web technologies.
          I build responsive, user-friendly web applications from frontend to backend and deploy them on cloud.
        </p>
        <div className="hero-btns">
          <a href="/Resume.pdf" download="Resume.pdf">
           View Resume
          </a>
        </div>
      </section>

      {/* About - Full Stack Fresher */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <div className="about-container">
          <div className="about-content">
            <h3>Full Stack Developer | Fresher</h3>
            <p>
              I'm a Computer Science graduate and aspiring Full Stack Developer with a strong passion for building 
              complete web applications. I enjoy working on both frontend and backend to create seamless user experiences.
            </p>
            <p>
              My tech stack includes HTML5, CSS3, JavaScript, React.js, Node.js, Express, and MongoDB. 
              I also have experience with Git, GitHub, and deploying applications on Vercel and Netlify.
            </p>
            <p>
              During my CODSOFT Internship, I completed 7 web development projects ranging from static websites 
              to dynamic React applications. Each project helped me strengthen my skills in UI/UX and problem solving.
            </p>
            <p>
              I love learning new technologies and turning ideas into reality. I'm currently looking for 
              Full Stack Developer opportunities to grow and contribute to exciting projects.
            </p>
          </div>
        </div>
      </section>

      {/* Projects - Center Text with Gap */}
      <section id="projects" className="projects">
        <div className="projects-header">
          <h2>My Projects</h2>
          <p className="section-desc">Web Development Projects from CODSOFT Internship</p>
        </div>

        <div className="projects-list">
          {projects.map((project, i) => (
            <div key={i} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <a href={project.link} target="_blank" rel="noreferrer" className="btn-primary">View Project</a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact - Get In Touch */}
      <section id="contact" className="contact">
        <h2>Get In Touch</h2>
        <p className="section-desc">Let's build something amazing together!</p>

        <div className="contact-info">
          <p>📞 <a href="tel:+918148968006">+91 81489 68006</a></p>
          <p>📧 <a href="mailto:devadharshini7412@gmail.com">devadharshini7412@gmail.com</a></p>
          <p>💼 <a href="https://www.linkedin.com/in/devadharshini-m-106113332" target="_blank" rel="noreferrer">LinkedIn</a></p>
          <p>💻 <a href="https://github.com/devadharshini-devops" target="_blank" rel="noreferrer">GitHub</a></p>
        </div>

        <a href="mailto:devadharshini7412@gmail.com?subject=Portfolio Inquiry&body=Hello Devadharshini," className="btn-primary">Email Me</a>
      </section>

      <footer>
        <p>© 2026 Devadharshini | Full Stack Developer</p>
      </footer>
    </div>
  );
}

export default App;