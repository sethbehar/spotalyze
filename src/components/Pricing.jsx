import React from 'react';

export default function Pricing() {
  return (
    <section className="mb-20">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-3">
        Want More Uploads?
      </h2>
      <p className="text-gray-600 text-center mb-8">Buy credits to continue uploading as you need.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-md mx-auto">
        {/* Free Plan */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200">
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Free</h3>
            <p className="text-sm text-gray-500 mb-4">1 free file upload</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-800"><span className='text-2xl align-text-top'>$</span>0</span>
            </div>
            <ul className="space-y-2 mb-6 text-left">
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <img src='./check.svg' width={25} height={25}/>
                </div>
                <span className="text-gray-700 text-sm">Limited insights</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <img src='./check.svg' width={25} height={25}/>
                </div>
                <span className="text-gray-700 text-sm">Free</span>
              </li>
            </ul>
            <button className="cursor-pointer w-full py-2 text-green-600 border border-green-600 rounded-lg hover:bg-green-50 transition-colors duration-300 text-sm">
              Sign Up For Free
            </button>
          </div>
        </div>
        {/* Paid Plan */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden text-black">
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold mb-2">3 Credits</h3>
            <p className="text-sm text-black mb-4">3 file uploads</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-green-950"><span className='text-2xl align-text-top'>$</span>2.99</span>
            </div>
            <ul className="space-y-2 mb-6 text-left ">
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full  flex items-center justify-center mr-3">
                  <img src='./check.svg' width={25} height={25}/>
                </div>
                <span className="text-sm">Advanced insights</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full flex items-center justify-center mr-3">
                  <img src='./check.svg' width={25} height={25}/>
                </div>
                <span className="text-sm">3 file uploads</span>
              </li>
            </ul>
            <button className="w-full py-2 bg-green-800 text-white rounded-lg hover:bg-white hover:text-green-900 cursor-pointer transition-colors duration-300 font-medium text-sm">
              Get Credits
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
