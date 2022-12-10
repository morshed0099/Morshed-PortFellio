import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

const ContackMe = () => {
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
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Email</span>
                                                    </label>
                                                    <input type="text" placeholder="email" className="input input-bordered" />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Your Message</span>
                                                    </label>
                                                    <textarea name='message' className="textarea textarea-bordered" placeholder="Type Your Message"></textarea>
                                                    
                                                </div>
                                                <div className="form-control mt-6">
                                                    <button className="btn btn-sm btn-primary">Send</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ),
                    },

                ]}
                className="aspect-[2/1.25] p-14 "
            />
        </>
    );
};

export default ContackMe;