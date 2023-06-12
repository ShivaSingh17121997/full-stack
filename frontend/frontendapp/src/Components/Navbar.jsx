import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div style={{ display: "flex", justifyContent:"space-evenly" }} >
        <Link to={"/"} >Home</Link>
        <Link to={"/posts"} >Post</Link>
        <Link to={"/signup"} >Signup</Link>
        <Link to={"/login"} >Login</Link>

    </div>
  )
}
