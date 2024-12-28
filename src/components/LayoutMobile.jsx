import { Link, useLocation } from "react-router-dom";
export default function LayoutMobile() {

  return (
    <>
      <div className="mobile">
        <ul className="ulMobile">
          <li>
            <Link
              to="/"
              className={
                useLocation().pathname === "/" ? "active-li" : "no-active-li"
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Pokedex"
              className={
                useLocation().pathname === "/Pokedex"
                  ? "active-li pokedex"
                  : "no-active-li pokedex"
              }
            >
              Pokedex ⬇
            </Link>
          </li>
          <li>
            <Link
              to="/Blog"
              className={
                useLocation().pathname === "/Blog"
                  ? "active-li"
                  : "no-active-li"
              }
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/Regiones"
              className={
                useLocation().pathname === "/Regiones"
                  ? "active-li"
                  : "no-active-li"
              }
            >
              Regiones
            </Link>
          </li>
          <li>
            <Link
              to="/SimuladorDeCombate"
              className={
                useLocation().pathname === "/SimuladorDeCombate"
                  ? "active-li"
                  : "no-active-li"
              }
            >
              Simulador De Combate
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}


