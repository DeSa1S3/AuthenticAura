import { useState, useEffect } from 'react'
import BestPresentationIMG from '../../public/BestPresentation.png'


const BestPresentation: React.FC = () => {
return (<>
    <div className="best-katalog">
        <img className='best-katalog-img' src={BestPresentationIMG} alt="" />
        <h2 className='best-katalog-title'>НИЧЕГО, КРОМЕ САМОГО ЛУЧШЕГО</h2>
        <p className='best-katalog-text'>Их не зря называют бестселлерами.</p>
        <button className='best-katalog-btn'>КУПИТЬ СЕЙЧАС</button>
    </div>
</>)
}
export default BestPresentation
