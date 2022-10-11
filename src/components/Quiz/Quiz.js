
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Quiz = ({quiz}) => {
    const {question,correctAnswer,options,id}=quiz

    
    const handleToast=(params)=>{
        console.log(params.correctAnswer)
         if(params.correctAnswer ===correctAnswer){
             toast("Answer is Right!");
         }
         else{
            toast("Answer is Wrong")
            
         }

    }
    
    return (
        <div className='mt-12'>
            <div className=' bg-emerald-200 border-solid border-2 border-gray-600 rounded-xl md:w-3/4 lg:w-2/4 mx-auto'>
            
                <h1 className='text-2xl'>Question:{question}</h1>
               <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
               {
                    options.map(option=><p className='text-orange-700 font-bold  bg-gray-200 m-2 p-4 rounded-xl'><input  onClick={()=>handleToast(quiz)} type="radio" name="html" id="html" /> {option}</p>)
                }
                <ToastContainer />
               </div>

            </div>
                
        </div>
    );
};

export default Quiz;