import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Project = () => {
    const product = useLoaderData()
    console.log(product[0],'line 6');

    const {des_1,des_2,des_3,description,github,img1,img2,img3,livesite,name,tecnology_used}=product[0]
   

    return (
        <div className='mx-8'>
            <h2 className='text-2xl font-bold mt-3'>Name: {name} </h2>
            <p>Details: {description}</p>
            <p className='text-1xl font-bold'>* {des_1}</p>
            <p className='text-1xl font-bold'>* {des_2}</p>
            <p className='tex-1xl font-bold'>* {des_3}</p>

            <h4 className='text-1xl mt-5 text-center font-bold'>Photo</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
               
                <div className='p-2 m-3 rounded shadow-lg'>
                    <img src={img1} alt="" />
                </div>
                <div>
                    <img src={img2} alt="" />
                </div>
                <div>
                    <img src={img3} alt="" />
                </div>
            </div>
            <p className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400  to-blue-600'>Tecnology Used : {tecnology_used}</p>
            <div className='text-center m-3'>
            <a  href={github}><button className='btn mr-3 mt-3 btn-outline btn-primary'>GtihubLink</button></a>
            <a href={livesite}><button className='btn mt-3 btn-outline btn-primary'>LiveSiteLink</button></a>
            </div>
        </div>
    );
};

export default Project;