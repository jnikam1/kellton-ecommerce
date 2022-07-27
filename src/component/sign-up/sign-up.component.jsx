import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-up.style.scss'

function SignUp() {
    return (
        <div className="sign-up">
            <h2 className='title'>
                I do not have an account
            </h2>
            <span>
                Sign up with email and password
            </span>
            <form className='sign-up-form'>
                <FormInput label='Display Name'/>
                <FormInput label='Email'/>
                <FormInput label='Password'/>
                <FormInput label='Confirm Password'/>
                <CustomButton>
                    SIGN UP
                </CustomButton>
            </form>
        </div>
    );
}

export default SignUp;
