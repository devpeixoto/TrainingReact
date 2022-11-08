import './style.css'

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
            </main>
        </div>
    )
}