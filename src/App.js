
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './Components/Home/Home';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Project from './Components/Home/Project';
import Blog from './Components/Blog/Blog';


const router=createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/project/:id',
        loader:({params})=>fetch(`https://morshed-protfello-server-morshed0099.vercel.app/project/${params.id}`) ,     
        element:<Project></Project>
      },     
      
    ]
  },
  {
    path:'/blog',
    element:<Blog></Blog>

  },
])

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className='max-w-[1200px] mx-auto'>
     
      <RouterProvider router={router}>
         
      </RouterProvider>
    </div>
  );
}

export default App;
