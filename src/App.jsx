import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function Resume() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="resume-card">
        <Header />

        <div className="header-divider"></div>

        <Summary />

        <div>
          <Education />
          <Certifications />
          <Experience />
          <Skills />
        </div>

        <Footer />
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
