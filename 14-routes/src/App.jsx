import React from 'react'
import {BrowseRouter as Router, Route, Routes, Link} from 'react-router-dom'
import './App.css'

const HomePage = () => (
  <div className='home-container'>
    <h1>Task 1. Page render</h1>
    <p>Pick your poiso- i meant page. FOR FREE!</p>
    <div>
      <Link to="/register">Register</Link>
      <link to="/todo">Things to do</link>
      <link to="/products">Product Filter</link>
    </div>
  </div>
);

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path='/' element={<HomePage/>} />
          </Routes>
      </Router>
    </>
  )
}

export default App
