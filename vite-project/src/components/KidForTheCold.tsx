import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import IMGKID_1 from '../../public/KidForTheCold_img4.jpg'
import IMGKID_2 from '../../public/KidForTheCold_img1.jpg'
import IMGKID_3 from '../../public/KidForTheCold_img2.jpg'
import IMGKID_4 from '../../public/KidForTheCold_img3.jpg'

const KidForTheCold: React.FC = () => {
const navigate = useNavigate();
return (<>
        <h2 className='KidForTheCold_title'>МАГАЗИН РАСПРОДАЖА МУЖСКОЙ ОДЕЖДЫ</h2>
      <div className='KidForTheCold-btn'>ПОСМОТРЕТЬ ПОЛНОСТЬЮ</div>
    <div className="KidForTheCold">
      <div className="KidForTheCold-item">
        <img className='KidForTheCold_Img' src={IMGKID_1} alt="" />
        <div className='KidForTheCold_Btn'>КУПИТЬ СЕЙЧАС</div>
      </div>
       <div className="KidForTheCold-item">
        <img className='KidForTheCold_Img' src={IMGKID_2} alt="" />
        <div className="KidForTheCold-grad"></div>
        <p className="KidForTheCold_Text">БРЮКИ ОТ 2200р</p>
        <div className='KidForTheCold_Btn' onClick={()=>(navigate('/TrousersMen'))}>КУПИТЬ СЕЙЧАС</div>
      </div>
       <div className="KidForTheCold-item">  
        <img className='KidForTheCold_Img' src={IMGKID_3} alt="" />
        <div className="KidForTheCold-grad"></div>
        <p className="KidForTheCold_Text">ФУТБОЛКИ ОТ 1400р</p>
        <div className='KidForTheCold_Btn'onClick={()=>(navigate('/TShirt'))}>КУПИТЬ СЕЙЧАС</div>
      </div>
      <div className="KidForTheCold-item">
        <img className='KidForTheCold_Img' src={IMGKID_4} alt="" />
        <div className="KidForTheCold-grad"></div>
        <p className="KidForTheCold_Text">ШОРТЫ ОТ 1200р</p>
        <div className='KidForTheCold_Btn'onClick={()=>(navigate('/Shorts'))}>КУПИТЬ СЕЙЧАС</div>
      </div>
       
  </div>

</>)
}
export default KidForTheCold
