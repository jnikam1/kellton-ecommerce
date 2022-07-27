import './custom-button.style.scss'

function CustomButton({ children, inverted }) {
    console.log({ children })
    return (

        <button className={`${inverted ? "inverted" : ""} custom-button`} >
            {children}
        </button>


    )
}

export default CustomButton;
