import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import LoginPage from './component/login/LoginPage';
import RegisterPage from './component/login/RegisterPage';
import HomePage from './component/home/HomePage';

function App() {
  const route = createBrowserRouter([
    {
      path: "/login",
      element: <LoginPage />
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },{
      path:"/",
      element:<HomePage/>
    }
  ])
  return (
    <RouterProvider router={route}></RouterProvider>
  );
}

export default App;
