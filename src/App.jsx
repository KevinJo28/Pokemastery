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
import Blog1 from './blogs/Proximos_juegos_de_Pokemon_2025'


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
            <Route path='Regiones' element={<Regiones/>}/>
            <Route path='SimuladorDeCombate' element={<SimuladorDeCombate/>}/>
            <Route path='Pokemon' element={<Pokemon/>}/>
            <Route path='Comparar' element={<Comparar/>}/>
            <Route path='MiLista' element={<MiLista/>}/>
            <Route path="Pokedex/Pokemon/:id" element={<Pokemon/>}/>
            <Route path="Blog/Proximos_juegos_de_Pokemon_2025" element={<Blog1/>}/>

            
          </Route>
        </Routes>
       
      </BrowserRouter>
    </div>
  )
}

export default App
