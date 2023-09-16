import { useContext, useState } from 'react'
import './App.css'
import Nav from './assets/Nav/Nav'
import Hero from './assets/HeroPage.css/Hero'
import Main from './assets/MainSection/Main'
import { MyContext } from './assets/Context/MyContext'
import Modal from './assets/Modal/Modal'


function App() {
  const { modalshow, setmodalshow } = useContext(MyContext);
  return (
    <>
   <Nav/>
   <Hero/>
   <Main/>
  
  {
    modalshow && <Modal/>
  }
   
 

    </>
  )
}

export default App
