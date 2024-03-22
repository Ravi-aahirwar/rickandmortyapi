import React from 'react'
import "../App.css"
import { NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
      <div className='nav-bar'>
            <NavLink to="/" className='active' > <li> Home </li> </NavLink>
            <NavLink to="/wishlist" className='active' > <li> WishList </li> </NavLink>
      </div>
    </div>
  )
}
