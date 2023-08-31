import ItemCount from '../ItemCount'
import style from './style.module.css'
import 'bootstrap/dist/css/bootstrap.css'


export const ItemDetail = ({ detalle }) => {
    return (
        <div className={style["tarjeta"]}>
            <img src={detalle.img} />
            <h2>{detalle.nombre}</h2>
            <p>{detalle.comentario}</p>
            <div className={style["cantidad"]}>
                <div>
                    <ItemCount  />
                </div>
            </div>
        </div>
    )
}

