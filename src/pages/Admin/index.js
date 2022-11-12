import './style.css'
import { Header } from "../../components/Header"
import { Logo } from "../../components/logo"
import { Input } from "../../components/input"

import { MdAddLink} from 'react-icons/md'
import { FiTrash2 } from 'react-icons/fi'

export default function Admin(){
    return(
        <div className="admin-container">
            <Header />
            <Logo />

            <form className='form'>
                <label className='label'>Nome do Link</label>
                <Input 
                    placeholder="Nome do Link..."
                />
                <label className='label'>Url do Link</label>
                <Input 
                    type="url"
                    placeholder="Digite a url..."
                />
                
                <section className='container-colors'>
                    <div>
                        <label className='label right'>Fundo do link</label>
                        <input 
                            type="color"
                        />
                    </div>
                    <div>
                        <label className='label right'>Cor do link</label>
                        <input 
                            type="color"
                        />
                    </div>
                </section>

                <button className='btn-register' type='submit'>
                    Cadastrar <MdAddLink size={24} color='#fff'/>
                </button>

            </form>

            <h2 className='title'>
                Meus Links
            </h2>

            <article className='list'>
                <p>Grupo Exclusivo no Telegram</p>
                <div>
                    <button>
                        <FiTrash2 size={18} color='#fff' />
                    </button>
                </div>

            </article>
        </div>
    )
}