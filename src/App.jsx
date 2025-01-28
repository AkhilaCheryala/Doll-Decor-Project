import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import About from './Components/About';
import LogoBg from './Components/LogoBg';
import Gallery from './Components/Gallery';
import Services from './Components/Services';
import Testimonials from './Components/Testimonials';

function App() {
  return (
    <div>
      <LogoBg/>
      <div className='logo flex justify-between items-center'>
         <Nav/> 
      </div>
     
      <div className="font-cormorant font-semibold text-center mt-20  text-4xl text-fuchsia-900">
        " Bring your celebrations to Life with our miniature doll themes "
      </div>
      <div className='flex justify-evenly items-center'>
        <Gallery/>
        <About/>
      </div>
      <Services/>
    <Testimonials/>
      
    </div>
  );
}

export default App;
