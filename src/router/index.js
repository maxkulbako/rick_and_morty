import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '../components/MainPage/MainPage';
import { Character } from '../components/Character/Character';
import { ErrorPage } from './ErrorPage';
import App from '../App';
import { Auth } from '../components/Auth/Auth';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <MainPage />
      },
      {
        path: 'characters/:characterId',
        element: <Character />
      },
      {
        path: '/login',
        element: <Auth />
      }
    ]
  }
]);
