import { useState } from 'react'
import './Me.sass'
import Header from '../components/Header.tsx'
import logo from '../../public/logo_aura.png'
import Footer from '../components/Footer.tsx'
import { useNavigate } from 'react-router-dom'



function Me() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();
  return (
    <>  
    <Header/>
    <img className='Logo' src={logo} alt="" />
    <h3 className='title'>Вход в Authentic Aura</h3>
    <p className='text-about'>Выбирайте понравившиеся вам модели, сохраняйте лучшие варианты в списке желаний, отслеживайте заказы и тренируйтесь вместе с нами.</p>
    <input className='input-1' type="text" placeholder="Адрес электронной почты*"/>
    <br />
    <input className='input-2' type="password" placeholder="Пароль*"/>
    <p className='text-1'>Забыли пароль?</p>
    <button className='btn'>АВТОРИЗОВАТЬСЯ</button>
    <p className='text-2'>Нет аккаунта? <p onClick={()=>(navigate('/Register'))} className='text-link'>Зарегистрируйтесь</p></p>
    <Footer/>
    </> 
    
  )
}


export default Me
