import { useState } from 'react'
import './App.sass'
import Header from './components/Header.tsx'
import Presentation from './components/Presentation.tsx'
import KidForTheCold from './components/KidForTheCold.tsx'
import SaleWomen from './components/SaleWomen.tsx'
import PopularKatalog from './components/PopularKatalog.tsx'
import BestPresentation from './components/BestPresentation.tsx'
import ShortsList from './components/ShortsList.tsx'
import AboutMen from './components/AboutMen.tsx'
import Footer from './components/Footer.tsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <Header/>
    <Presentation/>
    <KidForTheCold/>
    <SaleWomen/>
    <PopularKatalog/>
    <BestPresentation/>
    <ShortsList/> 
    <AboutMen/>
    <Footer/>
    </> 
  )
}


export default App
