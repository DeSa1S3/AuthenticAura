import { useState } from 'react'
import './TShirts.sass'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'



function TShirt() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <Header/>
    
    <Footer/>
    </> 
  )
}


export default TShirt
