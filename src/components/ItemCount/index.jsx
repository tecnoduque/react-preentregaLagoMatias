import { useState } from 'react'
import style from './style.module.css'


const Contador = () => {
    const [contar, setContar] = useState(1)

    const agregar= () => {
        setContar(contar + 1)
    }

    const restar = () => {
        (contar > 1) && setContar(contar - 1)
    }

    return (
        <>
            <button className={style["boton-opera"]} onClick={restar}>Quitar</button>
            <span className={style["cantidades"]}>{contar}</span>
            <button className={style["boton-opera"]}onClick={agregar}>Agregar</button>
            <button className={style["boton-submit"]}>Agregar al carrito</button>

        </>
    )
}

export default Contador