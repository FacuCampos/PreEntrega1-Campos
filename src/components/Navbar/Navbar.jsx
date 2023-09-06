import './navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { House, Shop, CupHot, Bag } from 'react-bootstrap-icons';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const Navbar = () => {
    return (
        <div className='navegador'>
            <img src="./src/assets/img/marca/logo-expandido.svg" alt="logo de la marca" className='logoNav'/>
            <div className='navList'>
                <a href="#">
                    <div>
                        <House color='white' size={20}/>
                        <p>
                            Inicio
                        </p>
                    </div>
                </a>
                <a href="#">
                    <div>
                        <Bag color='white' size={20}/>
                        <p>
                            Tienda
                        </p>
                    </div>
                </a>
                <a href="#">
                    <div>
                        <CupHot color='white' size={20}/>
                        <p>
                            Contacto
                        </p>
                    </div>
                </a>
                <a href="#">
                    <div>
                        <Shop color='white' size={20}/>
                        <p>
                            Nosotros
                        </p>
                    </div>
                </a>
            </div>
            <CartWidget />
        </div>
    )
}

export default Navbar