import { useState } from 'react'
import './SweatshirtsM.sass'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'
import likeImg from '../../public/like_shop.png'
import S1 from '../../public/SweatsShotsM/S1.jpg'
import S2 from '../../public/SweatsShotsM/S2.jpg'
import S3 from '../../public/SweatsShotsM/S3.jpg'
import S4 from '../../public/SweatsShotsM/S4.jpg'
import S5 from '../../public/SweatsShotsM/S5.jpg'
import S6 from '../../public/SweatsShotsM/S6.jpg'
import S7 from '../../public/SweatsShotsM/S7.jpg'
import S8 from '../../public/SweatsShotsM/S8.jpg'


function SweatshirtsM() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <Header/>
    <p className='title'>Толстовки</p>
    <p className='text'>Приготовьтесь к идеальному сочетанию стиля и производительности с нашими женскими футболками для спортзала. Эти предметы гардероба созданы для того, чтобы вы чувствовали себя комфортно и чувствовали себя наилучшим образом. Независимо от того, потеете ли вы во время высокоинтенсивной интервальной тренировки, делаете повторения или наслаждаетесь выходным днем ​​с друзьями. </p>
    <div className="SweatshirtsM">
      <div className="SweatshirtsM-item-1">
        <img className='img-main' src={S1} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Фитнес-одежда 7-дюймовые шорты</p>
        <p className='text-2'>Черный мегель</p>
        <p className='text-3'>3500 рублей</p>
      </div>
      <div className="SweatshirtsM-item-1">
        <img className='img-main' src={S2} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Шорты для бега 2 в 1</p>
        <p className='text-2'>Единица Грин</p>
        <p className='text-3'>7000 рублей</p>
      </div>
      <div className="SweatshirtsM-item-1">
        <img className='img-main' src={S3} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Прибытие 5" шорты</p>
        <p className='text-2'>Черный мегель</p>
        <p className='text-3'>3000 рублей</p>
      </div>
      <div className="SweatshirtsM-item-1">
        <img className='img-main' src={S4} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Силовые и кондиционные шорты 7 дюймов</p>
        <p className='text-2'>Черный мегель</p>
        <p className='text-3'>1700 рублей</p>
      </div>
      <div className="SweatshirtsM-item-2">
        <img className='img-main' src={S5} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Прибытие 7" шорты</p>
        <p className='text-2'>Черный </p>
        <p className='text-3'>3000 рублей</p>
      </div>
      <div className="SweatshirtsM-item-2">
        <img className='img-main' src={S6} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Шорты Interlock Tech 6"</p>
        <p className='text-2'>Черный мегель</p>
        <p className='text-3'>1400 рублей</p>
      </div>
      <div className="SweatshirtsM-item-2">
        <img className='img-main' src={S7} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Шорты с графическим принтом для фитнеса</p>
        <p className='text-2'>Черный мегель</p>
        <p className='text-3'>1800 рублей</p>
      </div>
      <div className="SweatshirtsM-item-2">
        <img className='img-main' src={S8} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Шорты с подтяжкой Mesh 5"</p>
        <p className='text-2'>Черный мегель</p>
        <p className='text-3'>5000 рублей</p>
      </div>
    </div>
    <Footer/>
    </> 
  )
}


export default SweatshirtsM
