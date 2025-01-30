import { useEffect, useState } from 'react'
import './SweatshirtsW.sass'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'
import likeImg from '../../public/like_shop.png'
import IMGHealht from '../../public/heart.png'
import axios from 'axios'

interface itemInfo {
  id: number,
  name: string,
  color: string,
  price: number,
  img: string,
}

let itemsGet: itemInfo[] = []

const handleAPI_GetItem = async (categoryName: string) => {
  try {
      const response = await axios.get(`http://localhost:8013/api/ShopItems/Woman/${categoryName}`)

      if (response.status === 200) {
          itemsGet = response.data
          return itemsGet
      }
  } catch (error) {
      if (axios.isAxiosError(error)) {
          if (error.response) {
              console.log(`Ошибка: ${error.response.status} | ${error.response.data}`);
          }

          return null
      }
  }
}

const handleLoadImage = async (filePath: string) => {
  try {
      const response = await axios.get('http://localhost:8013/api/ShopItems/GetImage', {
          responseType: 'blob',
          headers: {
              filePath: filePath
          },
      });

      return URL.createObjectURL(response.data);

  } catch (error) {
      console.log("Внутренняя ошибка получения информации о товаре!")
      return null
  } 
}


const SweatshirtsWItem: React.FC<{title: string, color: string, price: string, image: string}> = ({title, color, price, image}) => {


  
  const [imageRendered, setImageRendered] = useState<string>("");

  const RenderImage = async () => {
      var imageToRender = await handleLoadImage(image);

      if (imageToRender !== null) {
          setImageRendered(imageToRender)
      }
  }

  useEffect(()=>{
    RenderImage();
  }, [])


  const [clickedHeart, setClickedHeart] = useState<boolean>(false);
  
  const handleHeartClick = () => {
    setClickedHeart(prev => !prev)
  }
  
  const imageHeart = () => {
    return clickedHeart ? IMGHealht : likeImg
  }

  return (<>
      <div className={`SweatshirtsW-item-1`}>
        <img className='img-main' src={imageRendered} alt="" />
        <img className='img-like' onClick={handleHeartClick} src={imageHeart()} alt="" />
        <p className='SweatshirtsW-text-1'>{title}</p>
        <p className='SweatshirtsW-text-2'>{color}</p>
        <p className='SweatshirtsW-text-3'>{price}</p>
      </div>
  </>)
}

function SweatshirtsW() {
  const [count, setCount] = useState(0)

  const [InfoItems, setInfoItems] = useState<itemInfo[]>([]);

  const handleInfoGet = async () => {
    var infoAPI = await handleAPI_GetItem("SweatshirtsW");
    if (infoAPI !== null && infoAPI !== undefined) {
      setInfoItems(infoAPI);
    }
  }


  useEffect(()=>{
    handleInfoGet();
  },[])

  return (
    <>  
    <Header/>
    <p className='title'>Толстовки</p>
    <p className='text'>Приготовьтесь к идеальному сочетанию стиля и производительности с нашими женскими толстовками для спортзала. Эти предметы гардероба созданы для того, чтобы вы чувствовали себя комфортно и чувствовали себя наилучшим образом. Независимо от того, потеете ли вы во время высокоинтенсивной интервальной тренировки, делаете повторения или наслаждаетесь выходным днем ​​с друзьями. </p>
    <div className="SweatshirtsW">

    {(InfoItems !== undefined) && InfoItems.map((item, index) => 
      <>
        <SweatshirtsWItem key={index}
          title={item.name}
          color={item.color}
          price={`${item.price} рублей`}
          image={item.img}
        />
      </>
    )}
</div>
    <Footer/>
    </> 
  )
}


export default SweatshirtsW


