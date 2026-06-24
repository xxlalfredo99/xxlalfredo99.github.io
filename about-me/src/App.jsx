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
          <button
            className="cta"
            onClick={() => {
              document.getElementById("about-me").scrollIntoView({ behavior: "smooth" });
            }}
          >
            Learn More
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about-me" className="about-me">
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
      {/* My-Journey Section */}
      <section className="my_journey">
        <h2>My Journey</h2>
        <img src="/university.png" alt="" className="university-profile" />
        <p>
          As a Vancouver borned Canadian, I grow up in Hong Kong and moved to Canada in grade 6.<br />
          The combining cultures have shaped my fundamentals and ignited my passion for technology.
          <br /><br />
          In University of Toronto, I dived further into the digital world in which I specialized in:
        </p>
        <ul className="pinpoints">
          <li>Computer Science - Information Systems Stream</li>
        </ul>
        <p>
          This program is unique in a way that it includes many aspects including:
        </p>
        <ul className="pinpoints">
          <li>Computer Computing</li>
          <li>Information Technology</li>
          <li>Database Systems</li>
          <li>Business Management</li>
          <li>Artifical Intellegence</li>
        </ul>
      </section>
      {/* Contact Section */}
      <section className="contact">
        <h2>Get in Touch</h2>
        <p>
          <br />
          HK: +852 6574-5867<br />
          CAD: +1 647-906-8178<br />
          Gmail: alfredhongha@gmail.com
        </p>
      </section>
    </div>
  );
}

export default App;
