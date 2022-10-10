
import './App.css';
import Main from './Layouts/Main/Main';
import Home from './components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/home',
          element:<Home></Home>
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
