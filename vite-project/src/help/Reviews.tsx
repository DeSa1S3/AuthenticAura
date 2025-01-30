import { useState } from 'react'
import './Reviews.sass'
import logo from '../../public/logo_aura.png'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'
import NextIMG from '../../public/next.png'
import MessageButton from '../scripts/MessageBTN.tsx'
import { useNavigate } from 'react-router-dom'



function Reviews() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();
  return (
    <>  
    <Header/>
      <h1 className='title-reviews'>Ваши отзывы</h1>
      <p className='text-reviews'>Ваши отзывы помогают улучшить нашу работу и сервис. Мы стараемся исправлять ошибки и недочеты которые вы нам пишите. Также мы боремся с мошениками.</p>
      <img className='img-reviews' src={NextIMG} alt="" />
      <MessageButton/>
      <ul className='contact-list'>
        <li className='contact-list_item'>
          <h2 className='contact-list_title'>Официальные запросы</h2>
          <p className='contact-list_text'>Для отправки или получения деловой документации</p>
          <a href="mailto:rozanovivan13@gmail.com">rozanovivan13@gmail.com</a>
        </li>
        <li className='contact-list_item'>
          <h2 className='contact-list_title'>Горячая линия тех.поддержки</h2>
          <p className='contact-list_text'>Для горячих звоноков 24/7</p>
          <a href="tel:+79178457777373">+79178457777373</a>
        </li>
        <li className='contact-list_item'>
          <h2 className='contact-list_title'>Юридический адрес</h2>
          <p className='contact-list_text'>г.Ульяновск, Ульяновская обл. ул.Андреяя Блаженого, д.3</p>
        </li>
      </ul>
      
    <Footer/>
    </> 
    
  )
}


export default Reviews
