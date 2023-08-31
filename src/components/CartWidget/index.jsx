import { MdOutlineRedeem } from 'react-icons/md';
import style from './style.module.css'



export const CartWidget = () => {
    return (
        <div className={style["carrito"]}>
            <MdOutlineRedeem />  
        </div>
    )
}

