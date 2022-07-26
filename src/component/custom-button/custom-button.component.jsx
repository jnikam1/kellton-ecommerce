import './custom-button.style.scss'

function CustomButton({ children, inverted,isGoogleSignIn,...otherProps }) {
    
    return (

        <button className={`${inverted ? "inverted" : ""} ${isGoogleSignIn ? "google-sign-in" : ""} custom-button`} {...otherProps} >
            {children}
        </button>


    )
}

export default CustomButton;
