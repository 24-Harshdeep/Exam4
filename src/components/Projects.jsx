import React from 'react';

const Projects = () => {
  const projects = [
    { name: "ZaikaHub", link: "https://zaikahubb.netlify.app/", description: "Recipe Finder App using React and API integration." },
    { name: "Weather App", link: "https://harshdeepscafe3.netlify.app/", description: "Live weather tracker with geolocation." },
  ];

  return (
    <section className="p-4">
      <h2 className="text-xl font-semibold mb-2">Projects</h2>
      <ul className="list-disc ml-5">
        {projects.map((p, index) => (
          <li key={index} className="mb-2">
            <a href={p.link} className="text-blue-600 hover:underline">{p.name}</a> - {p.description}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
