import React from 'react'
import { NavLink } from "react-router-dom";
import './Menu.css'
import logoCatar from '../../img/fifa-world-cup-2022-logo-0E5F05028D-seeklogo.com.png'



export function Menu() {
  return (
    <header>
      <nav className="headerNav">
        <section className='navSectionImg'>
          <img src={logoCatar} alt="" />
        </section>
        <section className='navSectionButton'>
          <ul>
            {
              routes.map(route => {
                return (
                  <li key={route.to}>
                    <NavLink
                      style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
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
