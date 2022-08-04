import './custom-button.style.scss'

function CustomButton({ children, inverted,isGoogleSignIn }) {
    
    return (

        <button className={`${inverted ? "inverted" : ""} ${isGoogleSignIn ? "google-sign-in" : ""} custom-button`} >
            {children}
        </button>


    )
}

export default CustomButton;
