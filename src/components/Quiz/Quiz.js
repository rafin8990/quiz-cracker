import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid'


const Quiz = ({ quiz }) => {
    const { question, correctAnswer, options } = quiz
    // console.log(correctAnswer)


    const handleToast = (params) => {
        console.log(params.target.value);
        if (params.target.value === correctAnswer) {
            toast("Answer is Right!");
        }
        else {
            toast("Answer is Wrong")

        }
    }
    const handleEyeIcon=()=>{
        handleToast()

    }

    return (
        <div className='mt-12'>
            <div className=' bg-emerald-200 border-solid border-2 border-gray-600 rounded-xl md:w-3/4 lg:w-2/4 mx-auto'>

                <h1 className='text-2xl'>Question:{question}</h1>
                <EyeIcon  className="h-6 w-6 text-blue-500"/>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
                    {
                        options.map(option => <label className='text-orange-700 font-bold  bg-gray-200 m-2 p-4 rounded-xl'>
                            <input onChange={handleToast} type="radio" name='html' value={option} />
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
// import React from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { EyeIcon } from '@heroicons/react/24/solid'


// const Quiz = ({quiz}) => {
//     const {question,correctAnswer,options,id}=quiz
//     // console.log(correctAnswer)

    
//     const handleToast=(params)=>{
        
//          if(params.target.value===correctAnswer){
//              toast("Answer is Right!");
//          }
//          else{
//             toast("Answer is Wrong")
            
//          }

//     }
    
//     return (
//         <div className='mt-12'>
//             <div className=' bg-emerald-200 border-solid border-2 border-gray-600 rounded-xl md:w-3/4 lg:w-2/4 mx-auto'>
            
//                 <h1 className='text-2xl'>Question:{question}</h1>
//                 <EyeIcon  className="h-6 w-6 text-blue-500"/>
//                <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
//                {
//                     options.map(option=><label className='text-orange-700 font-bold  bg-gray-200 m-2 p-4 rounded-xl'>
//                         <input onChange={()=>handleToast()} type="radio" name='html' value={option} />
//                        {option}
//                       </label>)
//                 }
//                 <ToastContainer />
//                </div>

//             </div>
                
//         </div>
//     );
// };

// export default Quiz;
// className='text-orange-700 font-bold  bg-gray-200 m-2 p-4 rounded-xl'
// 