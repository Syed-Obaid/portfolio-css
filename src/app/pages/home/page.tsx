'use client'
import Link from 'next/link'
import React from 'react'
import Typewriter from 'typewriter-effect';

function HomePage() {
 
  return (
    <>
      <section className='home' id='home'>
        <div className="home-content">
            <h3>Hello, It's Me</h3>
            <h1>Syed Obaid-ullah Sharif</h1>
            <h3 className=''>And I'm a <span className=''> <Typewriter
  options={{
    strings: ['Frontend Developer', 'Full Stack Developer'],
    autoStart: true,
    loop: true,
  }} 
/></span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro molestiae delectus maxime deserunt tempore sed cum, provident sunt architecto amet earum nam quisquam, ipsam dolores! Officia facere alias veritatis earum?</p>
            <div className="social-media">
                <Link href="#"><svg className="h-8 w-8 "  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></Link>
                <Link href="#"><svg className="h-8 w-8 "  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></Link>
                <Link href="#"><svg className="h-8 w-8 "  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></Link>
                <Link href="#"><svg className="h-8 w-8 "  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg></Link>
            </div>
<a href="#" className='btn'>Download Cv</a>

        </div>
<div className="home-img">
    <img src="/banner.png" alt="" />
</div>
        </section>
    </>
  )
}

export default HomePage
