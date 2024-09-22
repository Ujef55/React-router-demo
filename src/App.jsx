import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Movies from './Pages/Movies';
import Contact from './Pages/Contact';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/movies',
      element: <Movies />
    },
    {
      path: 'montact',
      element: <Contact />
    }
  ]);


  return (
    <RouterProvider router={router} />
  )
}

export default App;