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
    <div className="Like">
      <h1 className='title'>Сохранить в списке желаний</h1>
      <p className='text'>Вы когда-нибудь хотели сохранить все свои любимые модели и аксессуары в одном месте, чтобы вернуться к ним позже? Почти как ✨список желаний ✨.</p>
      <button className='btn-1'  onClick={()=>(navigate('/Register'))}>Зарегистрироваться</button>
      <button className='btn-2'  onClick={()=>(navigate('/Me'))}>Авторизоваться</button>
    </div>
    <Footer/>
    </> 
    
  )
}


export default Like
