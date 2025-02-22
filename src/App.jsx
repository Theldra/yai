import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import RootLayout from './layouts/RootLayout';

function App() {
const router = createBrowserRouter([
{
  path: "/",
  element: <RootLayout />, 
  children: [{ index:true, element: <Home /> }],
}, 
]);
  

  return (
    <>
     <RouterProvider router={router} />
    </>
  );
}

export default App;
