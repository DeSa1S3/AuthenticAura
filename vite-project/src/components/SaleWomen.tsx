import { useState, useEffect } from 'react'
import IMGSALEW_1 from '../../public/SaleWomen-img4.png'
import IMGSALEW_2 from '../../public/SaleWomen-img1.jpg'
import IMGSALEW_3 from '../../public/SaleWomen-img2.jpg'
import IMGSALEW_4 from '../../public/SaleWomen-img3.jpg'
import { useNavigate } from 'react-router-dom'

const SaleWomen: React.FC = () => {
const navigate = useNavigate();
return (<>
    <h2 className='SaleWomen_title'>МАГАЗИН РАСПРОДАЖА ЖЕНСКОЙ ОДЕЖДЫ</h2>
    <div className='SaleWomen-btn'>ПОСМОТРЕТЬ ПОЛНОСТЬЮ</div>
        <div className="SaleWomen">       
            <div className="SaleWomen-item">
                <img className='SaleWomen_Img' src={IMGSALEW_1} alt="" />  
                <div className='SaleWomen_Btn'>КУПИТЬ СЕЙЧАС</div>
            </div>
            <div className="SaleWomen-item">
                <img className='SaleWomen_Img' src={IMGSALEW_2} alt="" />
                <div className="SaleWomen-grad"></div>
                <p className="SaleWomen_Text">ЛЕГИНСЫ ОТ 4300р</p>
                <div className='SaleWomen_Btn' onClick={()=>(navigate('/Leggings'))}>КУПИТЬ СЕЙЧАС</div>
            </div>            
            <div className="SaleWomen-item">
                <img className='SaleWomen_Img' src={IMGSALEW_3} alt="" />
                <div className="SaleWomen-grad"></div>
                <p className="SaleWomen_Text">ТОП ОТ 2400р</p>
                <div className='SaleWomen_Btn' onClick={()=>(navigate('/Tops'))}>КУПИТЬ СЕЙЧАС</div>
            </div>
            <div className="SaleWomen-item">
                <img className='SaleWomen_Img' src={IMGSALEW_4} alt="" />
                <div className="SaleWomen-grad"></div>
                <p className="SaleWomen_Text">ШТАНЫ ОТ 2500р</p>
                <div className='SaleWomen_Btn' onClick={()=>(navigate('/TrousersWomen'))}>КУПИТЬ СЕЙЧАС</div>
            </div>
        </div>

</>)
}
export default SaleWomen
