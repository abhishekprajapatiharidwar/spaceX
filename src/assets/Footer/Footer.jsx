import React from 'react';

// Footer component for displaying website credits
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-gray-400">
          Developed By -{' '}
          <a href="https://abhishekprajapati.netlify.app/" className="hover:text-red-600">
            @Abhishek Kumar
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
