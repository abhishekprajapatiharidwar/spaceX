// Import necessary dependencies and components from React and other files
import { useContext, useState } from "react"; // Importing useContext and useState from React
import "./App.css"; // Importing CSS for styling
import Nav from "./assets/Nav/Nav"; // Importing the navigation component
import Hero from "./assets/HeroPage/Hero"; // Importing the hero section component
import Main from "./assets/MainSection/Main"; // Importing the main section component
import { MyContext } from "./assets/Context/MyContext"; // Importing a custom context
import Modal from "./assets/Modal/Modal"; // Importing a modal component
import Footer from "./assets/Footer/Footer"; // Importing the footer component

function App() {
  // Accessing values from the context using useContext
  const { modalshow, setmodalshow } = useContext(MyContext);

  return (
    <>
      {/* Render the navigation component */}
      <Nav />

      {/* Render the hero section component */}
      <Hero />

      {/* Render the main section component */}
      <Main />

      {/* Render the footer component */}
      <Footer />

      {/* Conditionally render the modal component based on modalshow state */}
      {modalshow && <Modal />}
    </>
  );
}

export default App;
