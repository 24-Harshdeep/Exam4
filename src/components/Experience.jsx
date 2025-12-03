import React from 'react'

export default function Experience() {
  return (
    <section style={{ marginTop: 28 }}>
      <h2 className="section-title">PROFESSIONAL EXPERIENCE</h2>
      <p style={{ fontWeight: 600, marginBottom: 4 }}>
        Frontend Developer | Personal Projects
      </p>
      <p style={{ fontSize: 14, color: '#555', lineHeight: 1.6, marginBottom: 8 }}>
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
  )
}
