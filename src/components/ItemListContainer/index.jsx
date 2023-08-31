import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Item from "../Item"
import style from './style.module.css'


const ItemListContainer = () =>{
    const {id} = useParams ()
    const[productos, setProductos] = useState([])

    useEffect(() => {
        const traerProductos = async () => {
            const res = await fetch('../src/assets/excursiones.json')
            const prod = await res.json()

            const filtrarProducts = prod.filter(p => p.categ === id)
            if(filtrarProducts.length > 0) return setProductos(filtrarProducts)
            setProductos(prod)
        }

        traerProductos()
        
    }, [id])

    return(
        <div className={style["contenedor"]}>
          {productos?.map(prod => <Item producto={prod} key={prod.id}/>
            )}
        </div>
    )
}

export default ItemListContainer