import './login.css'
import {useNavigate} from "react-router-dom";


export default function LoginPage() {
    const navigate = useNavigate();
    return (

        <div>
                <h1 className={'text-conectar'}>
                    CONECTAR-SE
                </h1>

            <form className="retro-form">

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
                    ENTRAR
                </button>
                <button className="retro-button-password-reset" type="submit">
                    ESQUECEU A SENHA?
                </button>
                <button className="retro-button" type="submit" onClick={() => navigate('/registro')}>
                    CADASTRAR
                </button>
            </form>
        </div>
    );
}
