import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { scale, slide } from './animate';

const NavOgLink = ({data, isActive}) => {

    const { title, href, index} = data;

  return (
    <motion.div 
        className={"link"} 
        onMouseEnter={() => {setSelectedIndicator(href)}} 
        custom={index} 
        variants={slide} 
        initial="initial" 
        animate="enter" 
        exit="exit"
      >
        <motion.div 
          variants={scale} 
          animate={isActive ? "open" : "closed"} 
          className={"indicator"}>
        </motion.div>
        <Link href={href}>{title}</Link>
      </motion.div>
  )
}

export default NavOgLink