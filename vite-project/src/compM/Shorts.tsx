import { useState } from 'react'
import './Shorts.sass'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'
import likeImg from '../../public/like_shop.png'
import S1 from '../../public/Shorts/S1.jpg'
import S2 from '../../public/Shorts/S2.jpg'
import S3 from '../../public/Shorts/S3.jpg'
import S4 from '../../public/Shorts/S4.jpg'
import S5 from '../../public/Shorts/S5.jpg'
import S6 from '../../public/Shorts/S6.jpg'
import S7 from '../../public/Shorts/S7.jpg'
import S8 from '../../public/Shorts/S8.jpg'


function Shorts() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <Header/>
    <p className='title'>Шорты</p>
    <p className='text'>Приготовьтесь к идеальному сочетанию стиля и производительности с нашими женскими футболками для спортзала. Эти предметы гардероба созданы для того, чтобы вы чувствовали себя комфортно и чувствовали себя наилучшим образом. Независимо от того, потеете ли вы во время высокоинтенсивной интервальной тренировки, делаете повторения или наслаждаетесь выходным днем ​​с друзьями. </p>
    <div className="Shorts">
      <div className="Shorts-item-1">
        <img className='img-main' src={S1} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Толстовка с капюшоном Crest</p>
        <p className='text-2'>Черный мегель</p>
        <p className='text-3'>5000 рублей</p>
      </div>
      <div className="Shorts-item-1">
        <img className='img-main' src={S2} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Многослойная толстовка с капюшоном на молнии</p>
        <p className='text-2'>Черный мегель</p>
        <p className='text-3'>1100 рублей</p>
      </div>
      <div className="Shorts-item-1">
        <img className='img-main' src={S3} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Толстовка с капюшоном Strength Department Animal Oversize</p>
        <p className='text-2'>Черный мегель</p>
        <p className='text-3'>10000 рублей</p>
      </div>
      <div className="Shorts-item-1">
        <img className='img-main' src={S4} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Толстовка с капюшоном Collegiate</p>
        <p className='text-2'>Черный мегель</p>
        <p className='text-3'>8000 рублей</p>
      </div>
      <div className="Shorts-item-2">
        <img className='img-main' src={S5} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Премиум-толстовка Legacy</p>
        <p className='text-2'>Черный </p>
        <p className='text-3'>7600 рублей</p>
      </div>
      <div className="Shorts-item-2">
        <img className='img-main' src={S6} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Премиум-толстовка Legacy</p>
        <p className='text-2'>Камуфляж Коричневый</p>
        <p className='text-3'>8000 рублей</p>
      </div>
      <div className="Shorts-item-2">
        <img className='img-main' src={S7} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Толстовка с капюшоном из толстой ткани в рубчик</p>
        <p className='text-2'>Джинсовый серый</p>
        <p className='text-3'>7600 рублей</p>
      </div>
      <div className="Shorts-item-2">
        <img className='img-main' src={S8} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Толстовка с капюшоном из толстой ткани в рубчик</p>
        <p className='text-2'>Асфальт серый</p>
        <p className='text-3'>7600 рублей</p>
      </div>
    </div>
    <Footer/>
    </> 
  )
}


export default Shorts
