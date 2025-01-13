import { useState } from 'react'
import './Leggings.sass'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'



function Leggings() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <Header/>
    
    <Footer/>
    </> 
  )
}


export default Leggings
