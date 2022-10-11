import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const QuizDetails = () => {
    const quizDetails=useLoaderData()
    console.log(quizDetails.data.questions)
    return (
        <div>
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