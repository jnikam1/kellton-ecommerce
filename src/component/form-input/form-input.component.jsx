import './form-input.style.scss'

function FormInput({ label }) {
    return (
        <div className="group">
            {
                label ? (<label className='form-input-label'>{label}</label>) : null
            }
            <input className='form-input'
                type="text"
                name='displayName'

            />
        </div>
    );
}

export default FormInput;
