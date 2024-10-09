import React from 'react';
import '../assets/css/hero.css'
import  BANNER  from '../assets/images/banner.png';
import {motion} from 'framer-motion'
import Header from './Header';
import { GoArrowDownRight } from "react-icons/go";
import  FLAG  from '../assets/images/flag.png';


const Hero = () => {
  return (
    <div className='hero-section' data-scroll-section>
        
           <img className='hero' src={BANNER} alt="banner" />

           <div className='big-name' data-scroll   data-scroll-speed="0.50" >
            <motion.h1 initial={{x:0}} animate={{x: '-100%'}}  transition={{repeat: Infinity, ease:'linear', duration: '10' }}> KUMAR - FRONTEND DEVELOPER</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x: '-100%'}}  transition={{repeat: Infinity, ease:'linear', duration: '10' }}> KUMAR - FRONTEND DEVELOPER</motion.h1>
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