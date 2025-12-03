import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="max-w-4xl mx-auto">
        <About />
        <Projects />
        {/* Add Education, Skills, Certifications components similarly */}
      </main>
    </div>
  );
};

export default Home;
