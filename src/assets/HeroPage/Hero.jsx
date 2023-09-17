import React, { useState, useEffect } from 'react';
import './Hero.css';

// Hero component for displaying a featured section with a video and text
export default function Hero() {
  // State to control the visibility of the hero section
  const [showHero, setShowHero] = useState(false);

  // Effect to reveal the hero section with a delay
  useEffect(() => {
    // Use a timeout to delay the reveal effect
    const timeout = setTimeout(() => {
      setShowHero(true);
    }, 500); // Adjust the delay as needed

    // Cleanup: Clear the timeout on unmount to prevent memory leaks
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className='HeroLanding '>
      <section className={`Hero ${showHero ? 'show' : ''}`}>
        <div id="HeroText" className="HeroSection">
          <h1>SpaceX Capsules Explorer</h1>
          <p>
            SpaceX capsules epitomize modern space exploration, shuttling astronauts and cargo to destinations like the International Space Station. Crafted with cutting-edge technology, these capsules symbolize humanity's unceasing quest for the cosmos. They are the vessels that propel us into the stars, merging science and imagination in the grand theater of space.
          </p>
        </div>
        <div id="HeroVideo" className="HeroSection">
          <iframe
            src="https://www.youtube.com/embed/_krgcofiM6M"
            title="Starship | First Integrated Flight Test"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </section>
  );
}
