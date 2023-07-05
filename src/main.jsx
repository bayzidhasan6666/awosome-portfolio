import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Library from './components/Library/Library.jsx';
import AddBooks from './components/Library/AddBooks.jsx';
import Details from './components/Library/Details.jsx';
import UpdateBook from './components/Library/UpdateBook.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
  },
  {
    path: '/library',
    element: <Library></Library>,
  },
  {
    path: '/addBooks',
    element: <AddBooks></AddBooks>,
  },
  {
    path: '/details/:id',
    element: <Details></Details>,
  },
  {
    path: '/edit/:id',
    element: <UpdateBook></UpdateBook>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="loader bg-[#212428] p-3 md:p-5">
      {' '}
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
