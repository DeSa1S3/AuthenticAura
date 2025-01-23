import { useState } from 'react'
import './Leggings.sass'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'
import likeImg from '../../public/like_shop.png'
import L1 from '../../public/Leggings/L1.jpg'
import L2 from '../../public/Leggings/L2.jpg'
import L3 from '../../public/Leggings/L3.jpg'
import L4 from '../../public/Leggings/L4.jpg'
import L5 from '../../public/Leggings/L5.jpg'
import L6 from '../../public/Leggings/L6.jpg'
import L7 from '../../public/Leggings/L7.jpg'
import L8 from '../../public/Leggings/L8.jpg'




function Leggings() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <Header/>
    <p className='title'>Леггинсы</p>
    <p className='text'>Шагните в уверенность и почувствуйте себя готовыми достичь новых высот с нашими леггинсами для тренировок и спортзала. Наши леггинсы, улучшающие фигуру, отводящие пот и невероятно удобные, позволят вам чувствовать себя так же хорошо в дни отдыха, как и в спортзале. Выбирайте из нашего ассортимента цветов, стилей, покроев и линий талии и наслаждайтесь леггинсами для спортзала, которые обеспечивают поддержку и непринужденный стиль.</p>
    <div className="Leggings">
      <div className="Liggings-item-1">
        <img className='img-main' src={L1} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Бесшовные леггинсы Vital</p>
        <p className='text-2'>Чёрный мергель</p>
        <p className='text-3'>6500 рублей</p>
      </div>
      <div className="Liggings-item-1">
        <img className='img-main' src={L2} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Повседневные бесшовные леггинсы</p>
        <p className='text-2'>Коричневый</p>
        <p className='text-3'>5000 рублей</p>
      </div>
      <div className="Liggings-item-1">
        <img className='img-main' src={L3} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Бесшовные леггинсы Lift Contour</p>
        <p className='text-2'>Темно-синий </p>
        <p className='text-3'>7000 рублей</p>
      </div>
      <div className="Liggings-item-1">
        <img className='img-main' src={L4} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Повседневные бесшовные леггинсы</p>
        <p className='text-2'>Чёрный мегель</p>
        <p className='text-3'>5000 рублей</p>
      </div>
      <div className="Liggings-item-2">
        <img className='img-main' src={L5} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Бесшовные леггинсы Lift Contour</p>
        <p className='text-2'>Чёрный мергель</p>
        <p className='text-3'>7000 рублей</p>
      </div>
      <div className="Liggings-item-2">
        <img className='img-main' src={L6} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Повседневные бесшовные леггинсы</p>
        <p className='text-2'>Темно-синие</p>
        <p className='text-3'>5000 рублей</p>
      </div>
      <div className="Liggings-item-2">
        <img className='img-main' src={L7} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Бесшовные леггинсы Apex Limit</p>
        <p className='text-2'>Черный ДНУ</p>
        <p className='text-3'>4300 рублей</p>
      </div>
      <div className="Liggings-item-2">
        <img className='img-main' src={L8} alt="" />
        <img className='img-like' src={likeImg} alt="" />
        <p className='text-1'>Леггинсы Adapt Camo бесшовные ребристые</p>
        <p className='text-2'>Камуфляжные</p>
        <p className='text-3'>1800 рублей</p>
      </div>
    </div>
    
    <Footer/>
    </> 
  )
}


export default Leggings
