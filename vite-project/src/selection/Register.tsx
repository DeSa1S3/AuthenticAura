import { useState } from 'react'
import './Register.sass'
import logo from '../../public/logo_aura.png'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'
import { useNavigate } from 'react-router-dom'



function Register() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();
  return (
    <>  
    <Header/>
    <img className='Logo' src={logo} alt="" />
    <h3 className='title'>Регистрация в Authentic Aura</h3>
    <p className='text-about'>Одна учетная запись для всех приложений, чтобы все было немного проще</p>
    <input className='input-1' type="text" placeholder="Имя"/>
    <input className='input-2' type="text" placeholder="Фамилия"/>
    <input className='input-3' type="text" placeholder="Дата рождения"/>
    <input className='input-4' type="text" placeholder="Адрес электронной почты*"/>
    <input className='input-5' type="text" placeholder="Пароль*"/>
    <button className='btn'>ЗАРЕГИСТРИРОВАТЬСЯ</button>
    <p className='text'>У вас уже есть аккаунт? <p onClick={()=>(navigate('/ME'))} className='text-link'>Войти</p></p>
    <Footer/>
    </> 
    
  )
}


export default Register
