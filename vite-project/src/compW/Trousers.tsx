import { useState } from 'react'
import './Trousers.sass'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'



function Trousers() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <Header/>
    
    <Footer/>
    </> 
  )
}


export default Trousers
