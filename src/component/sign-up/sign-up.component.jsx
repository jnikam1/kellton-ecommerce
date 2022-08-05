import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-up.style.scss'
import axios from 'axios';

function SignUp({history}) {

    const [body,setBody] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const handleChange = (event)=>{
        const {name,value} = event.target

        setBody({...body,[name]:value})
    }

    const handleSubmit = async (event)=>{
        event.preventDefault()
        await axios.post("https://e-commerce-backend-kellton.herokuapp.com/auth/signup",body)
        .then(res=>{
            if(res.data.message === "Signed Up Successfully"){
                history.push("/success")
            }
        })
        .catch(err=>{
           console.log(err)
        })
    }
    // console.log(body)
    return (
        <div className="sign-up">
            <h2 className='title'>
                I do not have an account
            </h2>
            <span>
                Sign up with email and password
            </span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput value = {body.name} name='name' label='Display Name' handleChange={handleChange}/>
                <FormInput value = {body.email} name='email' label='Email' handleChange={handleChange}/>
                <FormInput value = {body.password} name='password' label='Password'handleChange={handleChange}/>
                <FormInput value = {body.confirmPassword} name='confirmPassword' label='Confirm Password'handleChange={handleChange}/>
                <CustomButton type='submit'>
                    SIGN UP
                </CustomButton>
            </form>
        </div>
    );
}

export default withRouter(SignUp);
