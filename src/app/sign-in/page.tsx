import React from 'react';
import FormInput from '@/components/FormInput';

const SignIn: React.FC = () => {
  return (
    <div className="w-full min-h-screen h-full lg:h-screen  p-5 lg:p-10 flex flex-col lg:flex-row justify-center items-start bg-gray-950 gap-10 lg:gap-0">
      <div className="w-full lg:w-[45%] h-full flex flex-col justify-center items-center lg:items-start gap-7 md:gap-10 md:px-16 text-center lg:text-left">
        <h1 className="text-4xl md:text-6xl font-medium text-white">Design with us</h1>
        <p className="text-3xl text-gray-400 ">Access to thousands of design resources and templates</p>
        {/* <img src="" alt="" /> */}
      </div>
      <div className="w-full lg:w-[55%] h-full bg-white text-black rounded-3xl px-7 lg:px-20 py-7 flex flex-col justify-center items-center lg:items-start gap-10">
        <h2 className="text-4xl">Sign in now</h2>
        <div className="flex flex-col justify-start items-center gap-2 text-gray-700 w-full">
          <FormInput type="text" label="Email" />
          <FormInput type="password" label="Password" req="Use 6 or more characters with a mix of letter, numbers & symbols" />
        </div>
        <div className="flex flex-col gap-4 justify-start items-start">
          <div className="flex items-start justify-center gap-2">
            <input type="checkbox" className="mt-1" />
            <p>
              I agree to our <a>Terms of use</a> and <a>Privacy Policy</a>
            </p>
          </div>
          <div className="flex items-start justify-center gap-2">
            <input type="checkbox" className="mt-1" />
            <p>I am also consenting to receive SMS messages and emails, including product new feature updates, events, and marketing promotions.</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-2 w-full lg:w-auto">
          <button className="px-6 py-3 bg-gray-600 rounded-full text-white w-full lg:w-auto">Sign in</button>
          <p>
            Dont have an account?
            <a href="/sign-in" className="underline">
              sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
