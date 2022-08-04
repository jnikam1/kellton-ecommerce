import './cart-icon.style.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'


function CartIcon({cartDropChange}) {
    return (
        <div className="cart-icon" onClick={cartDropChange}>
            <ShoppingIcon className='shopping-icon' />
            

        </div>
    );
}

export default CartIcon;
