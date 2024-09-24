import React from 'react';
import { useRouteError } from 'react-router-dom';
import { BiSolidError } from "react-icons/bi";


function Error() {

  const error = useRouteError();
  console.log(error.status);

  let errorContent;

  if (error.status === 404) {
    errorContent = <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg text-center">
        <BiSolidError className='text-red-700 text-8xl mx-auto mb-8' />
        <h2 className="text-2xl font-bold mb-4">Oops! Something went wrong.</h2>
        <p className="text-gray-700 mb-8">The page you're looking for might have been removed or doesn't exist.</p>
        <div className="flex justify-center space-x-2">
          <button
            onClick={() => window.history.back()}
            className="text-black px-4 py-2"
          >
            Go Back
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded inline-flex items-center text-sm sm:text-base "          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  }

  return (
    <>
      {errorContent}
    </>
  )
}

export default Error;