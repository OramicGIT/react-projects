import React from 'react'
import Register from './pages/RegistrationPage.jsx'
import Todo from './pages/TodoListPage.jsx'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import './App.css'

const HomePage = () => {
  return (
  <div className='home-container'>
    <h1>REACT WEBTOYS 1.0</h1>
    <p>Pick your toy:</p>
    <div>
      <Link to="/register" className="nav-button">Register Simulator</Link>
      <Link to="/todo" className="nav-button">Your ToDo list</Link>
      <Link to="/products" className="nav-button">Product Filter</Link>
    </div>
  </div>
  )
};

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/todo' element={<Todo/>} />
          </Routes>
      </Router>
    </>
  )
}

export default App
