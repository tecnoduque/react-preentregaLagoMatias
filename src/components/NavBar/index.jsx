import { Link } from 'react-router-dom'
import {CartWidget} from '../CartWidget'
import style from './style.module.css'
import logo from '../../assets/logo.jpg'

const NavBar = () => {
    return (
        <div className={style['contenedor-navbar']}>
            <div className={style['contenedor-logo']}>
                <Link to='/'>
                    <img src={logo} alt="glaciar.ar" />
                </Link>
            </div>
            <div className={style['contenedor-menu']}>
                <ul>
                    <li><Link className={style['categ']} to='categ/*'>Todas las categ</Link></li>
                    <li><Link className={style['categ']} to='categ/Aventura'>Aventura</Link></li>
                    <li><Link className={style['categ']} to='categ/Naturaleza'>Naturaleza</Link></li>
                    <li><Link className={style['categ']} to='categ/Navegacion'>Navegación</Link></li>
                </ul>
                <div className='contenedor-carrito'>
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}


export default NavBar