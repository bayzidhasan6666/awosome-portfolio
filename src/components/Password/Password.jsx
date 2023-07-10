import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Header from '../Header';

const Password = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true); // Set loading state

    // Simulate asynchronous password validation
    setTimeout(() => {
      const password = event.target.password.value;

      if (password === 'ai') {
        setIsPasswordCorrect(true);
      } else {
        Swal.fire('Error', 'Incorrect password', 'error');
      }

      setIsLoading(false); // Reset loading state
    }, 1000);
  };

  return (
    <>
      <section className="h-screen ">
        <div className=''>
          {' '}
          <div className=" mx-auto px-4 sm:px-6 lg:px-8 rounded-lg shadow-2xl p-8 neu">
            {!isPasswordCorrect ? (
              <form className="space-y-6" onSubmit={handleFormSubmit}>
                <div className="flex flex-col">
                  <label htmlFor="password" className="text-white tg mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="bg-[#191b1e] rounded-lg p-3"
                    placeholder="Enter your password"
                    name="password"
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="nbtn shadow-xl w-full py-4 px-4 rounded-lg"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </form>
            ) : (
              children
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Password;
