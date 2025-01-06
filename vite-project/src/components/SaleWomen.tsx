import { useState, useEffect } from 'react'
import IMGSALEW_1 from '../../public/SaleWomen-img4.png'
import IMGSALEW_2 from '../../public/SaLeWomen-img1.jpg'
import IMGSALEW_3 from '../../public/SaleWomen-img2.jpg'
import IMGSALEW_4 from '../../public/SaleWomen-img3.jpg'

const SaleWomen: React.FC = () => {
return (<>
   <div className="SaleWomen">
                <h2 className='SaleWomen_title'>МАГАЗИН РАСПРОДАЖА ЖЕНСКОЙ ОДЕЖДЫ</h2>
            <a href=""><button className='SaleWomen-btn'>ПОСМОТРЕТЬ ПОЛНОСТЬЮ</button></a>
        <div className="SaleWomen_ImgTextBtn">
                <img className='SaleWomen_Img-1' src={IMGSALEW_1} alt="" />
            <a href=""> <button className='SaleWomen_Btn-1'>КУПИТЬ СЕЙЧАС</button></a>
                <img className='SaleWomen_Img-2' src={IMGSALEW_2} alt="" />
                <p className="SaleWomen_Text-2">ЛЕГИНСЫ ОТ 4300р</p>
            <a href=""><button className='SaleWomen_Btn-2'>КУПИТЬ СЕЙЧАС</button></a>
                <img className='SaleWomen_Img-3' src={IMGSALEW_3} alt="" />
                <p className="SaleWomen_Text-3">ТОП ОТ 2400р</p>
            <a href=""><button className='SaleWomen_Btn-3'>КУПИТЬ СЕЙЧАС</button></a>
                <img className='SaleWomen_Img-4' src={IMGSALEW_4} alt="" />
                <p className="SaleWomen_Text-4">ШТАНЫ ОТ 2500р</p>
            <a href=""><button className='SaleWomen_Btn-4'>КУПИТЬ СЕЙЧАС</button></a>
    </div>
  </div>

</>)
}
export default SaleWomen
