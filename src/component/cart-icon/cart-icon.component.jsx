import './cart-icon.style.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'


function CartIcon() {
    


    return (
        <div className="cart-icon">
            <ShoppingIcon className='shopping-icon' />
            

        </div>
    );
}

export default CartIcon;
