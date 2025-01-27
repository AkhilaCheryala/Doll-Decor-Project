import React from 'react'
import Pic1 from '../assets/gallery_pic1.png'
import Pic2 from '../assets/gallery_pic2.png'
import Pic3 from '../assets/gallery_pic3.png'
import Pic4 from '../assets/gallery_pic4.png'
import Pic5 from '../assets/gallery_pic5.png'
import Pic6 from '../assets/gallery_pic6.png'

function Gallery() {
  return (
    <div className='flex justify-start'>
    <div className=' grid grid-cols-2 grid-rows-3 w-2/4'>
        <div>
            <img src={Pic1} alt='work picture'/>
        </div>
        <div>
            <img src={Pic2} alt='work picture'/>
        </div>
        <div>
            <img src={Pic3} alt='work picture'/>
        </div>
        <div>
            <img src={Pic4} alt='work picture'/>
        </div>
        <div>
            <img src={Pic5} alt='work picture'/>
        </div>
        <div>
            <img src={Pic6} alt='work picture'/>
        </div>
    </div>
    </div>
  )
}

export default Gallery