import React from 'react';
import {  useRouteError } from 'react-router-dom';

const Error = () => {
    const error=useRouteError()
    console.log(error)
    return (
        <div className='flex flex-col justify-center items-center h-96'>
            <div className='mx-auto'>
            <h1 className='text-4xl'>Ops! An error ocurred</h1>
            <p>Status:{error.status}</p>
            <p>page:{error.statusText}</p>
        </div>
        
        </div>
    );
};

export default Error;