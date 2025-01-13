import { useState } from 'react'
import './SweatshirtsM.sass'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'



function SweatshirtsM() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <Header/>
    
    <Footer/>
    </> 
  )
}


export default SweatshirtsM
