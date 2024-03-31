import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import LoginPage from './component/login/LoginPage';
import RegisterPage from './component/login/RegisterPage';
import HomePage from './component/home/HomePage';

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },{
      path:"/home",
      element:<HomePage/>
    }
  ])
  return (
    <RouterProvider router={route}></RouterProvider>
  );
}

export default App;
