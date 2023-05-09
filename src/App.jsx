import { Routes, Route } from 'react-router-dom'
import './App.css'

import NavBar from './components/NavBar/NavBar'

import StarshipList from './pages/StarshipList/StarshipList'
import StarshipPage from './pages/StarshipPage/StarshipPage'



function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<StarshipList />}/>
        <Route path='/:starshipId' element={<StarshipPage />}/>
      </Routes>
    </>
  )
}

export default App
