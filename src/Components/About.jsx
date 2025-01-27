import React from 'react';
import './style.css';

function About() {
  return (
    <div className="p-4 about flex justify-end ">
      <div className="text-xl font-extralight p-10 text-blue-950 text-left w-2/4 ">
        {/* About Us Section Title */}
        <div className="text-center text-3xl font-medium font-cormorant m-4">
          About Us
        </div>

        {/* Main Description */}
        At Preethi Doll Decors, we bring your celebrations to life with our
        unique miniature doll themes and exquisite decor. Whether it’s a
        birthday, wedding, baby shower, or a festive gathering, we specialize
        in creating enchanting doll setups that perfectly complement your
        event’s theme.

        {/* Our Offerings */}
        <div className="font-bold text-lg mt-6 text-pink-700">
          Our Offerings:
        </div>
        <ul className="about_sub_section list-disc list-inside text-gray-700 font-semibold text-base mt-4 space-y-2">
          <li>
            <span className="text-yellow-600">Doll Decor on Rent:</span> Beautifully crafted mini party-themed doll sets available for short-term use.
          </li>
          <li>
            <span className="text-yellow-600">Customization Services:</span> Tailor-made doll designs to suit your vision and event needs.
          </li>
          <li>
            <span className="text-yellow-600">Return Gifts:</span> Thoughtful and creative return gifts that leave lasting impressions on your guests.
          </li>
        </ul>

        {/* Closing Statement */}
        <div className="mt-6">
          With an eye for detail and a passion for creativity, we aim to make
          every occasion magical and memorable. Our dolls are more than
          decorations—they are storytellers, adding a touch of charm and elegance
          to your special moments.
        </div>

        <div className="mt-4">
          Let us help you craft unforgettable memories with our miniature
          masterpieces.
        </div>
      </div>
    </div>
  );
}

export default About;
