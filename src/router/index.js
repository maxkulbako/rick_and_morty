/* eslint-disable import/no-extraneous-dependencies */
import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '../components/MainPage/MainPage';
import { Character } from '../components/Character/Character';
import { ErrorPage } from './ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />
  },
  {
    path: 'characters/',
    element: <Character />,
    children: [
      {
        path: ':characterId',
        element: <Character />
      }
    ]
  }
]);
