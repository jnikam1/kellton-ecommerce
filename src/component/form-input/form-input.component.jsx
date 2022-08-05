import './form-input.style.scss'

function FormInput({ label,handleChange,...otherProps}) {
    console.log(otherProps.value)
    return (
        <div className="group">
            {
                label ? (<label className={`${otherProps.value ? 'shrink' : '' } form-input-label `}>{label}</label>) : null
            }
            <input className='form-input'
                type="text"
                onChange={handleChange}
                {...otherProps}
            />
        </div>
    );
}

export default FormInput;

