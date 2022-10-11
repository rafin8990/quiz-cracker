import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const QuizDetails = () => {
    const quizDetails=useLoaderData()
    
    // console.log(quizDetails.data)
    return (
        <div>
            <div>
                <h1 className='text-4xl font-bold text-orange-800'>Quiz Name: {quizDetails.data.name}</h1>
            </div>

            {
                quizDetails.data.questions.map(quiz=><Quiz
                key={quiz.id}
                quiz={quiz}
                ></Quiz>)
            }
        </div>
    );
};

export default QuizDetails;