import { useState, useEffect } from 'react'
import v1 from '../../public/Lifting.mp4'
import v2 from '../../public/functional.mp4'
import v3 from '../../public/running.mp4'
import v4 from '../../public/rest.mp4'


const ShortsList: React.FC = () => {
return (<>
    <h2 className='shorts-list-title'>СПИСОК НАБОРОВ</h2>
    <div className="shorts-list">   
      <div className="shorts-list-item">
        <video className='shorts-list-video' autoPlay loop muted>
        <source src={v1}/>
        Ваш браузер не поддерживает видео.
          </video>
        <h3 className='shorts-list-minititle'>ПОДЪЕМ</h3>
        <p className="shorts-list-text">Разнообразие фасонов, регулируемая талия и карманы для хранения вещей позволят вам сосредоточиться на тренировках.</p>
        <button className='shorts-list-btn'>КУПИТЬ СЕЙЧАС</button>
      </div>
      <div className="shorts-list-item">
        <video className='shorts-list-video' autoPlay loop muted>
        <source src={v2}/>
        Ваш браузер не поддерживает видео.
          </video>
        <h3 className='shorts-list-minititle'>ФУНКЦИОНАЛЬНАЯ ТРЕНИРОВКА</h3>
        <p className="shorts-list-text">Высокоэластичные ткани и боковые разрезы обеспечивают полную свободу движений.</p>
        <button className='shorts-list-btn'>КУПИТЬ СЕЙЧАС</button>
      </div>
      <div className="shorts-list-item">
        <video className='shorts-list-video' autoPlay loop muted>
        <source src={v3}/>
        Ваш браузер не поддерживает видео.
          </video>
        <h3 className='shorts-list-minititle'>БЕГ</h3>
        <p className="shorts-list-text">Легкие, дышащие и не отвлекающие внимание модели делают эти шорты одними из лучших для бега для мужчин.</p>
        <button className='shorts-list-btn'>КУПИТЬ СЕЙЧАС</button>
      </div>
      <div className="shorts-list-item">
        <video className='shorts-list-video' autoPlay loop muted>
        <source src={v4}/>
        Ваш браузер не поддерживает видео.
          </video>
        <h3 className='shorts-list-minititle'>ДЕНЬ ОТДЫХА</h3>
        <p className="shorts-list-text">Мягкие хлопковые ткани и регулируемый крой обеспечат вам комфорт во время отдыха.</p>
        <button className='shorts-list-btn'>КУПИТЬ СЕЙЧАС</button>
      </div>
    </div>
</>)
}
export default ShortsList
