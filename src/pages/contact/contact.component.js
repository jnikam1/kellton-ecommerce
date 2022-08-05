import CustomButton from '../../component/custom-button/custom-button.component';
import FormInput from '../../component/form-input/form-input.component';
import './contact.style.scss'
import {useState} from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

function Contact({history}) {
    const [body,setBody] = useState({
        name:"",
        email:"",
        message:""
    })

    const handleChange = (event)=>{
        const {name,value} = event.target

        setBody({...body,[name]:value})
    }

    const handleSubmit = async (event)=>{
        event.preventDefault()
        await axios.post("https://e-commerce-backend-kellton.herokuapp.com/contact/contact",body)
        .then(res=>{
            if(res.data.message === "Message sent successfully"){
                history.push("/success-contact")
            }
        })
        .catch(err=>{
           console.log(err)
        })
    }

    return (
        <div className="contact">
            <h2 className='title'>
                Contact Us
            </h2>
            <span>
                Send us email and we will get back to you
            </span>
            <form onSubmit={handleSubmit}>
                
                <FormInput value = {body.name} name='name' label='Name' handleChange={handleChange} />
                <FormInput value = {body.email} name='email' label='Email' handleChange={handleChange}/>
                <FormInput value = {body.message} name='message' label='Write something' handleChange={handleChange}/>
                <div>
                    <CustomButton>
                        Send
                    </CustomButton>
                </div>
            </form>
        </div>
    );
}

export default withRouter(Contact);
