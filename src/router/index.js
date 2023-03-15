/* eslint-disable import/no-extraneous-dependencies */
import { createBrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MainPage } from '../components/MainPage/MainPage';
import { Character } from '../components/Character/Character';
import { ErrorPage } from './ErrorPage';
import { Auth } from '../components/Auth/Auth';
import App from '../App';

function CurrentPage() {
  const activeUser = useSelector((state) => state.auth.activeUser);
  return activeUser ? <MainPage /> : <Auth />;
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <CurrentPage />
      },
      {
        path: 'characters/:characterId',
        element: <Character />
      }
    ]
  }
]);
