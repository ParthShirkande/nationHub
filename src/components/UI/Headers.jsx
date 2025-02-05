import { NavLink } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";


export const Headers=()=>{

    const [show, setShow] = useState(false);

    const handleButtonToggle = () => {
      return setShow(!show);
    };


    return(
        <header>
        <div className="header">
            <div className="navbar-grid">
            <div className="Logo">
            <NavLink to="/">
              <h1>NationHub</h1>
            </NavLink>            
           </div>

           <nav className={show ? "menu-mobile" : "menu-web"}>
           <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/country">Country</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
            </nav>

            <div className="ham-menu">
            <button onClick={handleButtonToggle}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
        </div>
        </header>
    )
}