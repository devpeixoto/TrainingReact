import './style.css'
export function Social({ children, url }){
    return(
        //_blank é para abrir uma nova aba
        <a className='social' href={url} rel="noopener noreferrer" target="_blank">
            {children}
        </a>
    )
}