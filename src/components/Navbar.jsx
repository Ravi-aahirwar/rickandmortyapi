import React from 'react'
import "../App.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'
import { useWishListContext } from '../context/WishListContext'

export default function Navbar() {
  let userImg = "https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
  const { user, logOut } = useAuthContext()
  const navigate = useNavigate()

  const { favourite_cards } = useWishListContext()


  const handleLogout = () => {
    logOut();
    alert("User Logged out!")
    navigate("/")
  }

  return (
    <div>
      <div className='nav-bar'>
        <NavLink to="/" className='active' > <li> Home </li> </NavLink>
        <NavLink to="/wishlist" className='active' > <li> WishList <span style={{color:"darkblue", fontWeight:"bolder"}} >{favourite_cards.length}</span> </li></NavLink>
        <div className='user-img'>
          {user ? (
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <img src={user.photoURL ? user.photoURL : userImg} alt="user" />
              <span>
                {user.displayName ? (
                  user.displayName.length >= 7 ? `${user.displayName.substring(0, 7)}..` : user.displayName
                ) : (
                  "Name"
                )}
              </span>
            </div>
          ) : (
            <img src={userImg} alt="Dummy user" />
          )}
          {user ? (
            <p onClick={handleLogout}> LogOut </p>
          ) : (
            <NavLink to="/login" className='active' > <li> Login </li> </NavLink>
          )}
        </div>
      </div>
    </div>
  )
}
