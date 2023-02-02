import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, TextArea } from 'semantic-ui-react';
import Swal from 'sweetalert2';



const ContackMe = () => {
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
    const USER_ID = process.env.REACT_APP_USER_ID
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully'
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Ooops, something went wrong',
                    text: error.text,
                })
            });
        e.target.reset()
    }
    return (
        <>
            <div id='contack' className=" flex  items-center justify-center">
                <div className="hero ">
                    <div className="hero-content">
                        <div className="card  w-full md:w-[600px] lg:w-[600px]  shadow-2xl border border-light  bg-white dark:bg-black">
                            <div className="card-body w-full md:w-[600px] lg:w-[600px] ">
                                <h3 className='text-3xl font-bold text-center dark:text-white '>Send Your Message</h3 >
                                <Form onSubmit={handleOnSubmit}>
                                    <lebel className='text-1xl font-bold text-black dark:text-white'>Email</lebel>
                                    <div className='mb-3'>
                                        <input type='email'
                                            className='w-full  input input-bordered'
                                            control={Input}
                                            label='Email'
                                            name='user_email'
                                            placeholder='Email…'
                                            required
                                            icon='mail'
                                            iconPosition='left'
                                        />
                                    </div>
                                    <div className='mb-3'>
                                        <lebel className='text-1xl  font-bold text-black dark:text-white'>Name</lebel>
                                        <input type='text'
                                            className='w-full mt-3 input input-bordered'
                                            control={Input}
                                            label='Name'
                                            name='user_name'
                                            placeholder='Name…'
                                            required
                                            icon='user circle'
                                            iconPosition='left'
                                        />
                                    </div>
                                    <lebel className='text-1xl font-bold text-black dark:text-white'>Message</lebel>
                                    <Form.Field
                                        id='form-textarea-control-opinion'
                                        control={TextArea}
                                        name='user_message'
                                        placeholder='Message…'
                                        required
                                    />
                                    <div>
                                     <button className='btn btn-sm w-full bg-indigo-600 border-none '>Send</button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default ContackMe;