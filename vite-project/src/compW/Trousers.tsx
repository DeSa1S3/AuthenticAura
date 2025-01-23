import { useState } from 'react'
import './Trousers.sass'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'
import likeImg from '../../public/like_shop.png'
import T1IMG from '../../public/trousers/T1.jpg'
import T2IMG from '../../public/trousers/T2.jpg'
import T3IMG from '../../public/trousers/T3.jpg'
import T4IMG from '../../public/trousers/T4.jpg'
import T5IMG from '../../public/trousers/T5.jpg'
import T6IMG from '../../public/trousers/T6.jpg'
import T7IMG from '../../public/trousers/T7.jpg'
import T8IMG from '../../public/trousers/T8.jpg'


function Trousers() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <Header/>
    <p className='title'>Штаны</p>
    <p className='text'>Приготовьтесь к идеальному сочетанию стиля и производительности с нашими женскими футболками для спортзала. Эти предметы гардероба созданы для того, чтобы вы чувствовали себя комфортно и чувствовали себя наилучшим образом. Независимо от того, потеете ли вы во время высокоинтенсивной интервальной тренировки, делаете повторения или наслаждаетесь выходным днем ​​с друзьями. </p>
    <div className="Trouser">
      <div className="Trouser-item-1">
        <img className='img-main' src={T1IMG} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>GS x Leana Deeb свободные джоггеры</p>
        <p className='text-2'>Полуночно-синий</p>
        <p className='text-3'>7000 рублей</p>
      </div>
      <div className="Trouser-item-1">
        <img className='img-main' src={T2IMG} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Тренировочные флисовые джоггеры</p>
        <p className='text-2'>Светло-серый мергель  </p>
        <p className='text-3'>5000 рублей</p>
      </div>
      <div className="Trouser-item-1">
        <img className='img-main' src={T3IMG} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Джоггеры Power Washed</p>
        <p className='text-2'>Глубокий фиолетовый</p>
        <p className='text-3'>7000 рублей</p>
      </div>
      <div className="Trouser-item-1">
        <img className='img-main' src={T4IMG} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>GS x Leana Deeb Тренировочные джоггеры</p>
        <p className='text-2'>Черный мегель</p>
        <p className='text-3'>6000 рублей</p>
      </div>
      <div className="Trouser-item-2">
        <img className='img-main' src={T5IMG} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Хлопковые брюки-карго</p>
        <p className='text-2'>Черный мегель</p>
        <p className='text-3'>6500 рублей</p>
      </div>
      <div className="Trouser-item-2">
        <img className='img-main' src={T6IMG} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Спортивная бесшовная укороченная майка</p>
        <p className='text-2'>Пастельно-голубой</p>
        <p className='text-3'>3800 рублей</p>
      </div>
      <div className="Trouser-item-2">
        <img className='img-main' src={T7IMG} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Топ с лямкой через шею и полочкой</p>
        <p className='text-2'>Белый</p>
        <p className='text-3'>3500 рублей</p>
      </div>
      <div className="Trouser-item-2">
        <img className='img-main' src={T8IMG} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Укороченный топ Vital Seamless 2.0</p>
        <p className='text-2'>Черный мегель</p>
        <p className='text-3'>5000 рублей</p>
      </div>
    </div>
    
    <Footer/>
    </> 
  )
}


export default Trousers
