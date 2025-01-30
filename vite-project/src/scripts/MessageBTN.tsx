import React, { useEffect, useState } from 'react';
import NextIMG from '../../public/next.png'
import CrossMark from '../../public/cross-mark.png'
import '../scripts/MessageBTN.sass'
import axios from 'axios'
import { LoginBackgrounded } from './LoginBackground';
import useUserIdVar from '../vars/UserIdVar';
import useMeAuthVar from '../vars/meAuthVar';
import Cookies from 'js-cookie';

interface ReviewsInfo{
  userID : number,
  text: string
}

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


const handleAPI_Reviews = async (Dto:ReviewsInfo) => {
  try {
    const response = await axios.post(`http://localhost:8013/api/Reviews/SentReviews`, Dto)

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
const MessageButton: React.FC = () => {
    const emailCookied: string = Cookies.get('email') as string
    const [input, setInput] = useState("")
    const [message, setMessage] = useState("");
    const {userId, userIdSet} = useUserIdVar();
    const{meAuthSet} = useMeAuthVar()
    

    const handleCheck = async () => {
      if(userId !== -1 && input !== ""){
          if(await handleAPI_Reviews({
              userID : userId,
              text : input
          })){
              alert("Отзыв отправлен")
          }
      }
    }

    const handleClick = () => {
        setMessage("Ваше сообщение отправлено");
        console.log(userId)
        handleCheck()
    };

    const handleCloseMessage = () => {
        setMessage(""); // или 
    };

    const LoginBackgroundedFunc = async () => {
        if (await LoginBackgrounded()) {
          if (emailCookied !== undefined) {
            var Profile = await handleAPI_Profile(emailCookied)

            if(Profile !== null && Profile !== undefined){
                var ProfileSet : ProfileInfo = Profile;
                userIdSet(ProfileSet.id)
            }
          }

          meAuthSet(true)
        }
        else {
          meAuthSet(false)
        }

    }

    useEffect(()=>{
        LoginBackgroundedFunc()
    },[])


    useEffect(()=>{
    },[userId])

    return (
        <div>
            <input className='input-reviews' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Напиши ваш отзыв' type="text" />
            <img onClick={handleClick} className='img-reviews' src={NextIMG} alt="" />
            {message && 
            <div className="message-div">
                <img onClick={handleCloseMessage} className='cross-mark' src={CrossMark} alt="" />
                <p className="message">{message}</p>
            </div>}
        </div>
    );
};

export default MessageButton;