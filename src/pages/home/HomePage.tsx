import { useNavigate } from "react-router-dom";
import { COURSE_TOPICS, ABOUT_COURSE } from "./files/Topicos.tsx";
import './home.css';

function Home() {
    const navigate = useNavigate();

    return (
        <section>
            <button
                className='botaoLogin'
                style={{
                    backgroundColor: 'black',
                    marginLeft: '90%',
                    color: 'rgb(255, 153, 0)',
                    border: 'none',
                    fontSize: '20px'
                }}
                type="button"
                onClick={() => navigate('/login')}
            >
                Conectar-se
            </button>

            <div>
                <h1 className='textoInfo'>Informática</h1>
                <h2 className='sobreInfo'>Seja bem-vindo(a) ao melhor curso de todos!</h2>
            </div>

            <div className='linhaTracejada'></div>

            <div className='divisaoMaterias'>
                <h1 className='tituloIndice'>[ MÓDULOS ]</h1>
                <br />
                <div className='listaMaterias'>
                    {COURSE_TOPICS.map((topico, controlador) => (
                        <ul key={controlador}>
                            <li className='TituloTopico'>&gt; {topico.title}</li>
                        </ul>
                    ))}
                </div>
            </div>
            <div className={'informacao'}>
                {ABOUT_COURSE.map((topico) => (
                    <p className={'DescricaoTopico'} key={topico.title}>{topico.description}</p>
                ))}
            </div>
        </section>
    );
}

export default Home;
