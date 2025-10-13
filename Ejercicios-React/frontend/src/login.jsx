import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/login.scss';

const Login = () => {
    const [Usuario, setUsuario] = useState('');
    const [Password, setPassword] = useState('');
    const navigate = useNavigate();

    const handlerLogin = async (e) => {
        e.preventDefault();

        if(Usuario === 'admin' && Password === 'admin'){
            console.log('Login OK');
            navigate('/actividades');
        } else {
            console.log('Login ERROR');
        }
    }

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handlerLogin}>
                <h2>Iniciar Sesión</h2>
                <label htmlFor="usuario">Usuario</label>
                <input type="text"
                placeholder="Usuario"
                value = {Usuario}
                onChange = {(e) => setUsuario(e.target.value)}
                required />
                <label htmlFor="password">Contraseña</label>
                <input type="password"
                placeholder="Contraseña"
                value={Password}
                onChange = {(e) => setPassword(e.target.value)}
                required />
                <button type="submit">Ingresar</button>
            </form>
        </div>
    )
}

export default Login;