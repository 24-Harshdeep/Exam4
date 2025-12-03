import React from 'react'
import { useParams, Link } from 'react-router-dom'

const PROJECTS = {
  zaikahub: {
    title: 'ZaikaHub',
    description:
      'Recipe Finder App — search, view, and add recipes using a public API. Built with React and React Router.',
    url: 'https://zaikahubb.netlify.app/'
  },
  todolist: {
    title: 'Todo list — store and make tasks done',
    description:
      "A Todo list app for storing tasks and marking them done.",
    url: 'https://todolistjsprojectt.netlify.app/'
  },
  cafemenu: {
    title: 'Café Menu',
    description:
      'Static website showcasing a responsive café menu using HTML and CSS.',
    url: 'https://harshdeepscafe3.netlify.app/'
  }
  ,
  adaptivechat: {
    title: 'Adaptive Chatbot',
    description:
      'Adaptive Chatbot — organizes conversations, supports multiple themes, and helps manage and search your chat history.',
    url: 'https://chatbot-frontend-3f4it92se-24-harshdeeps-projects.vercel.app/'
  }
}

export default function ProjectPage() {
  const { id } = useParams()
  const project = PROJECTS[id]

  if (!project) {
    return (
      <div style={{ padding: 28 }}>
        <h2>Project not found</h2>
        <p>The requested project does not exist.</p>
        <p>
          <Link to="/">← Back to resume</Link>
        </p>
      </div>
    )
  }

  return (
    <div style={{ padding: 28 }}>
      <h2 style={{ marginBottom: 6 }}>{project.title}</h2>
      <p style={{ color: '#444', marginBottom: 12 }}>{project.description}</p>
      {project.url ? (
        <p>
          Live demo: <a href={project.url} target="_blank" rel="noreferrer" style={{ color: '#1a73e8' }}>{project.url}</a>
        </p>
      ) : null}
      <p style={{ marginTop: 18 }}>
        <Link to="/">← Back to resume</Link>
      </p>
    </div>
  )
}
