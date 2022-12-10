import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './Components/Home/Home';
import ContackMe from './Components/Home/ContackMe';

const router=createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router}>
         
      </RouterProvider>
    </div>
  );
}

export default App;
