import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';

import { ParallaxBanner } from 'react-scroll-parallax';

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
            <ParallaxBanner

                layers={[
                    { image: 'https://th.bing.com/th/id/R.40d93e5d629c34354bd6bbc5c5a61d98?rik=1%2b47yHSi3OQ6Nw&riu=http%3a%2f%2fwww.blended-html.com%2fbackground-images%2fbi-background-black.png&ehk=oo%2fObYmjlQlU%2fZeUkDdkrR8ivwkNOvA9qBw1cqF3%2bOM%3d&risl=&pid=ImgRaw&r=0', speed: -20 },
                    {
                        speed: -15,
                        children: (
                            <div id='contack' className="absolute inset-0 flex  md:h-auto sm:p-8  items-center justify-center">
                                <div className="hero">
                                    <div className="hero-content">
                                        <div className="card  w-full md:w-[600px] lg:w-[600px]  shadow-2xl bg-opacity-80 bg-base-200">
                                            <div className="card-body w-full md:w-[600px] lg:w-[600px] ">
                                                <Form onSubmit={handleOnSubmit}>
                                                    <Form.Field
                                                        id='form-input-control-email'
                                                    control={Input}
                                                    label='Email'
                                                    name='user_email'
                                                    placeholder='Email…'
                                                    required
                                                    icon='mail'
                                                    iconPosition='left'
        />
                                                    <Form.Field
                                                        id='form-input-control-last-name'
                                                    control={Input}
                                                    label='Name'
                                                    name='user_name'
                                                    placeholder='Name…'
                                                    required
                                                    icon='user circle'
                                                    iconPosition='left'
        />
                                                    <Form.Field
                                                        id='form-textarea-control-opinion'
                                                    control={TextArea}
                                                    label='Message'
                                                    name='user_message'
                                                    placeholder='Message…'
                                                    required
        />
                                                    <Button type='submit' color='green'>Submit</Button>
                                            </Form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
    ),
                    },

                ]}
className = "aspect-[2/1.25] p-14 "
    />
        </>
    );
};

export default ContackMe;