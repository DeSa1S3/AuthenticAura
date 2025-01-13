import { useState } from 'react'
import './SweatshirtsW.sass'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'



function SweatshirtsW() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <Header/>
    
    <Footer/>
    </> 
  )
}


export default SweatshirtsW
