import { useState, useEffect } from 'react'
import PKatalog1 from '../../public/runimg.jpg'
import PKatalog2 from '../../public/besceler.jpg'
import PKatalog3 from '../../public/acssesuar.jpg'
import PKatalog4 from '../../public/full img.jpg'

const PopularKatalog: React.FC = () => {
return (<>
    <h2 className="popular_katalog_title">ПОПУЛЯРНО СЕЙЧАС</h2>
        <div className="popular_katalog">
            <div className="popular_katalog-item">
                <img className='popular_katalog_img' src={PKatalog1} alt="" /> 
                <h3 className='popular_katalog-minititle'>КРУТОЙ БЕГ</h3>
                <p className="popular_katalog_text">Бегайте этой зимой? Не мёрзните и продолжайте бегать в нашем комплекте для бега в холодную погоду.</p>
                <div className='popular_katalog_btn'>КУПИТЬ СЕЙЧАС</div>
            </div>   
            <div className="popular_katalog-item">
                <img className='popular_katalog_img' src={PKatalog2} alt="" /> 
                <h3 className='popular_katalog-minititle'>БЕСТСЕЛЛЕРЫ</h3>
                <p className="popular_katalog_text">Есть одна вещь, которую мы делаем... и мы делаем ее хорошо. Что бы вы ни делали в спортзале, выкладывайтесь по полной в наших бестселлерах.</p>
                <div className='popular_katalog_btn'>КУПИТЬ СЕЙЧАС</div>
            </div>
            <div className="popular_katalog-item">
                <img className='popular_katalog_img' src={PKatalog3} alt="" /> 
                <h3 className='popular_katalog-minititle'>АКСЕССУАРЫ</h3>
                <p className="popular_katalog_text">Маленькие вещи для больших личных рекордов. Аксессуары меняют правила игры в ваших тренировках, вашей форме и вашем самочувствии.</p>
                <div className='popular_katalog_btn'>КУПИТЬ СЕЙЧАС</div>
            </div>     
            <div className="popular_katalog-item">
                <img className='popular_katalog_img' src={PKatalog4} alt="" /> 
                <h3 className='popular_katalog-minititle'>ОБЩАЯ КАРТИНА</h3>
                <p className="popular_katalog_text">Перегрузка крупными графическими элементами, призванными мотивировать.</p>
                <div className='popular_katalog_btn'>КУПИТЬ СЕЙЧАС</div>
            </div>
        </div>
</>)
}
export default PopularKatalog
