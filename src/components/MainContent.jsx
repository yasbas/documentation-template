import React from 'react'

function MainContent() {
  return (
    <main className="main-content">
      <h2>Getting Started</h2>
      <p>Welcome to our documentation. This guide will help you get started with our product.</p>
      
      <h3 id="prerequisites">Prerequisites</h3>
      <p>Before you begin, ensure you have met the following requirements:</p>
      <ul>
        <li>Node.js 14.0 or higher</li>
        <li>npm or yarn package manager</li>
      </ul>

      <h3 id="quick-start">Quick Start</h3>
      <p>Follow these steps to get started quickly:</p>
      <ol>
        <li>Clone the repository</li>
        <li>Install dependencies</li>
        <li>Start the development server</li>
      </ol>

      <h3 id="features">Features</h3>
      <p>Our product includes the following features:</p>
      <ul>
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
      </ul>

      <h3 id="support">Support</h3>
      <p>If you need help, you can:</p>
      <ul>
        <li>Check our FAQ section</li>
        <li>Join our community</li>
        <li>Contact support</li>
      </ul>
    </main>
  )
}

export default MainContent
