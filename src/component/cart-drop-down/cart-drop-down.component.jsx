import CustomButton from '../custom-button/custom-button.component';
import './cart-drop-down.style.scss'


function CartDropDown() {
    return (
        <div className="cart-dropdown">
            <div className='cart-items'>
                <span className='empty-message'>
                    Your cart is empty
                </span>
            </div>
            <CustomButton>
                GO TO CHECKOUT
            </CustomButton>
            
        </div>
    );
}

export default CartDropDown;
