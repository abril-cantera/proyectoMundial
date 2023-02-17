import React from 'react'
import { NavLink } from "react-router-dom";
import './Menu.css'
import logoCatar from './img/fifa-world-cup-2022-logo-0E5F05028D-seeklogo.com.png'



export function Menu() {
  return (
    <header>
      <nav className="headerNav">
        <section className='navSectionImg'>
          <img src={logoCatar} alt="Logo Mundial en Catar 2022" />
        </section>
        <section className='navSection'>
          <ul className='ul'>
            {
              routes.map(route => {
                return (
                  <li className='items' key={route.to}>
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "#8d1c3d" : "black",
                        textDecoration: isActive ? "underline" : "none"
                      })}
                      to={route.to}
                    >
                      {route.text}
                    </NavLink>
                  </li>
                )
              })
            }
          </ul>
        </section>
      </nav>
    </header>
  )
}
const routes = [];
routes.push({
  to: "/",
  text: "Home",
  private: false
});
routes.push({
  to: "/selection",
  text: "Selection",
  private: false
});
routes.push({
  to: "/group",
  text: "Face",
  private: false
});
routes.push({
  to: "/match",
  text: "Match",
  private: false
});
