import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <>
      <section className='about' id='about'>
        <div className='about-img'>
        <Image src="/ban2.png" alt="" />
        </div>
        <div className="about-content">
            <h2 className='heading'>About <span>Me</span></h2>
            <h3>Frontend Developer!</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque esse omnis in incidunt ad vitae beatae neque quae dolorum magni quam magnam facilis deserunt recusandae, aliquid iste? Similique, nihil magnam.</p>
            <a href="#" className='btn'>Read More</a>
        </div>

      </section>
    </>
  )
}

export default About
