
import './App.css';
import Main from './Layouts/Main/Main';
import Home from './components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import Statictics from './components/Statictics/Statictics';
import QuizDetails from './components/QuizDetails/QuizDetails';
import Error from './components/Error/Error';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      errorElement:<Error></Error>,
      children:[
        {
          path:'/',
          loader:()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element:<Home></Home>
        },
        {
          path:'/home',
          loader:()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element:<Home></Home>
        },
        {
          path:'/CartDetails/:cartId',
          loader:async({params})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.cartId}`)
          }
         ,
          element:<QuizDetails></QuizDetails>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/statictics',
          element:<Statictics></Statictics>
        }
       
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
