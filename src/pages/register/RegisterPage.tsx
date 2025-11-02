import {useNavigate} from "react-router-dom";
import './register.css'

function Register(){
    const navigate = useNavigate();
    return(
        <>
            <h1 className={'text-conectar'}>REGISTRO</h1>

            <form className="retro-form">
                <label className="retro-label" htmlFor="usuario">USUÁRIO</label>
                <input
                    id="usuario"
                    type="text"
                    placeholder="Digite seu usuario"
                    className="retro-input"
                />

                <label className="retro-label" htmlFor="email">EMAIL</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Digite seu email"
                    className="retro-input"
                />

                <label className="retro-label" htmlFor="senha">SENHA</label>
                <input
                    id="senha"
                    type="password"
                    placeholder="Digite sua senha"
                    className="retro-input"
                />

                <button className="retro-button" type="submit">
                    CADASTRAR
                </button>
                <button className="button-login"
                        onClick={() => navigate("/login")}>
                        JÁ POSSUI CONTA? CONECTE-SE!
                </button>
            </form>

        </>
    )
}
export default Register;