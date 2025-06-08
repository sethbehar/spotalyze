import { SignInButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export default function Pricing() {

  const { user } = useUser()

  return (
    <section className="mb-20">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-3">Want More Uploads?</h2>
      <p className="text-gray-600 text-center mb-20">Buy credits to continue uploading as you need.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto items-center">
        {/* Free Plan */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200 transform scale-105">
          <div className="p-8 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Free</h3>
            <p className="text-sm text-gray-500 mb-4">1 free file <span className="text-green-700 font-bold">limited</span> upload</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-800">
                <span className="text-2xl align-text-top">$</span>0
              </span>
            </div>
            <ul className="space-y-3 mb-6 text-left">
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <img src="./check.svg" width={25} height={25} />
                </div>
                <span className="text-gray-700 text-sm">Limited insights</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <img src="./check.svg" width={25} height={25} />
                </div>
                <span className="text-gray-700 text-sm">Free</span>
              </li>
            </ul>
            { 
              user ? <button className="cursor-pointer w-full py-3 text-green-600 border border-green-600 rounded-lg hover:bg-green-50 transition-colors duration-300 text-sm font-medium">
                Go to Dashboard
              </button>
              :
              <SignInButton className="cursor-pointer w-full py-3 text-green-600 border border-green-600 rounded-lg hover:bg-green-50 transition-colors duration-300 text-sm font-medium">
                Sign Up For Free
              </SignInButton>
            }
          </div>
        </div>
        {/* Paid Plan */}
        <div className="bg-white rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden text-black transform scale-110 relative">
          <div className="absolute top-0 right-0 bg-green-900 text-white px-3 py-1 text-xs font-semibold rounded-bl-lg">
            POPULAR
          </div>
          <div className="p-10 text-center">
            <h3 className="text-2xl font-bold mb-2">1 Credit</h3>
            <p className="text-sm text-black mb-4">1 file upload with <span className="text-green-700 font-bold">unlimited</span> stats</p>
            <div className="mb-6">
              <span className="text-5xl font-bold text-green-950">
                <span className="text-3xl align-text-top">$</span>1.99
              </span>
            </div>
            <ul className="space-y-3 mb-8 text-left">
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full flex items-center justify-center mr-3">
                  <img src="./check.svg" width={25} height={25} />
                </div>
                <span className="text-sm">Advanced insights</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full flex items-center justify-center mr-3">
                  <img src="./check.svg" width={25} height={25} />
                </div>
                <span className="text-sm">1 file upload</span>
              </li>
            </ul>
            <Link to={'/payment'} className="w-full py-3 bg-green-800 text-white rounded-lg hover:bg-green-900 cursor-pointer transition-colors duration-300 font-semibold text-sm shadow-lg hover:shadow-xl">
              Get Credits
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
