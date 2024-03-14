import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import LoginPage from './component/login/LoginPage';
import RegisterPage from './component/login/RegisterPage';
import { RouterProvider } from 'react-router';

function App() {
  const route = createBrowserRouter([
    {
      path: "/login",
      element: <LoginPage />
    },
    {
      path: "/register",
      element: <RegisterPage />,
    }
  ])
  return (
    <RouterProvider router={route}>
    </RouterProvider>

  );
}

export default App;
