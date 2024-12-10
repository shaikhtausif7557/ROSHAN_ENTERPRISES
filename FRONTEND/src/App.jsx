import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import Hero_footer from './components/hero_footer/Hero_footer';
import Aboutus from './components/Aboutus/Aboutus';
import Services from './components/Services/Services';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { useState } from 'react';

function App() {
  const [isActive, setIsActive] = useState(false); // Active state


  return (
    <div id="App">
        <div id="Nav">

        <Navbar isActive={isActive} setIsActive={setIsActive}  />
        </div>
      <div id="Home">
        <Hero />
        <Hero_footer />
      </div>
      <div id="Aboutus">
        <Aboutus />
      </div>
      <div id="Services">
        <Services />
      </div>
      <div id='Works'>
        <Work isActive={isActive}/>
      </div>
      <div id="Contact">
        <Contact/>
      </div>
      <div id='Footer'>
      <Footer/>
      </div>
    </div>
  )
}

export default App
