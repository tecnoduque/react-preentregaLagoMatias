/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import style from './style.module.css'

const Item = ({ producto }) => {

    return (

        <div className={style["tarjeta"]}>
            <img src={producto.img} alt={producto.nombre} />
            <h2>{producto.nombre}</h2>
            <h3>${producto.precio}</h3>
            <Link className={style["tarjeta-btn"]} to={`/item/${producto.id}`}>Ver más</Link>
            <h4>Categoría: {producto.categ}</h4>

        </div>
    )
}

export default Item