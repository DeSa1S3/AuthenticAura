import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
const navigate = useNavigate();

return (<>
    <div className="Footer">
        <div className="Footer-item">
            <h3 className='Footer-title'>Аккаунт</h3>
            <p className='Footer-text'>Авторизоваться</p>
            <p className='Footer-text'>Зарегистрироваться</p>
        </div>
       
        <div className="Footer-item">
            <h3 className='Footer-title'>Страницы</h3>
            <p className='Footer-text'>О нас</p>
            <p className='Footer-text'>Список заводов</p>
        </div>
        
        <div className="Footer-item">
            <h3 className='Footer-title'>Помощь</h3>
            <p className='Footer-text'  onClick={()=>(navigate('/Support'))}>Поддержка</p>
            <p className='Footer-text'  onClick={()=>(navigate('/Reviews'))}>Ваши отзовы</p>
        </div>
        <div className="Footer-item">
            <p>© 2025 | Gymshark Limited | Все права защищены. |  Мы занимаемся спортом</p>
        </div>
    </div>
</>)
}
export default Footer
