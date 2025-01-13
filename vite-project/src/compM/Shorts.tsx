import { useState } from 'react'
import './Shorts.sass'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'



function Shorts() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <Header/>
    
    <Footer/>
    </> 
  )
}


export default Shorts
