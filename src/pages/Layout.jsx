
import { Link, Outlet,useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import Hamburger from "../components/Hamburger";
import LayoutMobile from "../components/LayoutMobile";
import { useState } from "react";

export default function Layout() {
  const [isChecked, setIsChecked] = useState(false);

  
  return (
    <>
      <nav className="nav">
        <ul className="ul">
        <FaUserCircle className="user" />
        
        <Hamburger setIsChecked={setIsChecked} isChecked={isChecked}/>
        {isChecked ? <LayoutMobile className="active"/> : null}
          <li>
           <Link to="/" className={useLocation().pathname === "/" ? "active-li" : "no-active-li"}>Home</Link>
          </li>
          <li className="pokedex">
            <Link to="/Pokedex" className={useLocation().pathname === "/Pokedex" ? "active-li pokedex" : "no-active-li pokedex"}>Pokedex ⬇</Link>
          </li>
          <div className="container-childMenu">
              <li>
                <Link to="/Comparar" className={useLocation().pathname === "/Comparar" ? "active-li child" : "no-active-li child"}>Comparar</Link>   
              </li>
              <li>
              <Link to="/MiLista" className={useLocation().pathname === "/MiLista" ? "active-li child" : "no-active-li child"}>Mi Lista</Link>   
              </li>
          </div>
          <li className="blogLi">
            <Link to="/Blog" className={useLocation().pathname === "/Blog" ? "active-li" : "no-active-li"}>Blog</Link>
          </li>
          <div className="line"></div>
          <li>
            <Link to="/Regiones" className={useLocation().pathname === "/Regiones" ? "active-li" : "no-active-li"}>Regions</Link>
          </li>
          <li>
            <Link to="/SimuladorDeCombate" className={useLocation().pathname === "/SimuladorDeCombate" ? "active-li" : "no-active-li"}>Team Builder</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}


    