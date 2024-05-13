import React from 'react'
import { Navbar } from './components/Navbar'
import Home from './components/Home'
import { About } from './components/About'
import Skills from './components/Skills'
import Contact from './components/contact'
export const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Contact/>
    </div>
  )
}




