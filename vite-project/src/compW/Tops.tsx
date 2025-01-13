import { useState } from 'react'
import './Tops.sass'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'



function Tops() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <Header/>
    
    <Footer/>
    </> 
  )
}


export default Tops
