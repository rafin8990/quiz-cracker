import React from 'react';
import './Home.css'
import picture from '../../picture.png'

const Home = () => {
    return (
        <div className='py-5 sm:block md:block lg:flex  items-center justify-around bg-emerald-200'>
            <div>
            <h1 className='text-4xl font-bold text-orange-800'>Do You Want to Become a Web-Developer?</h1>
            <h3 className='text-2xl text-gray-800'>If you want to be a developer, You will follow the following rules .</h3>
            <p className='text-2xl text-gray-600'>
            1. Earn Degree,
            2. Pursue Internship,
            3. Build Your Portfolio,
            4. Earn Certification,
            5. Create Your Resume
            </p>
            <p className='text-gray-600'>To Succesfully be a developer , please contact With us</p>
            <button className='text-2xl text-orange-800 mt-5 pl-5 pr-5 border-solid border-2 border-orange-800 rounded-2xl hover:bg-orange-800 hover:text-white'>About Us</button>
            <button className='text-2xl ml-5 text-orange-800 mt-5 pl-5 pr-5 border-solid border-2 border-orange-800 rounded-2xl hover:bg-orange-800 hover:text-white'>Contact</button>
            </div> 
            <div className='mt-10 md:mx-12'>
            <img src={picture} alt="" />
            </div>
            

        </div>
    );
};

export default Home;