import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid'


const Quiz = ({ quiz }) => {
    const { question, correctAnswer, options } = quiz
    // console.log(correctAnswer)
const [answer, setAnswer]=useState('')

    const handleToast = (params) => {
        console.log(params.target.value);
        if (params.target.value === correctAnswer) {
            toast("Answer is Right!");
        }
        else {
            toast("OpS!!Answer is Wrong.Please Try again")

        }
    }
    const handleEyeIcon=(answer)=>{
       const rightAnswer=answer.correctAnswer
       setAnswer(rightAnswer)
    }

    return (
        <div className='mt-12'>
            <div className=' bg-emerald-200 border-solid border-2 border-gray-600 rounded-xl md:w-3/4 lg:w-2/4 mx-auto'>

                <h1 className='text-2xl'>Question:{question}</h1>
                <div className='flex justify-around mt-5'>
                <h1 className='text-2xl ml-5'> {answer}</h1>
                <div className='flex'>
                    <p>View Answer:</p>
                <EyeIcon onClick={()=>handleEyeIcon(quiz)} className="h-6 w-6 text-blue-500 ml-5"/>
                </div>
                </div>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
                    {
                        options.map(option => <label className='text-orange-700 font-bold  bg-gray-200 m-2 p-4 rounded-xl'>
                            <input onChange={handleToast}  type="radio" name='html' value={option} />
                            {option}
                        </label>)
                    }
                    <ToastContainer />
                </div>

            </div>

        </div>
    );
};

export default Quiz;

// 