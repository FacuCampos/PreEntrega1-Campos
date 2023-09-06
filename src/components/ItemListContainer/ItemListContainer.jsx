import './itemListContainer.css'
import { House, Shop, CupHot, Bag } from 'react-bootstrap-icons';

const ItemListContainer = () => {
    return(
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
    )
}

export default ItemListContainer