import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <main>
      <Navbar />
      <ItemListContainer greeting="Bienvenido a Juegos Arkham"/>
    </main>
  )
}

export default App
