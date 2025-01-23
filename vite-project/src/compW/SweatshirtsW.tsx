import { useState } from 'react'
import './SweatshirtsW.sass'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'
import likeImg from '../../public/like_shop.png'
import S1IMG from '../../public/Sweatshots/S1.jpg'
import S2IMG from '../../public/Sweatshots/S2.jpg'
import S3IMG from '../../public/Sweatshots/S3.jpg'
import S4IMG from '../../public/Sweatshots/S4.jpg'
import S5IMG from '../../public/Sweatshots/S5.jpg'
import S6IMG from '../../public/Sweatshots/S6.jpg'
import S7IMG from '../../public/Sweatshots/S7.jpg'
import S8IMG from '../../public/Sweatshots/S8.jpg'





function SweatshirtsW() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <Header/>
    <p className='title'>Толстовки</p>
    <p className='text'>Приготовьтесь к стильной тренировке с нашими женскими толстовками для спортзала. Наши женские толстовки, созданные для комфорта и моды, станут вашими идеальными спутниками для прохладного утра в спортзале или уютных вечеров дома. Поднимите свой активный гардероб с помощью нашей коллекции, которая сочетает в себе тепло, стиль и производительность. </p>
    <div className="SweatshirtsW">
      <div className="SweatshirtsW-item-1">
        <img className='img-main' src={S1IMG} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Толстовка с капюшоном</p>
        <p className='text-2'>Чёрный мергель</p>
        <p className='text-3'>4800 рублей</p>
      </div>
      <div className="SweatshirtsW-item-1">
        <img className='img-main' src={S2IMG} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Толстовка с капюшоном на день отдыха</p>
        <p className='text-2'>Блю Марк</p>
        <p className='text-3'>6000 рублей</p>
      </div>
      <div className="SweatshirtsW-item-1">
        <img className='img-main' src={S3IMG} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Толстовка Power Oversize</p>
        <p className='text-2'>Глубокий фиолетовый</p>
        <p className='text-3'>7500 рублей</p>
      </div>
      <div className="SweatshirtsW-item-1">
        <img className='img-main' src={S4IMG} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Everywear Расслабленная толстовка</p>
        <p className='text-2'>Чёрный мегель</p>
        <p className='text-3'>10000 рублей</p>
      </div>
      <div className="SweatshirtsW-item-2">
        <img className='img-main' src={S5IMG} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Everywear Укороченная толстовка</p>
        <p className='text-2'>Обычная посадка</p>
        <p className='text-3'>11000 рублей</p>
      </div>
      <div className="SweatshirtsW-item-2">
        <img className='img-main' src={S6IMG} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Толстовка свободного покроя</p>
        <p className='text-2'>Темно-синие</p>
        <p className='text-3'>5000 рублей</p>
      </div>
      <div className="SweatshirtsW-item-2">
        <img className='img-main' src={S7IMG} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Толстовка с капюшоном Graphic</p>
        <p className='text-2'>Черный мегель</p>
        <p className='text-3'>5500 рублей</p>
      </div>
      <div className="SweatshirtsW-item-2">
        <img className='img-main' src={S8IMG} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Everywear Укороченная толстовка</p>
        <p className='text-2'>Глубокий бежевый</p>
        <p className='text-3'>11000 рублей</p>
      </div>
    </div>

    <Footer/>
    </> 
  )
}


export default SweatshirtsW
