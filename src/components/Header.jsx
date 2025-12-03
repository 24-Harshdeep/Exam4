import React from 'react'

export default function Header() {
  return (
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
  )
}
