import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './screens/home/home';
import {Header} from './components/header';
import Contact from './screens/contact/contact';
import About from './screens/about/about';
import Error from './screens/error/error';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  }
])

export default <RouterProvider router={appRouter} />;
