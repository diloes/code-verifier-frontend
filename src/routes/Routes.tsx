import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import KataDetailPage from '../pages/KataDetailPage'
import KatasPage from '../pages/KatasPage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'

export const AppRoutes = () => {
  return (
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
  )
}