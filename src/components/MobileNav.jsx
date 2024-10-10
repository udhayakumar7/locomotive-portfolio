import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import Curve from '../utils/Curve';
import { menuSlide } from '../utils/animate';
import { motion } from 'framer-motion';
import NavOgLink from '../utils/NavOgLink';
const MobileNav = () => {

    const navItems = [
        {
          title: "Home",
          href: "/",
        },
        {
          title: "Work",
          href: "/work",
        },
        {
          title: "About",
          href: "/about",
        },
        {
          title: "Contact",
          href: "/contact",
        },
      ]

      const pathname = useLocation();
      const [selectedIndicator, setSelectedIndicator] = useState(pathname?.state);

  return (
    <motion.div 
      variants={menuSlide} 
      initial="initial" 
      animate="enter" 
      exit="exit" 
      className={'menu'}
      >
       <div className={'body'}>
            <div onMouseLeave={() => {setSelectedIndicator(pathname?.state)}} className={'nav'}>
                    <div className={'header'}>
                    {
                      navItems.map( (data, index) => {
                        return <NavOgLink key={index} 
                        data={{...data, index}} 
                        isActive={selectedIndicator == data.href} 
                        setSelectedIndicator={setSelectedIndicator}   />
                      })
                    }
                    </div>
 
            </div>
            
        </div>
        <Curve />
    </motion.div>
  )
}   

export default MobileNav