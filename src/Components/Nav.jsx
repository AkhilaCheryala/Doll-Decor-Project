import React from 'react'

function Nav() {
  return (
    <div>
        <div className='flex  items-center gap-10 p-2 font-serif text-blue-950 text-lg bg-white w-screen justify-evenly'>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/shop">Shop</a>
        <a href="/testimonials">Testimonials</a>
        <a href="/faqs">FAQs</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
        </div>
    </div>
  )
}

export default Nav