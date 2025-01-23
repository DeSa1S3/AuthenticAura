import { useState } from 'react'
import './Support.sass'
import logo from '../../public/logo_aura.png'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'
import { useNavigate } from 'react-router-dom'



function Support() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();
  return (
    <>  
    <Header/>
    
    <Footer/>
    </> 
    
  )
}


export default Support
