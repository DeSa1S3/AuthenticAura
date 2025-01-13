import { useState, useEffect } from 'react'
import logoMain from '../../public/logo_aura.png'
import IMGSearch from '../../public/search.png'
import IMGShop from '../../public/shop.png'
import IMGLike from '../../public/like.png'
import IMGMe from '../../public/me.png'
import ImgWomen from '../../public/img-Women.png'
import ImgMen from '../../public/img-Men.png'
import IMGAccessory from '../../public/img-Accessory.png'
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {

    const [currentNavIndex, setcurrentNavIndex] = useState<number>()

    const [blockOpened, setBlockOpened] = useState<boolean>()

    const [AnimHover, setAnimHover] = useState<boolean[]>([])

    const OnHoveredNav = (index:number)=>{

      for (let i = 0; i < 3; i++) {
        if (index != i) {
          setAnimHover(prev=>{
            prev[i]=(prev[i]=false)
            return prev
          })    
        }
      }

      setAnimHover(prev=>{
        prev[index]=(prev[index]=true)
        return prev
      })

    

      setcurrentNavIndex(index)
      OnClickNavWomen()
      OnClickNavMen()
      OnClickNavMainAccessory()
    }
    const NavJSX = (index:number)=>{
      if(AnimHover[index]){
        return(<>
        <div className="line open"></div>
        </>)
      }
      else{
        return(<>
        <div className="line closed"></div>
        </>)
      }
    }
    useEffect(()=>{

    },[AnimHover])
    const onMouseOverNav = () =>{
      setBlockOpened(false)
      for(let i = 0; i<3;i++){
      setAnimHover(prev=>{
        prev[i]=(prev[i]=false)
        return prev
      })
    }
    }
    const OnClickNavWomen = () => {
      setBlockOpened(true)
    }
    const OnClickNavMen = () => {
      setBlockOpened(true)
    }
    const OnClickNavMainAccessory = () => {
      setBlockOpened(true)
    }

    const navMainAccessory = ()=>{
      return (<>
       <div onMouseLeave={()=>onMouseOverNav()} onMouseEnter={()=>OnHoveredNav(2)} className='background'>
            <div className="Accessory">
              <div className="Accessory-item">
                <h3 className='title-Accessory'>
                  В ТРЕНДЕ
                </h3>
                <p className='text-Accessory'>Новые Поступления</p>
                <p className='text-Accessory'>Все Аксессуары</p>
                <p className='text-Accessory'>Бестселлеры</p>
                <p className='text-Accessory'>Графика</p>
                <p className='text-Accessory'>Сезонные Аксессуары</p>
              </div>
            
              <div className="Accessory-item">
                <h3 className='title-Accessory'>
                  СУМКИ
                </h3>
                <p className='text-Accessory'>Все Сумки </p>
                <p className='text-Accessory'>Рюкзаки</p>
                <p className='text-Accessory'>Дорожные Сумки</p>
                <p className='text-Accessory'>Маленькие Сумки</p>
              </div>
              
              <div className="Accessory-item">
                <h3 className='title-Accessory'>
                  НИЖНЕЕ БЕЛЬЕ
                </h3>
                <p className='text-Accessory'>Мужское Нижнее Белье</p>
                <p className='text-Accessory'>Женское Нижнее Белье</p>
              </div>
            
              <div className="Accessory-item">
                <h3 className='title-Accessory'>
                  ГОЛОВНОЙ УБОР
                </h3>
                <p className='text-Accessory'>Все головные уборы</p>
                <p className='text-Accessory'>Шапки</p>
                <p className='text-Accessory'>Кепки</p>
                <p className='text-Accessory'>Аксессуары Для Волос</p>
              </div>
            
              <img src={IMGAccessory} className='img-Accessory' alt="" />       

            </div>    
        </div>    
      </>)
    }
    const navManBlock = () => {
      return (<>
        <div onMouseLeave={()=>onMouseOverNav()} onMouseEnter={()=>OnHoveredNav(1)} className='background'>
            <div className="Men">
              <div className="Men-item">
                <h3 className='title-Men'>
                  В тренде
                </h3>
                <p className='text-Men'>Новые Поступления</p>
                <p className='text-Men'>Бестселлеры</p>
                <p className='text-Men'>Шорты</p>
                <p className='text-Men'>Тренировочные Комплекты</p>
                <p className='text-Men'>Вещи Для Дома</p>
              </div>
            
              <div className="Men-item">
                <h3 className='title-Men'>
                  Стартовые Пакеты
                </h3>
                <p className='text-Men'>Стартовый Пакет Для Спорта </p>
                <p className='text-Men'>Стартовый Пакет Для  Бега</p>
                <p className='text-Men'>Стартовый Пакет Lifting</p>
                <p className='text-Men'>Стартовый Пакет Sweat</p>
              </div>
              
              <div className="Men-item">
                <h3 className='title-Men'>
                  Продукция
                </h3>
                <p onClick={()=>(navigate('/TShirt'))} className='text-Men text-dec'>Футболки И Топы</p>
                <p className='text-Men'>Куртки</p>
                <p onClick={()=>(navigate('/SweatshirtsM'))}  className='text-Men text-dec'>Толстовки</p>
                <p onClick={()=>(navigate('/Shorts'))} className='text-Men text-dec'>Шорты</p>
                <p onClick={()=>(navigate('/Trousers'))} className='text-Men text-dec'>Штаны</p>
                <p className='text-Men'>Спортивные Штаны</p>
                <p className='text-Men'>Майки</p>
              </div>
            
              <div className="Men-item">
                <h3 className='title-Men'>
                  Исследовать
                </h3>
                <p className='text-Men'>Подарочная Карта</p>
                <p className='text-Men'>Руководство По Выбору Стартого Пакета</p>
                <p className='text-Men'>Руководство По Выбору Спортивного Костюма</p>
                <p className='text-Men'>Распродажа</p>
              </div>
            
              <img src={ImgMen} className='img-Men' alt="" />       

            </div>    
        </div>    
        </>
      )
    }

    const navWomenBlock = () => {
      
    return(<>
      <div onMouseLeave={()=>onMouseOverNav()} onMouseEnter={()=>OnHoveredNav(0)} className='background'>
        <div className="Women">
          <div className="Women-item">
            <h3 className='title-Women'>
              В тренде
            </h3>
            <p className='text-Women'>Новые Поступления</p>
            <p className='text-Women'>Бестселлеры</p>
            <p className='text-Women'>Хиджабы</p>
            <p className='text-Women'>Тренировочные Комплекты</p>
          </div>
         
          <div className="Women-item">
            <h3 className='title-Women'>
              Стартовые Пакеты
            </h3>
            <p className='text-Women'>Стартовый Пакет Для Спорта </p>
            <p className='text-Women'>Стартовый Пакет Для  Бега</p>
            <p className='text-Women'>Стартовый Пакет Lifting</p>
            <p className='text-Women'>Стартовый Пакет Sweat</p>
          </div>
          
          <div className="Women-item">
            <h3 className='title-Women'>
              Продукция
            </h3>
            <p onClick={()=>(navigate('/Leggings'))} className='text-Women text-dec'>Леггинсы</p>
            <p className='text-Women'>Футболки И Топы</p>
            <p className='text-Women'>Куртки</p>
            <p onClick={()=>(navigate('/SweatshirtsW'))} className='text-Women text-dec'>Толстовки</p>
            <p onClick={()=>(navigate('/Tops'))} className='text-Women text-dec'>Топы</p>
            <p className='text-Women'>Шорты</p>
            <p onClick={()=>(navigate('/Trousers'))} className='text-Women text-dec'>Штаны</p>
            <p className='text-Women'>Спортивные Штаны</p>
            <p className='text-Women'>Майки</p>
          </div>
         
          <div className="Women-item">
            <h3 className='title-Women'>
              Исследовать
            </h3>
            <p className='text-Women'>Подарочная Карта</p>
            <p className='text-Women'>Руководство По Выбору Леггинсов</p>
            <p className='text-Women'>Руководство По Выбору Спортивного Костюма</p>
            <p className='text-Women'>Распродажа</p>
          </div>
         
          <img src={ImgWomen} className='img-Women' alt="" />       

        </div> 
      </div>   
        </>)
    }
    const sectionNav = () =>{

      if (blockOpened) {
      
        if(currentNavIndex === 0){
          return navWomenBlock()
        }
        else if (currentNavIndex === 1) {
          return navManBlock();
        }
        else if (currentNavIndex === 2) {
          return navMainAccessory();
        }

        return(<>
        <div onMouseLeave={()=>onMouseOverNav()} className='background'>
        </div>
        </>)
      }
      else {
        return (<></>)
      }
    }

    const navigate = useNavigate();
    
return (<>
<header>
  <span className="grid-item-list NavMain">
    <span className='TitleMain' onClick={()=>(navigate('/'))}>AuthenticAura</span>
        <img onClick={()=>(navigate('/'))} src={logoMain} className=" logoMain" alt="" />
        <div className="BtnArea">
              <div className="NavSpanBtn">
                  <span className='NavMainWomen' onMouseEnter={()=>OnHoveredNav(0)}>Женщины</span>
                  {
                    NavJSX(0)
                  }  
                </div>
              <div className="NavSpanBtn">
                  <span className='NavMainMen' onMouseEnter={()=>OnHoveredNav(1)}>Мужчины</span>
                  {
                    NavJSX(1)
                  }  
              </div>
              <div className="NavSpanBtn">
                <span className='NavMainAccessory' onMouseEnter={()=>OnHoveredNav(2)}>Аксессуары</span>
                  {
                    NavJSX(2)
                  }  
                </div>    
            
                  <img src={IMGSearch} className='grid-item IMGSearch' alt="" />
            
                  <img src={IMGShop} className='grid-item IMGShop' alt="" />

                  <img src={IMGLike} className='grid-item IMGLike' alt="" />
                  
                  
                  <img src={IMGMe}  onClick={()=>(navigate('/Me'))}  className='grid-item IMGMe' alt="" />
                   
         </div>
      </span>
</header>
{sectionNav()}
</>)
}
export default Header
