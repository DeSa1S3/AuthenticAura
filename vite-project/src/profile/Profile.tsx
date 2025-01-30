import React, { useState, useEffect } from 'react';
import '../profile/Profile.sass'
import Header from '../components/Header';
import logo from '../../public/logo_aura.png'
import ProfileMe from '../../public/Profile-me (1).png'
import ProfileExit from '../../public/Profile-exit.png'
import Cookies from 'js-cookie';
import useMeAuthVar from '../vars/meAuthVar';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

interface ProfileInfo{
    id:number,
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    email: string,
    password: string,
    roles: string[]
}

let profileGet : ProfileInfo;

const handleAPI_Profile = async (email: string) => {
    try {
      const response = await axios.get(`http://localhost:8013/api/Users/Me/${email}`)
  
      if (response.status === 200) {
        profileGet = response.data
        return profileGet
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

const Profile: React.FC = () => {

    const [profileRel, SetProfileRel] = useState<ProfileInfo>();

    const [message, setMessage] = useState("");

    const { meAuthGet, meAuthSet } = useMeAuthVar();

    const [clickedExit, setClickedExit] = useState<boolean>(false);

    const navigate = useNavigate();

    const emailCookied: string = Cookies.get('email') as string
    const passCookied: string = Cookies.get('password') as string    

    const OnExit = () => {
        if (emailCookied !== undefined && passCookied !== undefined) {
            Cookies.remove('email')
            Cookies.remove('password')
            meAuthSet(false)
            navigate("/Me")
        }
    }

    const fillProfile=async()=>{
        var Profile = await handleAPI_Profile(emailCookied);
        if(Profile !== null){
            SetProfileRel(Profile)
        }
    }

    useEffect(()=>{
        if (emailCookied === undefined || passCookied === undefined) {
            navigate("/Me")
        }
        else{
            fillProfile();
        }
    }, [])

    useEffect(()=>{
        if (clickedExit) {
            OnExit();
            setClickedExit(false);
        }
    }, [clickedExit])
    

    return (
        <>
        <Header/>
        <div className="Profile-back">
        <img className='Profile-logo' src={logo} alt="" />
        <h3 className='Profile-MeName'>{emailCookied}</h3>
        <img className='Profile-exit' src={ProfileExit} onClick={()=>setClickedExit(true)}></img>
        {(profileRel !== undefined) &&
            <>
                <p className='Profile-info-1'>{profileRel.firstName}</p>
                <p className='Profile-info-2'>{profileRel.lastName}</p>
                <p className='Profile-info-3'>{profileRel.dateOfBirth}</p>
                <p className='Profile-info-4'>{profileRel.email}</p>
            </>
        }
        <p className='Profile-text-1'>Мои покупки</p>
        <p className='Profile-text-2'>Финансы</p>
        <p className='Profile-text-3'>Способы оплаты</p>
        <p className='Profile-text-4'>Реквизиты</p>
        <p className='Profile-text-5'>Управление</p>
        <p className='Profile-text-6'>Настройки</p>
        <p className='Profile-text-7'>Ваши устройства</p>
        <p className='Profile-text-8'  onClick={()=>(navigate('/Reviews'))}>Ваши отзывы</p>
        <p className='Profile-text-9'>Вернуть товар</p>
        </div>
            
        </>
    );
};

export default Profile;