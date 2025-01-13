import { useState } from 'react'
import './TrousersMen.sass'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'



function TrousersMen() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <Header/>
    
    <Footer/>
    </> 
  )
}


export default TrousersMen
