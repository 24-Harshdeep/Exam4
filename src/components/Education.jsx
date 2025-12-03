import React from 'react'

export default function Education() {
  return (
    <section>
      <h2 className="section-title">EDUCATION</h2>
      <p style={{ fontWeight: 600, marginBottom: 4 }}>
        Bachelor of Computer Applications (BCA)
      </p>
      <p style={{ fontSize: 14, color: '#555' }}>
        Eternal University | August 2024 – 2027
      </p>
      <ul className="list-tight" style={{ marginTop: 8, fontSize: 14 }}>
        <li>Learning practical frontend and full-stack skills using JavaScript, HTML, CSS, React, and MongoDB.</li>
        <li>Strengthening foundational programming knowledge in Python.</li>
        <li>Completed certifications in Prompt Engineering, Git/GitHub, and database management to enhance both frontend and backend expertise.</li>
      </ul>
    </section>
  )
}
