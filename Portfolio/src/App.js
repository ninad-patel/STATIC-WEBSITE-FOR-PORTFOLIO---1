import React, { useState, useEffect } from "react";
import "./App.css";
import profilePic from "./profile.jpeg";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  
  useEffect(() => {
    const handlePopState = (event) => {
      setActiveSection(event.state?.section || "home");
    };
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const navigateTo = (section) => {
    setActiveSection(section);
    window.history.pushState({ section }, "", `#${section}`);
  };

  return (
    <div>
      <header className="navbar">
        <nav>
          <ul>
            <li onClick={() => navigateTo("home")}>Home</li>
            <li onClick={() => navigateTo("education")}>Education</li>
            <li onClick={() => navigateTo("experience")}>Experience</li>
            <li onClick={() => navigateTo("projects")}>Projects</li>
            <li onClick={() => navigateTo("skills")}>Skills</li>
            <li onClick={() => navigateTo("contact")}>Contact</li>
          </ul>
        </nav>
      </header>

      {activeSection === "home" && (
        <section className="section home-section">
          <h2 style={{ textAlign: "center" }}>Ninad Patel</h2>
          <img src={profilePic} alt="Ninad Patel" className="profile-pic" />
          <p>
            Hi, I am Ninad, currently interning at an IT solutions company and set to graduate in April 2025.
            As a Master’s student in Information Technology at Parul University, I have developed strong technical
            and problem-solving skills. With expertise in Python, Java, and web technologies like HTML, CSS, JavaScript,
            React, and Node.js, I have contributed to projects such as a social media platform and an e-commerce website.
            Passionate about innovation, I aim to deliver impactful, user-centric solutions and seek a full-time Software
            Development Engineer (SDE) role.
          </p>
        </section>
      )}

      {activeSection === "contact" && (
        <section className="section">
          <h2>Contact Information</h2>
          <p>Phone: +91 8469677794</p>
          <p>Email: ninadpatel12@gmail.com</p>
          <p>
            LinkedIn: <a href="https://www.linkedin.com/in/ninad-patel-se/">ninad-patel-se</a>
          </p>
          <p>
            GitHub: <a href="https://github.com/ninad-patel">ninad-patel</a>
          </p>
        </section>
      )}

      {activeSection === "education" && (
        <section className="section">
          <h2>Education</h2>
          <a style = {{textDecoration : 'None'}} href="/education/ms-it">
            <div className="sub-section">
              <h3>Master of Science - Information Technology</h3>
              <p>Parul University (2023 - Present), CGPA: 8.39</p>
            </div>
          </a>
          <a style = {{textDecoration : 'None'}} href="/education/ms-it">
            <div className="sub-section">
              <h3>Bachelor of Science (Honors)</h3>
              <p>The Maharaja Sayajirao University of Baroda, Vadodara (2018 - 2021), CGPA: 5.89</p>
            </div>
          </a>
          <a style = {{textDecoration : 'None'}} href="/education/ms-it">
            <div className="sub-section">
              <h3>Higher Secondary School</h3>
              <p>Shree Swaminarayan English Medium School (2016 - 2018), 67.6%</p>
            </div>
          </a>
        </section>
      )}

      {activeSection === "experience" && (
        <section className="section">
          <h2>Experience</h2>
          <p>Software Development Intern, CodTech IT Solutions (Dec 2024 - Mar 2025)</p>
        </section>
      )}

      {activeSection === "projects" && (
        <section className="section">
          <h2>Projects</h2>
          <a style = {{textDecoration : 'None'}} href="https://github.com/ninad-patel/CODTECH-IT-SOLUTIONS-Task-2.git">
            <div className="sub-section">
              <h3>Social Media News Application</h3>
              <p>An application displaying live news articles, allowing users to connect, share updates, and interact via likes and comments.</p>
            </div>
          </a>
          <a style = {{textDecoration : 'None'}} href="https://github.com/ninad-patel/CODTECH-IT-SOLUTIONS-Task-1.git">
            <div className="sub-section">
              <h3>E-Commerce Website</h3>
              <p>A shopping platform for natural washing products with product browsing, cart management, and secure checkout features.</p>
            </div>
          </a>
          <a style = {{textDecoration : 'None'}} href="/">
            <div className="sub-section">
              <h3>Amazon Clone</h3>
              <p>A web-based clone of Amazon India with user authentication features, developed using HTML, CSS, Python, and Flask.</p>
            </div>
          </a>
        </section>
      )}

      {activeSection === "skills" && (
        <section className="section">
          <h2>Skills</h2>
          <ul>
            <li>Programming: Java, Python, DSA</li>
            <li>Frameworks: Flask, Django, React</li>
            <li>Databases: Oracle DB, MySQL</li>
            <li>Web Development: HTML, CSS, JavaScript, PHP</li>
          </ul>
        </section>
      )}

      <footer className="footer">&copy; 2025 Ninad Patel. All rights reserved.</footer>
    </div>
  );
};

export default App;
