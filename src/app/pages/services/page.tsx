import React from 'react'

function Services() {
  return (
    <>
      <section className='services' id='services'>
        <h2 className='heading'>Our <span>Services</span></h2>
        <div className="services-container">
         <div className="services-box">
         <svg className="h-8 w-8 "  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="7 8 3 12 7 16" />  <polyline points="17 8 21 12 17 16" />  <line x1="14" y1="4" x2="10" y2="20" /></svg>
         <h3>Web Development</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eligendi libero molestias magni nostrum impedit ipsam, esse quia laborum, aut velit! Quod rerum accusantium tenetur nobis esse quaerat non ea!</p>
         <a href="#" className="btn">Read More</a>
         </div>

         <div className="services-box">
         <svg className="h-8 w-8 "  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M3 21v-4a4 4 0 1 1 4 4h-4" />  <path d="M21 3a16 16 0 0 0 -12.8 10.2" />  <path d="M21 3a16 16 0 0 1 -10.2 12.8" />  <path d="M10.6 9a9 9 0 0 1 4.4 4.4" /></svg>
         <h3>Graphic Design</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eligendi libero molestias magni nostrum impedit ipsam, esse quia laborum, aut velit! Quod rerum accusantium tenetur nobis esse quaerat non ea!</p>
         <a href="#" className="btn">Read More</a>
         </div>

         <div className="services-box">
         <svg className="h-8 w-8 "  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <line x1="12" y1="20" x2="12" y2="10" />  <line x1="18" y1="20" x2="18" y2="4" />  <line x1="6" y1="20" x2="6" y2="16" /></svg>
         <h3>Digital Marketing</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eligendi libero molestias magni nostrum impedit ipsam, esse quia laborum, aut velit! Quod rerum accusantium tenetur nobis esse quaerat non ea!</p>
         <a href="#" className="btn">Read More</a>
         </div>

        </div>

      </section>
    </>
  )
}

export default Services
