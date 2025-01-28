import React from 'react';
import Pic1 from '../assets/gallery_pic1.png';
import Pic2 from '../assets/gallery_pic2.png';
import Pic3 from '../assets/gallery_pic3.png';
import Pic4 from '../assets/gallery_pic4.png';
import Pic5 from '../assets/gallery_pic5.png';
import Pic6 from '../assets/gallery_pic6.png';
import Pic7 from '../assets/gallery_pic7.png';

import './Style.css'; // Import your CSS file

function Gallery() {
  return (
    <div className="gallery-grid w-2/5  pt-10 p-4">
      <img src={Pic1} alt="work picture" className="pic1" />
      <img src={Pic6} alt="work picture" className="pic6" />
      <img src={Pic3} alt="work picture" className="pic3" />
      <img src={Pic4} alt="work picture" className="pic4" />
      <img src={Pic5} alt="work picture" className="pic5" />
      <img src={Pic2} alt="work picture" className="pic2" />
      <img src={Pic7} alt="work picture" className="pic7" />
    
    </div>
  );
}

export default Gallery;
