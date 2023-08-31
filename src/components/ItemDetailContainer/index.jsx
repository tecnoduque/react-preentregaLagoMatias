
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {ItemDetail} from "../ItemDetail"
import style from './style.module.css'

const ItemDetailContainer = () => {
    const [contenido, setDetalle] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const traerProductos = async () => {
            const res = await fetch('../src/assets/excursiones.json')
            const prod = await res.json()
//parseInt
            const findProduct = prod.find(p => p.id === parseInt(id))

            setDetalle(findProduct)
        }
        traerProductos()
    }, [id])



    return (
        <div className={style["contenedor"]}>
            <ItemDetail detalle={contenido} />
        </div>
    )
}

export default ItemDetailContainer