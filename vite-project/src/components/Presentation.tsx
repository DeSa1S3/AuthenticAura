import { useState, useEffect } from 'react'
import IMGPresentation from '../../public/colections.jpg'


const Presentation: React.FC = () => {
return (<>
    <div className="PresentationOfTheCollection">   

        <img src={IMGPresentation} alt="" className='IMGPresentation'/>
        <h3 className='Presentation-minititle'>ЗИМНЯЯ РАСПРОДАЖА СКИДКИ ДО 60%</h3>
        <p className='Presentation-text'>Приготовьтесь к большим целям в 2025 году только для некоторых стилей</p>
        <a href="">
            <button className='Presentation-btn-1'>МАГАЗИН ДЛЯ ЖЕНЩИН</button>
        </a>
        <a href="">
            <button className='Presentation-btn-2'>МАГАЗИН ДЛЯ МУЖЧИН</button>
        </a>
    </div> 
</>)
}
export default Presentation
