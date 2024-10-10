import React from 'react';
import '../assets/css/hero.css'
import  BANNER  from '../assets/images/banner.png';
import {motion} from 'framer-motion'
import Header from './Header';
import { GoArrowDownRight } from "react-icons/go";
import  FLAG  from '../assets/images/flag.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef, useLayoutEffect } from 'react';

const Hero = () => {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      
    })
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }

  return (
    <div className='hero-section' data-scroll-section>
        
           <img className='hero' src={BANNER} alt="banner" />

           <div className='big-name' data-scroll   data-scroll-speed="0.50" ref={slider} >
            <h1 ref={firstText}> KUMAR - FRONTEND DEVELOPER</h1>
            <h1 ref={secondText}> KUMAR - FRONTEND DEVELOPER</h1>
           </div>
           <div className='overlay'>
            <div className='shape'>
               <p>Located in India &nbsp; <img height={25} width={25} src={FLAG} alt="flag" /></p>
            </div>
            <div className='profession' data-scroll   data-scroll-speed="0.50" >
                 <GoArrowDownRight color='#fff' />
                 <div className='detail-banner'>
                 <p>Freelance</p>
                 <p>Frontend Developer</p>
                 </div>
                 
              
            </div>
            <div className='mobile-info' data-scroll   data-scroll-speed="0.50">
                 <p className='blink'>Online</p> <span>|</span><p>Freelance Developer</p>
            </div>

           </div>

      
          
    </div>
  )
}

export default Hero