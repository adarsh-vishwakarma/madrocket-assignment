import React from 'react';
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom';
import Students from './components/Students'
import Dashboard from './components/Dashboard'

function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='student' element={<Students />} />
    </Routes>
  )
}

export default App
