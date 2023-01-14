import { useState } from 'react'
import './style.css'

import { Header } from '../../components/Header'
import { Input } from '../../components/input'
import { MdAddLink } from 'react-icons/md'
import { async } from '@firebase/util'

import { db } from '../../services/firebaseConnection'
import {
    setDoc,
    doc,
    getDoc,
} from 'firebase/firestore'

export default function Networks () {
    const [facebook, setFacebook] = useState("")
    const [instagram, setInstagram] = useState("")
    const [youtube, setYoutube] = useState("")

     
    
    function handleSave(e){
        e.preventDefault();

        setDoc(doc(db, "social", "link"), {
            facebook: facebook,
            instagram: instagram,
            youtube: youtube
        })
        .then(() => {
            console.log("Urls salvas com sucesso!")
        })
        .catch((error) => {
            console.log("ERRO AO SALVAR" + error)
        })
    }

    return (
        <div className='admin-container'>
            <Header />

            <h1 className='title-social '>Suas redes Sociais</h1>

            <form className='form' onSubmit={handleSave}>
                <label className='label'>Link do Facebook</label>
                <Input
                    placeholder="Digite a url do facebook..."
                    value={facebook}
                    onChange={ (e) => setFacebook(e.target.value)}
                />
                <label className='label'>Link do Instagram</label>
                <Input
                    placeholder="Digite a url do Instagram..."
                    value={instagram}
                    onChange={ (e) => setInstagram(e.target.value)}
                />
                <label className='label'>Link do Youtube</label>
                <Input
                    placeholder="Digite a url do Youtube..."
                    value={youtube}
                    onChange={ (e) => setYoutube(e.target.value)}
                />

                <button type="submit" className="btn-register">
                    Salvar links <MdAddLink size={24} color="#fff" />
                </button>
            </form>
        </div>
    )
}