import { useState } from 'react'
import Header from './components/Header.tsx'
import Presentation from './components/Presentation.tsx'
import KidForTheCold from './components/KidForTheCold.tsx'
import SaleWomen from './components/SaleWomen.tsx'
import PopularKatalog from './components/PopularKatalog.tsx'


import './App.sass'
import BestPresentation from './components/BestPresentation.tsx'



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
 
    </> 
  )
}


export default App
