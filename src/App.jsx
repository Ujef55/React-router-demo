import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Movies from './components/Movies';
import Contact from './components/Contact';

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