import { useState } from 'react'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import './App.css'

function App() {


  return (
    <>
    <Navbar />
 <div className="flex items-center justify-center"><span className="self-center text-7xl font-semibold whitespace-nowrap dark:text-white">Full Stack Web Developer</span></div>
    <Footer />
    </>
  )
}

export default App
