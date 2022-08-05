import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.style.scss'
import {useState} from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

function SignIn({history}) {
    const [body,setBody] = useState({
        email:"",
        password:"",
    })

    const handleChange = (event)=>{
        const {name,value} = event.target

        setBody({...body,[name]:value})
    }

    const handleSubmit = async (event)=>{
        event.preventDefault()
        await axios.post("https://e-commerce-backend-kellton.herokuapp.com/auth/signin",body)
        .then(res=>{
            if(res.data.message === "Successfully Logged In"){
                history.push("/success-sign-in")
            }
        })
        .catch(err=>{
           console.log(err)
        })
    }

    return (
        <div className="sign-in">
            <h2 className='title'>
                I already have an account
            </h2>
            <span>
                Sign in with your email and password
            </span>
            <form onSubmit={handleSubmit}>

                <FormInput value = {body.email} name='email' label='Email' handleChange={handleChange} />
                <FormInput value = {body.password} name='password' label='Password' handleChange={handleChange}/>
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

export default withRouter(SignIn);
