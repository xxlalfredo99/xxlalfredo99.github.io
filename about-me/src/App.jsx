import { useState } from 'react'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <div className="overlay">
          <h1>Welcome!</h1>
          <p>Discover my passions, stories and aspirations.</p>
          <img src="/profile.png" alt="My profile" className="hero-profile" />
          <button className="cta">Learn More</button>
        </div>
      </section>

      {/* About Section */}
      <section className="about-me">
        <h2>About Me</h2>
        <img src="/sport.png" alt="" className="sport-profile" />
        <p>
          I’m Alfred, a 24 years old learning and exploring things in life.<br />
          Outside of coding, I love reading, camping, and gathering with friends.<br /><br />
          Sports is also a big part of my life, which I played 
        </p>
        <ul className="pinpoints">
          <li>Basektball</li>
          <li>Tennis</li>
          <li>Golf</li>
          <li>Go Kart</li>
        </ul>
        <p>
          <br />I was also starting my gradeschool's basketball team 😀
        </p>
      </section>
      {/* Highlights Section */}
      <section className="highlights">
        <h2>Highlights</h2>
        
        <ul className="pinpoints">
          <li>Creative Web Developer</li>
          <li>Photography Enthusiast</li>
          <li>Love Exploring New Tech</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Get in Touch</h2>
        <button className="cta">Contact Me</button>
      </section>
    </div>
  );
}

export default App;
