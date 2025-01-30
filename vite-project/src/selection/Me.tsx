import { useState, useEffect } from 'react'
import axios from 'axios';
import './Me.sass'
import Header from '../components/Header.tsx'
import logo from '../../public/logo_aura.png'
import Footer from '../components/Footer.tsx'
import useMeAuthVar from '../vars/meAuthVar.ts'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import { handleAPI_Me, LoginBackgrounded } from '../scripts/LoginBackground.ts';

interface parametersMe {
  email: string,
  password: string
}

function Me() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();

  const { meAuthGet, meAuthSet } = useMeAuthVar();

  const [emailInput, SetEmailInput] = useState<string>("");
  const [passwordInput, SetPasswordInput] = useState<string>("");

  //Кнопка входа
  const [meClicked, setMeClicked] = useState<boolean>(false);

  const handleCheckAPI = async () => {
      //Записываем и собираем interface из инпутов
      var toApi: parametersMe = { 
        email: emailInput, 
        password: passwordInput 
      } 

      //Запрос на бекенд
      if (await handleAPI_Me(toApi)) {
        meAuthSet(true)

        Cookies.set('email', toApi.email, { expires: 5 })
        Cookies.set('password', toApi.password, { expires: 5 })
      }
      else {

        // const emailCookied: string = Cookies.get('email') as string
        // const passCookied: string = Cookies.get('password') as string

        // if (emailCookied !== undefined) 
        //   Cookies.remove('email')

        // if (passCookied !== undefined) 
        //   Cookies.remove('password')

        meAuthSet(false)
      }
  }

  //На каждую страницу 
  const LoginBackgroundedFunc = async () => {

    if (await LoginBackgrounded()) {
      meAuthSet(true)
    }
    else {
      meAuthSet(false)
    }

  }

  useEffect(()=>{
    LoginBackgroundedFunc()
  },[])

  useEffect(()=>{
    if (meClicked) {
     
      handleCheckAPI()
      //Выключаем нажатую клавишу
      setMeClicked(false)
    }
  }, [meClicked])

  useEffect(()=>{
    if (meAuthGet) {
      navigate("/profile")
    }
  }, [meAuthGet])

  const OutputContent = () => {
    if (!meAuthGet) {
      return (<>
        <img className='Logo' src={logo} alt="" />
        <h3 className='title'>Вход в Authentic Aura</h3>
        <p className='text-about'>Выбирайте понравившиеся вам модели, сохраняйте лучшие варианты в списке желаний, отслеживайте заказы и тренируйтесь вместе с нами.</p>
        <input className='input-1' type="text" value={emailInput} onChange={(e) => SetEmailInput(e.target.value)} placeholder="Адрес электронной почты*"/>
        <br />
        <input className='input-2' value={passwordInput} onChange={(e) => SetPasswordInput(e.target.value)} type="password" placeholder="Пароль*"/>
        <button className='btn' onClick={()=>setMeClicked(true)}>АВТОРИЗОВАТЬСЯ</button>
        <p className='text-2'>Нет аккаунта? <p onClick={()=>(navigate('/Register'))} className='text-link'>Зарегистрируйтесь</p></p>
      </>)
    }
    else {
      return (<>
         <img className='Logo' src={logo} alt="" />
         <h3 className='title'>Вы уже вошли!</h3>
      </>)
    }
  }
  
  return (
    <>  
    <Header/>
    {OutputContent()}
    <Footer/>
    </> 
    
  )
}


export default Me
