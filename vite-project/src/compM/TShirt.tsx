import { useState } from 'react'
import './TShirts.sass'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'
import likeImg from '../../public/like_shop.png'
import TS1 from '../../public/TShirts/TS1.jpg'
import TS2 from '../../public/TShirts/TS2.jpg'
import TS3 from '../../public/TShirts/TS3.jpg'
import TS4 from '../../public/TShirts/TS4.jpg'
import TS5 from '../../public/TShirts/TS5.jpg'
import TS6 from '../../public/TShirts/TS6.jpg'
import TS7 from '../../public/TShirts/TS7.jpg'
import TS8 from '../../public/TShirts/TS8.jpg'


function TShirt() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <Header/>
    <p className='title'>Футболки</p>
    <p className='text'>Приготовьтесь к идеальному сочетанию стиля и производительности с нашими женскими футболками для спортзала. Эти предметы гардероба созданы для того, чтобы вы чувствовали себя комфортно и чувствовали себя наилучшим образом. Независимо от того, потеете ли вы во время высокоинтенсивной интервальной тренировки, делаете повторения или наслаждаетесь выходным днем ​​с друзьями. </p>
    <div className="TShirt">
      <div className="TShirt-item-1">
        <img className='img-main' src={TS1} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Футболка Power</p>
        <p className='text-2'>Черный мегель</p>
        <p className='text-3'>4000 рублей</p>
      </div>
      <div className="TShirt-item-1">
        <img className='img-main' src={TS2} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Футболка Arrival Regular Fit</p>
        <p className='text-2'>Черный мегель</p>
        <p className='text-3'>2500 рублей</p>
      </div>
      <div className="TShirt-item-1">
        <img className='img-main' src={TS3} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Футболка Arrival Regular Fit</p>
        <p className='text-2'>Белый</p>
        <p className='text-3'>2500 рублей</p>
      </div>
      <div className="TShirt-item-1">
        <img className='img-main' src={TS4} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Футболка «Прибытие»</p>
        <p className='text-2'>Черный мегель</p>
        <p className='text-3'>2500 рублей</p>
      </div>
      <div className="TShirt-item-2">
        <img className='img-main' src={TS5} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Футболка Element Baselayer с длинным рукавом</p>
        <p className='text-2'>Белый</p>
        <p className='text-3'>3000 рублей</p>
      </div>
      <div className="TShirt-item-2">
        <img className='img-main' src={TS6} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Футболка большого размера с графическим принтом GS66</p>
        <p className='text-2'>Черный мегель</p>
        <p className='text-3'>3500 рублей</p>
      </div>
      <div className="TShirt-item-2">
        <img className='img-main' src={TS7} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Футболка Power</p>
        <p className='text-2'>Военно-морской</p>
        <p className='text-3'>4000 рублей</p>
      </div>
      <div className="TShirt-item-2">
        <img className='img-main' src={TS8} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Футболка оверсайз Essential</p>
        <p className='text-2'>Черный мегель</p>
        <p className='text-3'>3500 рублей</p>
      </div>
    </div>
    
    <Footer/>
    </> 
  )
}


export default TShirt
