import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Input from './components/Inputs/Input'
import Footer from './components/Footer/Footer'
import './app.css'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div id="Home">
        <Hero/>
      </div>
      <div id="Plan">
         <Input/>
      </div>
      <Footer/>
    </div>
  )
}

export default App