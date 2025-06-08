import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { useUser } from "@clerk/clerk-react";

export default function Header() {

  const { user } = useUser()

  return (
    <header className="grid grid-cols-12 items-center mb-12">
      <div className="col-span-6 md:col-span-4 flex items-center">
        <h1 className="text-xl  text-black">Spotalyze</h1>
      </div>
      <div className="col-span-6 md:col-span-8 flex justify-end gap-3">
        {
          user ?
              <UserButton />
          :
          <>
            <div className="bg-green-700 hover:bg-green-700 text-white px-4 py-1 rounded-md transition-all duration-300 transform hover:scale-105">
              <SignInButton>Login</SignInButton>
            </div>
            <div className="bg-green-700 hover:bg-green-700 text-white px-4 py-1 rounded-md transition-all duration-300 transform hover:scale-105">
              <SignInButton />
            </div>
          </>
        }
      </div>
    </header>
  );
}
