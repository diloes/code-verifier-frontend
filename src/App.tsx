import React from 'react'
import './App.css'

// React Router DOM imports
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom'

// Pages
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import KatasPage from './pages/KatasPage'
import KataDetailPage from './pages/KataDetailPage'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/register'>Register</Link></li>
            <li><Link to='/katas'>Katas</Link></li>
          </ul>
        </nav> 

        {/* TODO: Export to routes folder */}
        <Routes>
          {/* Routes definition */}
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/katas' element={<KatasPage />} />
          <Route path='/katas/:id' element={<KataDetailPage />} />

          {/* Redirection when page not found */}
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
