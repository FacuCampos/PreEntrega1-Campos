import './cartWidget.css';
import { Basket3Fill } from 'react-bootstrap-icons';

const cartWidget = () => {
    return (
        <div className='carrito'>
            <a className='divCart'>
                <Basket3Fill className='cartIcon' color='white' size={30}/>
                <div className='contador'>
                    <p>
                        5
                    </p>
                </div>
            </a>
        </div>
    )
}

export default cartWidget;