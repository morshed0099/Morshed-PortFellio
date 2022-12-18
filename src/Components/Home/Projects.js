import React from 'react';
import { Link } from 'react-router-dom';


const Projects = ({ project }) => {
    console.log(project)
    return (
        <div id='porjects' className='dark:bg-black'>
            <div className=' p-2 rounded-md shadow-lg' >
                <div className='image-wrap' >
                    <img className='w-full' src={project.img1} alt="" />
                </div>
                <div className='flex justify-between'>
                    <Link to={`/project/${project.id}`} ><button className='btn btn-outline mt-3  btn-primary text-center btn-sm'>Details</button></Link>
                    <a href={project.livesite}><button className='btn btn-outline mt-3  btn-primary text-center btn-sm'>Live site</button></a>
                    <a href={project.github}><button className='btn btn-outline mt-3  btn-primary text-center btn-sm'>Github</button></a>
                </div>
            </div>

        </div>
    );
};

export default Projects;