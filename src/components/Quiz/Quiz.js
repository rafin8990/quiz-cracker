
import React from 'react';


const Quiz = ({quiz}) => {
    const {question,correctAnswer,id,options}=quiz
    return (
        <div className='mt-12'>
            <div className=' bg-emerald-200 border-solid border-2 border-gray-600 rounded-xl md:w-3/4 lg:w-2/4 mx-auto'>
                <h1 className='text-2xl'>Question: {question}</h1>
               <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
               {
                    options.map(option=><p className='text-orange-700 font-bold  bg-white m-2 p-4 rounded-xl'><input type="radio" value='quiz'/> {option}</p>)
                }
               </div>

            </div>

        </div>
    );
};

export default Quiz;