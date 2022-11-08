import './style.css'

import { Social } from '../../components/social'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

export default function Home(){
    return(
        <div className="home-container">
            <h1>Peixoto's Develop</h1>
            <span>Veja meus links 👇</span>

            <main className="links">
                <section className="link-area">
                    <a href="#">
                        <p className="link-text">Canal YouTube</p>
                    </a>
                </section>
                <section className="link-area">
                    <a href="#">
                        <p className="link-text">Grupo Privado telegram</p>
                    </a>
                </section>
                <section className="link-area">
                    <a href="#">
                        <p className="link-text">Treinamento Fábrica de websites</p>
                    </a>
                </section>

                <footer>
                    <Social url="https://facebook.com">
                        <FaFacebook size={35} color="#fff" />
                    </Social>
                    <Social url="https://youtube.com">
                        <FaYoutube size={35} color="#fff" />
                    </Social>
                    <Social url="https://instagram.com/peixotogp">
                        <FaInstagram size={35} color="#fff" />
                    </Social>
                </footer>
            </main>
        </div>
    )
}