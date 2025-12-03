import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";

function Resume() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="resume-card">
        <div className="resume-header">
          <h1 className="resume-name">HARSHDEEP KAUR</h1>
          <div className="resume-contact">
            <div>
              <a href="tel:6003280603" className="text-blue-600 hover:underline">6003280603</a>
            </div>
            <div>
              <a href="mailto:harshdeepkaur@gmail.com" className="text-blue-600 hover:underline">harshdeepkaur@gmail.com</a>
            </div>
            <div>
              <a href="https://github.com/24-Harshdeep" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/24-Harshdeep</a>
            </div>
          </div>
        </div>

        <div className="header-divider"></div>

        <div className="summary-block">
          <h2 className="summary-title">SUMMARY</h2>
          <p className="summary-text">
            I'm an aspiring Frontend Developer passionate about creating web
            projects with HTML, CSS, JavaScript, and React. Excited to learn
            backend integration and APIs, I'm eager to contribute to real-world
            projects and grow as a developer through hands-on experience.
          </p>
        </div>

        <div>
          <section>
            <h2 className="section-title">EDUCATION</h2>
            <p style={{ fontWeight: 600, marginBottom: 4 }}>
              Bachelor of Computer Applications (BCA)
            </p>
            <p style={{ fontSize: 14, color: "#555" }}>
              Eternal University | August 2024 – 2027
            </p>
            <ul className="list-tight" style={{ marginTop: 8, fontSize: 14 }}>
              <li>Learning practical frontend and full-stack skills using JavaScript, HTML, CSS, React, and MongoDB.</li>
              <li>Strengthening foundational programming knowledge in Python.</li>
              <li>Completed certifications in Prompt Engineering, Git/GitHub, and database management to enhance both frontend and backend expertise.</li>
            </ul>
          </section>

          <section style={{ marginTop: 28 }}>
            <h2 className="section-title">CERTIFICATIONS</h2>
            <ul className="list-tight" style={{ fontSize: 14 }}>
              <li>
                <strong>Prompt Engineering for ChatGPT</strong> – <a href="https://www.coursera.org/account/accomplishments/records/XBMTKTPY0OW6" target="_blank" rel="noopener noreferrer">Coursera Certificate</a>
              </li>
              <li>
                <strong>Learning to Prompt</strong> – Effective prompts for AI models like ChatGPT
              </li>
              <li>
                <strong>Introduction to Git and GitHub</strong> – <a href="https://www.coursera.org/account/accomplishments/records/D9E238813HKD" target="_blank" rel="noopener noreferrer">Coursera Certificate</a>
              </li>
              <li>
                Certified in foundational Git skills, including version control management and collaboration.
              </li>
              <li>
                <strong>Version Control</strong> – <a href="https://www.coursera.org/account/accomplishments/records/TW70H2NAMY2I" target="_blank" rel="noopener noreferrer">Coursera Certificate</a>
              </li>
              <li>
                Learned version control best practices and collaborative workflows
              </li>
              <li>
                <strong>MongoDB & Backend Learning</strong> – <a href="https://learn.mongodb.com/c/oiMdaLxcTwGHll-piWyAhA" target="_blank" rel="noopener noreferrer">MongoDB Learning</a>
                <ul className="list-tight" style={{ marginLeft: 20, fontSize: 13 }}>
                  <li>Connecting to a MongoDB Database</li>
                  <li>CRUD Operations: Insert and Find Documents</li>
                  <li>Getting Started with MongoDB Atlas</li>
                </ul>
              </li>
            </ul>
          </section>

          <section style={{ marginTop: 28 }}>
            <h2 className="section-title">PROFESSIONAL EXPERIENCE</h2>
            <p style={{ fontWeight: 600, marginBottom: 4 }}>
              Frontend Developer | Personal Projects
            </p>
            <p style={{ fontSize: 14, color: "#555", lineHeight: 1.6, marginBottom: 8 }}>
              Building practical frontend skills with React and developing real-world
              applications with APIs, routing, and responsive design.
            </p>
            <ul className="list-tight" style={{ fontSize: 14 }}>
              <li>
                <strong><a href="https://zaikahubb.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ZaikaHub</a></strong> – Recipe Finder App
              </li>
              <li>
                Developed a dynamic React application allowing users to search,
                view, and add recipes using a public API. Implemented React Router
                for navigation, deployed publicly on Netlify.
              </li>
              <li>
                <strong><a href="https://todolistjsprojectt.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Todo list</a></strong> – store and make tasks done
              </li>
              <li>
                Designed a clean, responsive café menu using only HTML and CSS.
                Focused on layout structure, readability and responsive for all devices.
              </li>
              <li>
                <strong><a href="https://chatbot-frontend-3f4it92se-24-harshdeeps-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Adaptive Chatbot</a></strong> – organizes conversations, supports multiple themes, and helps manage and search your chat history.
              </li>
              <li>
                Adaptive Chatbot — organizes conversations, supports multiple themes, and helps manage and search your chat history.
              </li>
            </ul>
          </section>

          <section style={{ marginTop: 28 }}>
            <h2 className="section-title">SKILLS</h2>
            <ul className="list-tight" style={{ fontSize: 14 }}>
              <li>
                <strong>Frontend Development:</strong> React, HTML, CSS, JavaScript
              </li>
              <li>
                <strong>React Ecosystem:</strong> React Router, React Icons, Component-based design
              </li>
              <li>
                <strong>Tools & Version Control:</strong> Git, GitHub
              </li>
              <li>
                <strong>Soft Skills:</strong> Independent project delivery, problem-solving, time management, quick learner
              </li>
            </ul>
          </section>
        </div>

        <footer className="resume-footer">
          <p style={{ fontSize: 13 }}>
            Building practical full-stack skills using JavaScript, React, Node.js,
            and MongoDB. Strengthening core programming in Python.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
}
