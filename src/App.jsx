import { createBrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';

function App() {
const router = createBrowserRouter([
{
  path: "/",
  element: <Home />
}
])
  

  return (
    <>
      
    </>
  )
}

export default App;
