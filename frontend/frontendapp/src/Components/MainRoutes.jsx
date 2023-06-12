import React from 'react'
import { Routes } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Post } from '../Pages/Post'
import { Signup } from '../Pages/Signup'
import { Login } from '../Pages/Login'

export const MainRoutes = () => {
  return (
    <div>
        <Routes path={"/"} element={<Home/>} ></Routes>
        <Routes path={"/posts"} element={<Post/>} ></Routes>
        <Routes path={"/signup"} element={<Signup/>} ></Routes>
        <Routes path={"/login"} element={<Login/>} ></Routes>
    </div>
  )
}
