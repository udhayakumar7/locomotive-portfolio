import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { AnimatePresence } from "framer-motion";
import MobileNav from "./MobileNav";

const Header = () => {
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = useLocation();
  const button = useRef(null);

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isActive]);

  const navgiations = [
    {
      label: "Work",
      url: "/",
    },
    {
      label: "About",
      url: "/",
    },
    {
      label: "Contact",
      url: "/",
    },
  ];

  const toggleMenu = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <>
      <div className="navbar-custom" ref={header}>
        <h4>
          {" "}
          <NavLink>Code by Kumar</NavLink>{" "}
        </h4>

        {/* <div className="menu-link">

           {navgiations.map((nav, index) => (
             <Link key={index} to={`/${nav.url}`}>{nav.label}</Link>
           ))}
         
           


        </div> */}

        <div className="mobile-menu-ham" ref={button} onClick={toggleMenu}>
          <div
            className={`ham-burger ${isActive == true ? "add-class" : ""}`}
          ></div>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <MobileNav />}</AnimatePresence>
    </>
  );
};

export default Header;
