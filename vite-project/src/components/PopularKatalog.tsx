import { useState, useEffect } from 'react'
import PKatalog1 from '../../public/runimg.jpg'
import PKatalog2 from '../../public/besceler.jpg'
import PKatalog3 from '../../public/acssesuar.jpg'
import PKatalog4 from '../../public/full img.jpg'

const PopularKatalog: React.FC = () => {
return (<>
    <div className="popular_katalog">
        <h2 className="popular_katalog_title">ПОПУЛЯРНО СЕЙЧАС</h2>
            { <img className='popular_katalog_img-1' src={PKatalog1} alt="" /> }
            <h3 className='popular_katalog-minititle-1'>КРУТОЙ БЕГ</h3>
            <p className="popular_katalog_text-1">Бегайте этой зимой? Не мёрзните и продолжайте бегать в нашем комплекте для бега в холодную погоду.</p>
            <a href=""><button className='popular_katalog_btn-1'>КУПИТЬ СЕЙЧАС</button></a>

            { <img className='popular_katalog_img-2' src={PKatalog2} alt="" /> }
            <h3 className='popular_katalog-minititle-2'>БЕСТСЕЛЛЕРЫ</h3>
            <p className="popular_katalog_text-2">Есть одна вещь, которую мы делаем... и мы делаем ее хорошо. Что бы вы ни делали в спортзале, выкладывайтесь по полной в наших бестселлерах.</p>
            <a href=""><button className='popular_katalog_btn-2'>КУПИТЬ СЕЙЧАС</button></a>

            { <img className='popular_katalog_img-3' src={PKatalog3} alt="" /> }
            <h3 className='popular_katalog-minititle-3'>АКСЕССУАРЫ</h3>
            <p className="popular_katalog_text-3">Маленькие вещи для больших личных рекордов. Аксессуары меняют правила игры в ваших тренировках, вашей форме и вашем самочувствии.</p>
            <a href=""><button className='popular_katalog_btn-3'>КУПИТЬ СЕЙЧАС</button></a>

            { <img className='popular_katalog_img-4' src={PKatalog4} alt="" /> }
            <h3 className='popular_katalog-minititle-4'>ОБЩАЯ КАРТИНА</h3>
            <p className="popular_katalog_text-4">Перегрузка крупными графическими элементами, призванными мотивировать.</p>
            <a href=""><button className='popular_katalog_btn-4'>КУПИТЬ СЕЙЧАС</button></a>
    </div>
</>)
}
export default PopularKatalog
