import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Careers from './pages/Careers'
import Events from './pages/Events'
import Articles from './pages/Articles'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element= {<HomePage />}/>
        <Route path="/careers" element= {<Careers/>} />
        <Route path="/events" element= {<Events />}/>
        <Route path="/articles" element= {<Articles />} />
        <Route path="/login" element= {<Login />}/>
        <Route path="/signup" element= {<Signup />}/>
      </Routes>
    </>
  )
}

export default App
