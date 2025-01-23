import { useState } from 'react'
import './TrousersMen.sass'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'
import likeImg from '../../public/like_shop.png'
import TS1 from '../../public/TrousersM/TS1.jpg'
import TS2 from '../../public/TrousersM/TS2.jpg'
import TS3 from '../../public/TrousersM/TS3.jpg'
import TS4 from '../../public/TrousersM/TS4.jpg'
import TS5 from '../../public/TrousersM/TS5.jpg'
import TS6 from '../../public/TrousersM/TS6.jpg'
import TS7 from '../../public/TrousersM/TS7.jpg'
import TS8 from '../../public/TrousersM/TS8.jpg'


function TrousersMen() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <Header/>
    <p className='title'>Штаны</p>
    <p className='text'>Приготовьтесь к идеальному сочетанию стиля и производительности с нашими женскими футболками для спортзала. Эти предметы гардероба созданы для того, чтобы вы чувствовали себя комфортно и чувствовали себя наилучшим образом. Независимо от того, потеете ли вы во время высокоинтенсивной интервальной тренировки, делаете повторения или наслаждаетесь выходным днем ​​с друзьями. </p>
    <div className="Trouser">
      <div className="Trouser-item-1">
        <img className='img-main' src={TS1} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Джоггеры с потертым рисунком</p>
        <p className='text-2'>Черно кислотный</p>
        <p className='text-3'>7500 рублей</p>
      </div>
      <div className="Trouser-item-1">
        <img className='img-main' src={TS2} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Брюки-карго Legacy премиум-класса</p>
        <p className='text-2'>Черный мегель</p>
        <p className='text-3'>7500 рублей</p>
      </div>
      <div className="Trouser-item-1">
        <img className='img-main' src={TS3} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Бегуны с мелом</p>
        <p className='text-2'>Черный мегель</p>
        <p className='text-3'>6000 рублей</p>
      </div>
      <div className="Trouser-item-1">
        <img className='img-main' src={TS4} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Эластичные тканые брюки-карго</p>
        <p className='text-2'>Черный мегель</p>
        <p className='text-3'>6000 рублей</p>
      </div>
      <div className="Trouser-item-2">
        <img className='img-main' src={TS5} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Крест Джоггеры</p>
        <p className='text-2'>Черный мегель</p>
        <p className='text-3'>5000 рублей</p>
      </div>
      <div className="Trouser-item-2">
        <img className='img-main' src={TS6} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Незаменимые свободные джоггеры</p>
        <p className='text-2'>Черный мегель</p>
        <p className='text-3'>5500 рублей</p>
      </div>
      <div className="Trouser-item-2">
        <img className='img-main' src={TS7} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Парашютные штаны</p>
        <p className='text-2'>Черный мегель</p>
        <p className='text-3'>9000 рублей</p>
      </div>
      <div className="Trouser-item-2">
        <img className='img-main' src={TS8} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Спортивные джоггеры</p>
        <p className='text-2'>Черный мегель</p>
        <p className='text-3'>5200 рублей</p>
      </div>
    </div>
    
    <Footer/>
    </> 
  )
}


export default TrousersMen
