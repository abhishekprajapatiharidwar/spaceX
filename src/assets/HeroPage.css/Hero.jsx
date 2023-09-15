import React, { useState ,useEffect} from 'react';
import './Hero.css';

export default function Hero() {
    const [showHero, setShowHero] = useState(false);

    useEffect(() => {
      // Use a timeout to delay the reveal effect
      const timeout = setTimeout(() => {
        setShowHero(true);
      }, 500); // Adjust the delay as needed
  
      return () => clearTimeout(timeout); // Cleanup timeout on unmount
    }, []);
  return (
    <section className='HeroLanding'>
    <section className={`Hero ${showHero ? 'show' : ''}`}>
      <div id="HeroText" className="HeroSection">
        <h1>SpaceX's Goal</h1>
        <p>
          SpaceX is committed to revolutionizing space technology to enable
          humanity to become a multiplanetary species. Founded by Elon Musk,
          SpaceX's vision is to reduce the cost of space travel and make it
          possible for people to live on other planets, starting with Mars.
          Explore our mission and innovations as we embark on this extraordinary
          journey to the stars.
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
