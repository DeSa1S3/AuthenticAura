import { useState, useEffect } from 'react'
import IMGKID_1 from '../../public/KidForTheCold_img4.jpg'
import IMGKID_2 from '../../public/KidForTheCold_img1.jpg'
import IMGKID_3 from '../../public/KidForTheCold_img2.jpg'
import IMGKID_4 from '../../public/KidForTheCold_img3.jpg'

const KidForTheCold: React.FC = () => {
return (<>
    <div className="KidForTheCold">
    <h2 className='KidForTheCold_title'>МАГАЗИН РАСПРОДАЖА МУЖСКОЙ ОДЕЖДЫ</h2>
    <a href=""><button className='KidForTheCold-btn'>ПОСМОТРЕТЬ ПОЛНОСТЬЮ</button></a>
    <div className="KidForTheCold_ImgTextBtn">
      <img className='KidForTheCold_Img-1' src={IMGKID_1} alt="" />
      <a href=""> <button className='KidForTheCold_Btn-1'>КУПИТЬ СЕЙЧАС</button></a>
      <img className='KidForTheCold_Img-2' src={IMGKID_2} alt="" />
      <p className="KidForTheCold_Text-2">БРЮКИ ОТ 2200р</p>
      <a href=""><button className='KidForTheCold_Btn-2'>КУПИТЬ СЕЙЧАС</button></a>
      <img className='KidForTheCold_Img-3' src={IMGKID_3} alt="" />
      <p className="KidForTheCold_Text-3">ФУТБОЛКИ ОТ 1400р</p>
      <a href=""><button className='KidForTheCold_Btn-3'>КУПИТЬ СЕЙЧАС</button></a>
      <img className='KidForTheCold_Img-4' src={IMGKID_4} alt="" />
      <p className="KidForTheCold_Text-4">ШОРТЫ ОТ 1200р</p>
      <a href=""><button className='KidForTheCold_Btn-4'>КУПИТЬ СЕЙЧАС</button></a>
    </div>
  </div>

</>)
}
export default KidForTheCold
