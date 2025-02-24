import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import AboutProduct from './pages/AboutProduct';
import AboutInnovator from './pages/AboutInnovator';
import Showcase from './pages/Showcase';
import AdditionalResources from './pages/AdditionalResources';
import Contact from './pages/Contact';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <AboutProduct /> },
        { path: "innovator", element: <AboutInnovator /> },
        { path: "showcase", element: <Showcase /> },
        { path: "resources", element: <AdditionalResources /> },
        { path: "contact", element: <Contact /> }
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
