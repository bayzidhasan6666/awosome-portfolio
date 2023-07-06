import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Library from './components/Library/Library.jsx';
import AddBooks from './components/Library/AddBooks.jsx';
import Details from './components/Library/Details.jsx';
import UpdateBook from './components/Library/UpdateBook.jsx';

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating page loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

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

  return (
    <React.StrictMode>
      {isLoading ? (
        <div className="h-screen flex items-center justify-center">
          <span className="loading loading-infinity text-red-500 loading-lg"></span>
        </div>
      ) : (
        <div className="loader bg-[#212428] p-3 md:p-5">
          <RouterProvider router={router} />
        </div>
      )}
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
