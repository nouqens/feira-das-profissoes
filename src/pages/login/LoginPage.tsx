import './login.css'


export default function LoginPage() {
    return (

        <div>
            <div>
                <h1 className={'text-conectar'}>
                    CONECTAR-SE
                </h1>
            </div>

            <form className="retro-form">

                <label className="retro-label" htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Digite seu email"
                    className="retro-input"
                />

                <label className="retro-label" htmlFor="senha">Senha</label>
                <input
                    id="senha"
                    type="password"
                    placeholder="Digite sua senha"
                    className="retro-input"
                />

                <button className="retro-button" type="submit">
                    Entrar
                </button>
                <button className="retro-button-password" type="submit">
                    ESQUECEU A SENHA?
                </button>
                <button className="retro-button" type="submit">
                    CADASTRAR
                </button>
            </form>
        </div>
    );
}
