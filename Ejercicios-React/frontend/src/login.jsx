import {useState} from 'react';
import './login.css';   

const Login = () => {
    const [Usuario, setUsuario] = useState('');
    const [Password, setPassword] = useState('');

    const handlerLogin = async (e) => {
        e.preventDefault();

        if(Usuario === 'admin' && Password === 'admin'){
            console.log('Login OK');
        } else {
            console.log('Login Failed');
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