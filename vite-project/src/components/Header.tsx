import { SetNavWomenOpened, GetNavWomenOpened} from '../function/Scripts.tsx'
import logoMain from '../../public/logo_aura.png'
import IMGSearch from '../../public/search.png'
import IMGShop from '../../public/shop.png'
import IMGLike from '../../public/like.png'
import IMGMe from '../../public/me.png'

const Header: React.FC = () => {
    const OnClickNavWomen = () =>{
        SetNavWomenOpened(true)
     
    }
return (<>
<header>
  <span className="grid-item-list NavMain">
   
      <h1 className='grid-item TitleMain'>AuthenticAura</h1>
      <img src={logoMain} className="grid-item logoMain" alt="" />
   
      <p className='NavMainWomen' onClick={OnClickNavWomen}>Женщины</p>
  
      <p className='NavMainMen'>Мужчины</p>
   
  
      <p className='NavMainAccessory'>Аксессуары</p>
    
   
      <img src={IMGSearch} className='grid-item IMGSearch' alt="" />
   
   
      <img src={IMGShop} className='grid-item IMGShop' alt="" />
    
    
      <img src={IMGLike} className='grid-item IMGLike' alt="" />
   
    <a href="">
      <img src={IMGMe} className='grid-item IMGMe' alt="" />
    </a>
  </span>

 
</header>

</>)
}
export default Header
