import { useEffect, useState } from 'react'
import './TrousersMen.sass'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'
import likeImg from '../../public/like_shop.png'
import IMGHealht from '../../public/heart.png'
import TS1 from '../../public/TrousersM/TS1.jpg'
import TS2 from '../../public/TrousersM/TS2.jpg'
import TS3 from '../../public/TrousersM/TS3.jpg'
import TS4 from '../../public/TrousersM/TS4.jpg'
import TS5 from '../../public/TrousersM/TS5.jpg'
import TS6 from '../../public/TrousersM/TS6.jpg'
import TS7 from '../../public/TrousersM/TS7.jpg'
import TS8 from '../../public/TrousersM/TS8.jpg'
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
      const response = await axios.get(`http://localhost:8013/api/ShopItems/Men/${categoryName}`)

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

const Trouseritem: React.FC<{title: string, color: string, price: string, image: string}> = ({title, color, price, image, }) => {

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
      <div className={`Trouser-item-1`}>
        <img className='img-main' src={imageRendered} alt="" />
        <img className='img-like' onClick={handleHeartClick} src={imageHeart()} alt="" />
        <p className='Trouser-text-1'>{title}</p>
        <p className='Trouser-text-2'>{color}</p>
        <p className='Trouser-text-3'>{price}</p>
      </div>
  </>)
}

function TrousersMen() {
  const [count, setCount] = useState(0)

  const [InfoItems, setInfoItems] = useState<itemInfo[]>([]);

  const handleInfoGet = async () => {
    var infoAPI = await handleAPI_GetItem("TrouserM");
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
    <p className='title'>Штаны</p>
    <p className='text'>Приготовьтесь к идеальному сочетанию стиля и производительности с нашими мужскими шортами для спортзала. Эти предметы гардероба созданы для того, чтобы вы чувствовали себя комфортно и чувствовали себя наилучшим образом. Независимо от того, потеете ли вы во время высокоинтенсивной интервальной тренировки, делаете повторения или наслаждаетесь выходным днем ​​с друзьями. </p>
    <div className="Trouser">

    {(InfoItems !== undefined) && InfoItems.map((item, index) => 
        <>
            <Trouseritem key={index}
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


export default TrousersMen
