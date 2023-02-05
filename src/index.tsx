import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Theme from './styles/themes';
import { ThemeProvider } from 'styled-components';
import Root from './pages/Root';
import Home from './pages/Home'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'



import {QueryClient, QueryClientProvider} from 'react-query';

const QUERY_CLIENT = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home/>,
      }
    ]
  },
])


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <>
    <QueryClientProvider client={QUERY_CLIENT} >
    <RouterProvider router={router} />
    </QueryClientProvider>
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
