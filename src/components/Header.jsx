import { NavLink } from "react-router-dom"


const Header = () => {
  return (
    <>
     <div className="navbar-custom">
        <h4> <NavLink>Code by Kumar</NavLink> </h4>

        <div className="menu-link">

          <a href="">Work</a>
          <a href="">About</a>
          <a href="">Contact</a>

        </div>

     </div>
     </>
  )
}

export default Header