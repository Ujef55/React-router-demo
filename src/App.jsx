import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/Services';
import Services from './Pages/About';
import Contact from './Pages/Contact';
import AppLayout from './components/Layout/AppLayout';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/services',
          element: <Services />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: 'contact',
          element: <Contact />
        }
      ]
    },
  ]);


  return (
    <RouterProvider router={router} />
  )
}

export default App;