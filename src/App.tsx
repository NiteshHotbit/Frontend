import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './components/pages/Login';
import { Register } from './components/pages/Register';

const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: '/register', element: <Register /> },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
