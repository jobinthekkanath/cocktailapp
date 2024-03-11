import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import NavBar from '../Components/NavBar/NavBar'
import Home from '../Components/Home/Home'
import About from '../pages/About/About'
import SingleCocktailDetails from '../pages/CocktailDetails/SingleCocktailDetails'
import NoDataFound from '../pages/NoDataFound/NoDataFound'

function LayoutRoutes() {
  return (
    <Router>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/cocktailapp' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/cocktail/:id' element={<SingleCocktailDetails/>} />
            <Route path='/*' element={<NoDataFound/>} />
        </Routes>
    </Router>
  )
}

export default LayoutRoutes
