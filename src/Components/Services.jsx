import React from 'react'
import Category1 from '../assets/category-pic1.png'
import Category2 from '../assets/category-pic2.png'
import Category3 from '../assets/category-pic3.png'
import './Style.css';
import Shopbtn from './Shopbtn';

function Services() {
  return (
    <div className='mt-4'>
        <div className='font-cormorant text-purple-900 text-4xl font-semibold text-center'>Our Services</div>
        <div className='services-grid gap-4 p-10 relative'>
           
           <div><img src={Category1} alt='frst picture'/> 
           <Shopbtn/> 
           <div className='absolute top-80 shadow-black font-cormorant font-semibold text-4xl text-white ml-36'>Rentals</div>
           </div>
           <div><img src={Category2} alt='scnd picture'/> <Shopbtn/>
           <div className='absolute top-80 shadow-black font-cormorant font-semibold text-4xl text-white ml-28'>Return Gifts</div>
           </div>
           <div><img src={Category3} alt='thrd picture'/> <Shopbtn/>
           <div className='absolute top-80 shadow-black font-cormorant font-semibold text-4xl text-white ml-32'>Doll Store</div>
           </div>
          
       </div>
    </div>
  )
}

export default Services