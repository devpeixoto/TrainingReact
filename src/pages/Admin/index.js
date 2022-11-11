import './style.css'
import { Header } from "../../components/Header"
import { Logo } from "../../components/logo"
import { Input } from "../../components/input"
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
                        <label className='label right'>Fundo do link</label>
                        <input 
                            type="color"
                        />
                    </div>
                </section>

            </form>
        </div>
    )
}