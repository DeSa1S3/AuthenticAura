import { useState, useEffect } from 'react'
import axios from 'axios';
import './Register.sass'
import logo from '../../public/logo_aura.png'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'
import { useNavigate } from 'react-router-dom'

interface parametersRegister {
  firstName: string,
  lastName: string,
  dateOfBirth: string,
  email: string,
  password: string
}



const handleAPI_Register = async (params: parametersRegister) => {
  try {
    const response = await axios.post('http://localhost:8013/api/Auth/Register', params)

    if (response.status === 200) {
      console.log("Успешная регистрация")
      return
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.log(`Ошибка: ${error.response.status} | ${error.response.data}`);
      }
    }
  }
}

const Register: React.FC = () => {
  const navigate = useNavigate();
  
  //Инпуты
  const [nameInput, SetNameInput] = useState<string>("");
  const [lastNameInput, SetLastNameInput] = useState<string>("");
  const [dateBirthInput, SetDateBirthInput] = useState<string>("");
  const [emailInput, SetEmailInput] = useState<string>("");
  const [passwordInput, SetPasswordInput] = useState<string>("");

  //Кнопка регистрации
  const [registerClicked, setRegisterClicked] = useState<boolean>(false);

  useEffect(()=>{
    if (registerClicked) {
      //Записываем и собираем interface из инпутов
      var toApi: parametersRegister = { 
        firstName: nameInput, 
        lastName: lastNameInput, 
        dateOfBirth: dateBirthInput, 
        email: emailInput, 
        password: passwordInput 
      } 

      //Запрос на бекенд
      handleAPI_Register(toApi)

      //Выключаем нажатую клавишу
      setRegisterClicked(false)
    }
  }, [registerClicked])

  return (
    <>  
    <Header/>
    <img className='Logo' src={logo} alt="" />
    <h3 className='title'>Регистрация в Authentic Aura</h3>
    <p className='text-about'>Одна учетная запись для всех приложений, чтобы все было немного проще</p>
    <input className='input-1' type="text" value={nameInput} onChange={(e) => SetNameInput(e.target.value)} placeholder="Имя"/>
    <input className='input-2' type="text" value={lastNameInput} onChange={(e) => SetLastNameInput(e.target.value)} placeholder="Фамилия"/>
    <input className='input-3' type="text" value={dateBirthInput} onChange={(e) => SetDateBirthInput(e.target.value)} placeholder="Дата рождения"/>
    <input className='input-4' type="text" value={emailInput} onChange={(e) => SetEmailInput(e.target.value)} placeholder="Адрес электронной почты*"/>
    <input className='input-5' type="password" value={passwordInput} onChange={(e) => SetPasswordInput(e.target.value)} placeholder="Пароль*"/>
    <button className='btn' onClick={()=>setRegisterClicked(true)}>ЗАРЕГИСТРИРОВАТЬСЯ</button>
    <p className='text-reg'>У вас уже есть аккаунт? <p onClick={()=>(navigate('/ME'))} className='text-link-reg'>Войти</p></p>
    <Footer/>
    </> 
    
  )
}


export default Register
