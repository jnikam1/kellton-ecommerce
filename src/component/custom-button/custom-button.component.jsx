import './custom-button.style.scss'

function CustomButton({ children, inverted,isGoogleSignIn }) {
    console.log({ children })
    return (

        <button className={`${inverted ? "inverted" : ""} ${isGoogleSignIn ? "google-sign-in" : ""} custom-button`} >
            {children}
        </button>


    )
}

export default CustomButton;
