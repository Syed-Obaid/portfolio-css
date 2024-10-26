

'use client'
import React, { useState } from 'react'
import Link from 'next/link';

function Navbar() {
const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="navbar">
        <span className='nav-logo'>Portfolio</span>
        <div className={`nav-items ${isOpen && "open"}`}>
          <Link href="/#home" className="" onClick={() => setIsOpen(!isOpen) }>Home</Link>
          <Link href="/pages/about#about"  onClick={() => setIsOpen(!isOpen)}>About</Link>
          <Link href="/pages/services#services"  onClick={() => setIsOpen(!isOpen)}>Services</Link>
          <Link href="/pages/portfolio#portfolio"  onClick={() => setIsOpen(!isOpen)}>Portfolio</Link>
          <Link href="/pages/contact#contact"  onClick={() => setIsOpen(!isOpen)}>Contact</Link>
        </div>
        <div className={`nav-toggle ${isOpen && "open"} `} onClick={() => setIsOpen(!isOpen)}>
          <div className="bar">

          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
