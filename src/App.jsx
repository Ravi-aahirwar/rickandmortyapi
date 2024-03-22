import React from 'react'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import CharacterDetail from './pages/CharacterDetail'
import WishList from './pages/WishList'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div>
      <Router>
        <div> <Navbar/> </div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/character/:id' element={<CharacterDetail/>} />
          <Route path='/wishlist' element={<WishList/>} />
        </Routes>
      </Router>
    </div>
  )
}
