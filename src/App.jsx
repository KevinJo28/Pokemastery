/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import Blog from './pages/Blog'
import Regiones from './pages/Regiones'
import SimuladorDeCombate from './pages/SimuladorDeCombate'
import Pokemon from './pages/Pokemon'
import Comparar from './pages/Comparar'
import MiLista from './pages/MiLista'

import './App.css'
import { useState } from 'react'
import Blog1 from './blogs/Upcoming_Pokemon_Games_in_2025'
import Blog2 from './blogs/Pokemon_theories_2025'
import Blog3 from './blogs/Top_Pokemon_Favorites_by_Region'

import Alola from './Regions/Alola' 
import Kanto from './Regions/Kanto'
import Johto from './Regions/Johto' 
import Sinnoh from './Regions/Sinnoh' 
import Hoenn from './Regions/Hoenn'   
import Unova from './Regions/Unova' 
import Kalos from './Regions/Kalos' 
import Galar from './Regions/Galar' 
import Paldea from './Regions/Paldea' 
function App() {
  const [visiblePokemons, setVisiblePokemons] = useState([]); // Pokémon visibles
  
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path='Pokedex' element={<Pokedex visiblePokemons={visiblePokemons} setVisiblePokemons={setVisiblePokemons}/>}/>
            <Route path='Blog' element={<Blog/>}/>
            <Route path='Regions' element={<Regiones/>}/>
            <Route path='TeamBuilder' element={<SimuladorDeCombate/>}/>
            <Route path='Pokemon' element={<Pokemon/>}/>
            <Route path='Comparar' element={<Comparar/>}/>
            <Route path='MiLista' element={<MiLista/>}/>
            <Route path="Pokedex/Pokemon/:id" element={<Pokemon/>}/>
            <Route path="Blog/Upcoming_Pokemon_Games_in_2025" element={<Blog1/>}/>
            <Route path="Blog/Pokemon_theories_2025" element={<Blog2/>}/>
            <Route path="Blog/Top_Pokemon_Favorites_by_Region" element={<Blog3/>}/>
            <Route path="Regions/Alola" element={<Alola/>}/>
            <Route path="Regions/Kanto" element={<Kanto/>}/>
            <Route path="Regions/Johto" element={<Johto/>}/>
            <Route path="Regions/Hoenn" element={<Hoenn/>}/>
            <Route path="Regions/Unova" element={<Unova/>}/>
            <Route path="Regions/Kalos" element={<Kalos/>}/>
            <Route path="Regions/Galar" element={<Galar/>}/>
            <Route path="Regions/Paldea" element={<Paldea/>}/>
            <Route path="Regions/Sinnoh" element={<Sinnoh/>}/>
            



            
          </Route>
        </Routes>
       
      </BrowserRouter>
    </div>
  )
}

export default App
