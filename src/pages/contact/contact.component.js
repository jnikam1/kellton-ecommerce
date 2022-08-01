import CustomButton from '../../component/custom-button/custom-button.component';
import FormInput from '../../component/form-input/form-input.component';
import './contact.style.scss'

function Contact() {
    return (
        <div className="contact">
            <h2 className='title'>
                Contact Us
            </h2>
            <span>
                Send us email and we will get back to you
            </span>
            <form>
                
                <FormInput label='Name' />
                <FormInput label='Email' />
                <FormInput label='Write something'/>
                <div>
                    <CustomButton>
                        Send
                    </CustomButton>
                </div>
            </form>
        </div>
    );
}

export default Contact;
