
import { useState, useEffect } from 'react'
import logoMain from '../../public/logo_aura.png'
import IMGSearch from '../../public/search.png'
import IMGShop from '../../public/shop.png'
import IMGLike from '../../public/like.png'
import IMGMe from '../../public/me.png'

const Header: React.FC = () => {

    const [blockOpened, setBlockOpened] = useState<boolean>()

    const OnClickNavWomen = () => {
      setBlockOpened(true)
    }

    const navWomenBlock = () => {
      if(blockOpened === true){
        return(<>
        <div className='background'>
          {/*Дальше тут код пропишешь*/}
        </div>
        </>)
      }
      else{
        return(<></>)
      }
    }

return (<>
<header>
  <span className="grid-item-list NavMain">
   
      <span className='grid-item TitleMain'>AuthenticAura</span>
      <img src={logoMain} className="grid-item logoMain" alt="" />
   
      <span className='NavMainWomen' onClick={OnClickNavWomen}>Женщины</span>
  
      <span className='NavMainMen'>Мужчины</span>
   
  
      <span className='NavMainAccessory'>Аксессуары</span>
    
   
      <img src={IMGSearch} className='grid-item IMGSearch' alt="" />
   
   
      <img src={IMGShop} className='grid-item IMGShop' alt="" />
    
    
      <img src={IMGLike} className='grid-item IMGLike' alt="" />
   
    <a href="">
      <img src={IMGMe} className='grid-item IMGMe' alt="" />
    </a>
  </span>

 
</header>

{navWomenBlock()}

</>)
}
export default Header
