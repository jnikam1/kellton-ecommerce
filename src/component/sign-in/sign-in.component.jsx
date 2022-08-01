import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.style.scss'

function SignIn() {
    return (
        <div className="sign-in">
            <h2 className='title'>
                I already have an account
            </h2>
            <span>
                Sign in with your email and password
            </span>
            <form>

                <FormInput label='Email' />
                <FormInput label='Password' />
                <div className='buttons'>
                    <CustomButton>
                        SIGN IN
                    </CustomButton>
                    <CustomButton isGoogleSignIn='true'>
                        SIGN IN WITH GOOGLE
                    </CustomButton>

                </div>
            </form>
        </div>
    );
}

export default SignIn;
