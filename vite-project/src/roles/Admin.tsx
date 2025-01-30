import React, { useState, useEffect } from 'react';
import '../roles/Admin.sass'
import DeleteItemImg from '../../public/cross-mark.png'
import Header from '../components/Header';
import axios from 'axios';

let ImagePreview: string = "";

interface parametersCreateItem {
    name: string,
    color: string,
    price: number,
    category: string
}

interface itemInfo {
    id: number,
    name: string,
    color: string,
    price: number,
    img: string,

}


let itemsShop: itemInfo[] = []

const handleAPI_ItemCreate = async (params: parametersCreateItem, typePeople: string) => {
    try {
      const response = await axios.post(`http://localhost:8013/api/ShopItems/${typePeople}`, params)
  
      if (response.status === 200) {
        return true
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.log(`Ошибка: ${error.response.status} | ${error.response.data}`);
          return false
        }
      }
    }
}
const handleAPI_DeleteShopItem = async (id: number) => {
    try {
        const response = await axios.delete(`http://localhost:8013/api/ShopItems/DeleteShopItems/${id}`);
  
        if (response.status === 200) {
            return response.data; 
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                console.log(`Ошибка: ${error.response.status} | ${error.response.data}`);
                return false;
            }
        }
    }
}

const handleAPI_ItemsGet = async () => {
    try {
      const response = await axios.get('http://localhost:8013/api/ShopItems')
  
      if (response.status === 200) {
        itemsShop = response.data
        return itemsShop
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.log(`Ошибка: ${error.response.status} | ${error.response.data}`);
          return null
        }
      }
    }
}



const handleAPI_ImageUpload = async (itemName: string, file: File | null) => {
    try {

        if (file === null)
            return false;
    
        const formData = new FormData();

        formData.append('img', file);

        const response = await axios.post(`http://localhost:8013/api/ShopItems/ImgUpload/${itemName}`, formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
    
        if (response.status === 200) {
            return true
        }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.log(`Ошибка: ${error.response.status} | ${error.response.data}`);
          return false
        }
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

const AdminItem: React.FC<{title: string, color: string, price: number, image: string}> = ({title, color, price, image}) => {
    

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
    

    return (<>
        <div className="item_admin_release">
            <div className="image_item_admin" 
            style={{backgroundImage: `url(${imageRendered})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></div>
            <div className="title_item_admin">{title}</div>
            <div className="title_item_admin">{color}</div>
            <div className="title_item_admin">{price}</div>
        </div>
    </>)
}



const Admin: React.FC = () => {
    const [imageFile, setImageFile] = useState<File | null>(null);

    const [buttonAddClicked, setButtonAddClicked] = useState<boolean>(false);

    const [itemsInfo, setItemsInfo] = useState<itemInfo[]>();

    const [imgPrev, setImgPrev] = useState<string>("");

    // const [deletetext, setdeletetext] = useState<string>();

    const [categoryInput, setCategoryInput] = useState<string>("");

    const [deleteShopItem, setDeleteShopItem] = useState<string[]>();

    const [nameInput, SetNameInput] = useState<string>("");

    const [priceInput, SetPriceInput] = useState<number>(0);

    const [colorInput, SetColorInput] = useState<string>("");

    const [buttonTab, setButtonTab] = useState<string>("add_button");

    const [selectButton, setSelectButton] = useState<string>("Men");

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        
        event.preventDefault();

        const droppedFiles = event.dataTransfer.files;

        if (droppedFiles.length > 0) {
            setImageFile(droppedFiles[0]);
        }
    };
    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };
    const handleDeleteItem = async (id: number) => {
        const result = await handleAPI_DeleteShopItem(id);
        if (result !== false) {
            // Обновите состояние после удаления
            setItemsInfo(prevItems => prevItems?.filter(item => item.id !== id) || []);
            alert("Товар удалён");
        }
    }

    useEffect(() => {
        if (imageFile !== null) {
            setImgPrev(URL.createObjectURL(imageFile));
        }
    }, [imageFile])

    useEffect(()=>{

    }, [imgPrev])

    const itemsGetFill = async () => {
        var itemsGetFromApi = await handleAPI_ItemsGet();

        if (itemsGetFromApi !== undefined && itemsGetFromApi !== null) {
            setItemsInfo(itemsGetFromApi)
        }
    }

    useEffect(()=>{
        if (buttonTab === "change_button" ||buttonTab === "delete_button") {
            itemsGetFill();
        }
    }, [buttonTab])

    useEffect(()=>{
        if (itemsInfo !== null) {

        }
        
    }, [itemsInfo])

    const UploadHandlers = async (params: parametersCreateItem, imageFile: File) => {
        if (await handleAPI_ItemCreate(params, selectButton)) {
            if (await handleAPI_ImageUpload(params.name, imageFile)) {
                alert("Товар загружен")
            }
        }
    }

    useEffect(()=>{
        if (buttonAddClicked) {
            var itemProp: parametersCreateItem = {
                name: nameInput,
                color: colorInput,
                price: priceInput,
                category: categoryInput
            }
            if (imageFile !== null)
                UploadHandlers(itemProp, imageFile);

            setButtonAddClicked(false);
        }
    }, [buttonAddClicked])

    return (
        <>
        <Header/>
        <div className="Admin-panel">
            <h1 className='Admin-main_title'>Товары</h1>
            <div className="Admin-panel-item">
                <p className='Admin-panel-text' onClick={()=>setButtonTab("add_button")}>Добавить</p>
            </div>
            <div className="Admin-panel_import-item">
                <p className='Admin-panel-text' onClick={()=>setButtonTab("change_button")}>Изменить</p>
            </div>
            <div className="Admin-panel_import-item">
                <p className='Admin-panel-text' onClick={()=>setButtonTab("delete_button")}>Удалить</p>
            </div>
        </div>

        {(buttonTab === "add_button") &&
            <>
                <div className="Admin-create">
                    <h1 className='Admin-create-title'>Добавить товар</h1>
                    <div className="Admin-create-option">
                        <p className='Admin-create-option-title-1'>Название</p>
                        <input className='Admin-create-option-input-1' value={nameInput} onChange={(e) => SetNameInput(e.target.value)} type="text" />
                        <p className='Admin-create-option-title-2'>Цена</p>
                        <input className='Admin-create-option-input-2' value={priceInput} onChange={(e) => SetPriceInput(Number(e.target.value))} type="number"  />
                        <p className='Admin-create-option-title-3'>Цвет</p>
                        <input className='Admin-create-option-input-3' value={colorInput} onChange={(e) => SetColorInput(e.target.value)} type="text" />
                        <button className={selectButton === "Men" ? `Admin-create-option-btn-1` : `Admin-create-option-btn-1 inactive`} onClick={()=>setSelectButton("Men")}>Мужчина</button>
                        <button className={selectButton === "Woman" ? `Admin-create-option-btn-2` : `Admin-create-option-btn-2 inactive`} onClick={()=>setSelectButton("Woman")}>Женщина</button>
                        <p className='Admin-create-option-title-4'>Категории</p>
                        <input className='Admin-create-option-input-4' value={categoryInput} onChange={(e) => setCategoryInput(e.target.value)} type="text"/>
                        <button className='Admin-create-option-btn' onClick={()=>setButtonAddClicked(true)}>Создать товар</button>

                    </div>
                </div>
        
                <div className="Admin-create-images_area">
                    <p className='Admin-create-img-text'>Перетащите изображение</p>
                    <div className='Admin-create-img' style={{
                        width: '300px',
                        height: '300px',
                        backgroundSize: imgPrev !== "" ? 'cover' : '80px',
                        backgroundRepeat: "no-repeat", 
                        backgroundPosition: 'center',
                        backgroundImage: imgPrev !== "" ? `url(${imgPrev})` : `url(../../public/plus.png)`,
                        borderRadius: '8px'
                    }} onDrop={handleDrop} onDragOver={handleDragOver}></div>
            
                </div>
            </>
        }

        {(buttonTab === "change_button") &&
            <>
                <div className="items_area_admin">

                    {(itemsInfo !== undefined) && itemsInfo.map((item, index) => 
                        <>
                            <AdminItem 
                                key={index} 
                                title={item.name} 
                                color={item.color} 
                                price={item.price} 
                                image={item.img}
                            />
                        </>
                    )}


                </div>
            </>
        }
       {(buttonTab === "delete_button") &&
            <>
                <div className="items_area_admin">
                    {(itemsInfo !== undefined) && itemsInfo.map((item, index) => 
                        <div key={index}>
                            <AdminItem 
                                title={item.name} 
                                color={item.color} 
                                price={item.price} 
                                image={item.img}
                            />
                            <img 
                                className="DeleteItem" 
                                src={DeleteItemImg} 
                                alt="Delete Item" 
                                onClick={() => handleDeleteItem(item.id)} 
                            />
                            
                        </div>
                    )}
                </div>
            </>
        }

        
        </>
    );
};

export default Admin;