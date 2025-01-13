import { useState } from 'react'
import './Shop.sass'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'
import { useNavigate } from 'react-router-dom'



function Shop() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();
  return (
    <>  
    <Header/>

    <Footer/>
    </> 
    
  )
}


export default Shop
