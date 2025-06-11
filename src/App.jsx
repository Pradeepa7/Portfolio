import React from 'react';
// Importing global CSS styles
import './App.css';
// Importing components
import Navbar from './Components/Navbar';
import Home from './Components/Home';
// Importing Bootstrap JS for interactive components
import '../node_modules/bootstrap/dist/js/bootstrap';
// Importing Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import About from './Components/About';
import Experience from './Components/Experience';
import Tech from './Components/Tech';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
// Importing Animate.css for animations
import "animate.css";
import Footer from './Components/Footer';

function App() {
  return (
    // Main container with minimum viewport height and black background
    <div className='min-vh-100' style={{backgroundColor:"black"}}>
      {/* Rendering navigation bar */}
      <Navbar/>
      {/* Rendering each section of the page */}
      <Home/>
      <About/>
      <Experience/>
      <Tech/>
      <Projects/>
      <Contact/>
      {/* Rendering footer */}
      <Footer/>
    </div>
  )
}

export default App;
