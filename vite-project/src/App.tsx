import { useState } from 'react'
import { SetNavWomenOpened, GetNavWomenOpened} from './function/Scripts.tsx'
import Header from './components/Header.tsx'
import IMGKID_1 from '../public/KidForTheCold_img4.jpg'
import IMGKID_2 from '../public/KidForTheCold_img1.jpg'
import IMGKID_3 from '../public/KidForTheCold_img2.jpg'
import IMGKID_4 from '../public/KidForTheCold_img3.jpg'
import IMGSALEW_1 from '../public/SaleWomen-img4.png'
import IMGSALEW_2 from '../public/SaLeWomen-img1.jpg'
import IMGSALEW_3 from '../public/SaleWomen-img2.jpg'
import IMGSALEW_4 from '../public/SaleWomen-img3.jpg'
import './App.sass'
import IMGPresentation from '../public/colections.jpg'


function App() {
  const [count, setCount] = useState(0)
  const navWomen = () =>{
    if(GetNavWomenOpened() === true){
      alert()
      return(<>
      <div className='background'></div>
      </>)
    }
    else{
      return(<></>)
    }
  }
  return (
    <>  
    <Header/>

  {navWomen()}
  <div className="PresentationOfTheCollection">   
    {/* <img src={IMGPresentation} alt="" className='IMGPresentation'/> */}
    <h3 className='Presentation-minititle'>ЗИМНЯЯ РАСПРОДАЖА СКИДКИ ДО 60%</h3>
    <p className='Presentation-text'>Приготовьтесь к большим целям в 2025 году только для некоторых стилей</p>
        <a href="">
          <button className='Presentation-btn-1'>МАГАЗИН ДЛЯ ЖЕНЩИН</button>
        </a>
        <a href="">
          <button className='Presentation-btn-2'>МАГАЗИН ДЛЯ МУЖЧИН</button>
        </a>
  </div> 
  

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
      <p className="SaleWomen_Text-4">КОФТА ОТ 2000р</p>
      <a href=""><button className='SaleWomen_Btn-4'>КУПИТЬ СЕЙЧАС</button></a>
    </div>
  </div>
  <div className="popular_katalog">
    <h2 className="popular_katalog_title">ПОПУЛЯРНО СЕЙЧАС</h2>
    <button className='popular_katalog_btn-1'>ЖЕНЩИНЫ</button>
    <button className='popular_katalog_btn-2'>МУЖЧИНЫ</button>

    {/* <img className='popular_katalog_img-1' src={} alt="" /> */}
    <h3 className='popular_katalog-minititle-1'>КРУТОЙ БЕГ</h3>
    <p className="popular_katalog_text-1">Бегайте этой зимой? Не мёрзните и продолжайте бегать в нашем комплекте для бега в холодную погоду.</p>
    <a href=""><button className='popular_katalog_btn-1'>КУПИТЬ СЕЙЧАС</button></a>

    {/* <img className='popular_katalog_img-2' src={} alt="" /> */}
    <h3 className='popular_katalog-minititle-2'>БЕСТСЕЛЛЕРЫ</h3>
    <p className="popular_katalog_text-2">Есть одна вещь, которую мы делаем... и мы делаем ее хорошо. Что бы вы ни делали в спортзале, выкладывайтесь по полной в наших бестселлерах.</p>
    <a href=""><button className='popular_katalog_btn-2'>КУПИТЬ СЕЙЧАС</button></a>

    {/* <img className='popular_katalog_img-3' src={} alt="" /> */}
    <h3 className='popular_katalog-minititle-3'>АКСЕССУАРЫ</h3>
    <p className="popular_katalog_text-3">Маленькие вещи для больших личных рекордов. Аксессуары меняют правила игры в ваших тренировках, вашей форме и вашем самочувствии.</p>
    <a href=""><button className='popular_katalog_btn-3'>КУПИТЬ СЕЙЧАС</button></a>

    {/* <img className='popular_katalog_img-4' src={} alt="" /> */}
    <h3 className='popular_katalog-minititle-4'>ОБЩАЯ КАРТИНА</h3>
    <p className="popular_katalog_text-4">Перегрузка крупными графическими элементами, призванными мотивировать.</p>
    <a href=""><button className='popular_katalog_btn-4'>КУПИТЬ СЕЙЧАС</button></a>

    
</div>
    </>
  )
}
// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <h1>Поиск на сайте</h1>
//       <Search />
//     </div>
//   );
// };

export default App
