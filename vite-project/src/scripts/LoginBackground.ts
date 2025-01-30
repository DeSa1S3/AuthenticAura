import Cookies from 'js-cookie';
import useMeAuthVar from '../vars/meAuthVar.ts'
import useUserIdVar from '../vars/UserIdVar.ts'
import axios from 'axios';

interface parametersMe {
    email: string,
    password: string
}


const handleAPI_Me = async (params: parametersMe) => {
    try {
        const response = await axios.post('http://localhost:8013/api/Auth/Login', params)

        if (response.status === 200) {
            console.log("Успешный вход")
            return true
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                console.log(`Ошибка: ${error.response.status} | ${error.response.data}`);
            }

            return false
        }
    }
}



const LoginBackgrounded = async () => {

    // const { meAuthGet, meAuthSet } = useMeAuthVar();

    const emailCookied: string = Cookies.get('email') as string
    const passCookied: string = Cookies.get('password') as string
  
    if (emailCookied !== undefined && passCookied !== undefined) {

        var toApi: parametersMe = { 
            email: emailCookied, 
            password: passCookied 
        } 

        if (await handleAPI_Me(toApi)) {
      
            return true
            // meAuthSet(true)
        }
        else {
            Cookies.remove('email')
            Cookies.remove('password')
            userIdSet(-1)
            return false
            // meAuthSet(false)
        }
    }
}

export { LoginBackgrounded, handleAPI_Me } 