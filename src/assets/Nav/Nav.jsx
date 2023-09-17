import React, { useState } from 'react';
import './Nav.css';

export default function Nav() {


  return (
    <>
      <header className="bg-black p-4" id="nav">
        <nav className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center">
            {/* Left SpaceX Logo */}
            <div className="text-white text-2xl font-semibold">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/96/SpaceX_Logo_Black.png"
                alt="Your Logo"
                className="max-h-7 inverse-logo"
              />
            </div>
          </div>
         
        </nav>
      </header>
    </>
  );
}
