import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import User from './pages/User';
import Admin from './pages/Admin';
import Form from './pages/Form';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<User />} />
        <Route path='/admin/*' element={<Admin />} />
        <Route path='/createform' element={<Form/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;