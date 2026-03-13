import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/wipro.png'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="logo" width="80" height="80" className="mx-3" />
          <span className="ms-2">BeBro🤟</span>
        </Link>

        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" end className={({isActive}) => 'nav-link' + (isActive? ' active' : '')}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/profile" className={({isActive}) => 'nav-link' + (isActive? ' active' : '')}>Profile</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className={({isActive}) => 'nav-link' + (isActive? ' active' : '')}>Contact Me</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
