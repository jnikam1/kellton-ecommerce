import React from 'react';
import './header.style.scss'
import { ReactComponent as Logo } from '../../assets/crwns.svg'
import { Link } from 'react-router-dom'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-drop-down/cart-drop-down.component';
import { useState } from 'react'


function Header() {

    const [hidden, setHidden] = useState(false)

    cartDropDown = () =>{
        setHidden(!hidden)
    }
    return (
        <div className="header">
            <Link className='logo-container' to='/'>
                <div className='logo'>
                    <Logo />
                </div>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    Shop
                </Link>
                <Link className='option' to='/auth'>
                    Sign In
                </Link>
                <Link className='option' to='/contact'>
                    Contact
                </Link>
                <CartIcon />

            </div>
            <CartDropDown>
                {/* <div `${hidden ? "hidden" : null}`>

                </div> */}
            </CartDropDown>
            

        </div>
    );
}

export default Header;
