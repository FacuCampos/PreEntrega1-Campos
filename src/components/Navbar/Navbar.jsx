import './navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const Navbar = () => {
    return (
        <div className='navegador'>
            <img src="./src/assets/img/marca/logo-expandido.svg" alt="logo de la marca" className='logoNav'/>
            <ItemListContainer />
            <CartWidget />
        </div>
    )
}

export default Navbar