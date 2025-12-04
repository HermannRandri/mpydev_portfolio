import { useState } from 'react'
import  {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './page/home'
import './App.css'

function App() {
  const route = createBrowserRouter([
    {
      path:'/',
      element: <Home />
    },
  ])
 
  return (
    <>
      <RouterProvider  router ={route}/>
    </>
  )
}

export default App
