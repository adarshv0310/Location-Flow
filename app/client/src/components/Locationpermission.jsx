import React from 'react'

function Locationpermission() {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center px-4 sm:px-0">
      <div className="bg-white rounded-lg p-6 sm:p-8 w-full max-w-md text-center shadow-lg">
        <div className="flex justify-center items-center mb-4">
          <div className="bg-red-500 rounded-full p-4 sm:p-5">
            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
            </svg>
          </div>
        </div>
        <h2 className="text-lg sm:text-xl font-semibold mb-2">Location permission is off</h2>
        <p className="text-gray-600 mb-4 text-sm sm:text-base">
          We need your location to find the nearest store & provide you a seamless delivery experience.
        </p>
        <button
         onClick={onEnableLocation}
          className="w-full bg-red-500 text-white py-2 sm:py-3 rounded-lg font-semibold mb-3 hover:bg-red-600"
        >
          Enable Location
        </button>
        <button
          onClick={onManualSearch}
          className="w-full border border-red-500 text-red-500 py-2 sm:py-3 rounded-lg font-semibold hover:bg-red-50"
        >
          Search your Location Manually
        </button>
      </div>
    </div>
  )
}

export default Locationpermission
