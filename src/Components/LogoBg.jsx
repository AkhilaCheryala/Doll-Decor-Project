import React from 'react';
import Bgimg from '../assets/background3-pdd.jpg';
import Img1 from '../assets/img1.png'
import Img2 from '../assets/couples.png'
import Img3 from '../assets/babyshower.png'
import Logotxt1 from '../assets/logotxt1.png'
import './style.css';

function LogoBg() {
  return (
    <div>
      <div className="bg-container relative">
       <div className='absolute top-16 left-12'> 
        <img src= {Logotxt1} className='w-90 h-90'/>
        </div> 
        <img src={Bgimg} alt="Background" className="bgimg  object-cover" />
        <div>
            
      <img src={Img1} alt="Background" className=" absolute top-8 right-0 w-72 img1  object-contain" />
      <img src={Img2} alt="Background" className=" absolute top-10 img2 w-60  object-contain" />
      <img src={Img3} alt="Background" className=" absolute top-0 right-72  w-56  object-contain" />
      </div>
      </div>
      
    </div>
  );
}

export default LogoBg;
