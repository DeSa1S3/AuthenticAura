import { useState } from 'react'
import './Like.sass'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'
import { useNavigate } from 'react-router-dom'



function Like() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();
  return (
    <>  
    <Header/>

    <Footer/>
    </> 
    
  )
}


export default Like
