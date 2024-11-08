'use client';
import React, { useRef } from 'react';
import FormInput from '@/components/FormInput';
import { callAPI } from '@/config/axios';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const SignUpPage = () => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confPasswordRef = useRef<HTMLInputElement>(null);

  const onSignUp = async () => {
    if (passwordRef.current?.value === confPasswordRef.current?.value && passwordRef.current?.value) {
      try {
        // parameter data typenya object
        const res = await callAPI.post('/users', {
          name: `${firstNameRef.current?.value} ${lastNameRef.current?.value}`,
          email: emailRef.current?.value,
          password: passwordRef.current?.value,
        });
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert('password / confirmation password tidak sesuai');
    }
  };
  return (
    <div className="w-full min-h-screen h-full lg:h-screen  p-5 lg:p-10 flex flex-col lg:flex-row justify-center items-start bg-gray-950 ">
      <div className="w-full lg:w-[45%] h-full hidden lg:flex flex-col justify-center items-center lg:items-start gap-7 md:gap-10 md:px-16 text-center lg:text-left">
        <h1 className="text-4xl md:text-6xl font-medium text-white">Design with us</h1>
        <p className="text-3xl text-gray-400 ">Access to thousands of design resources and templates</p>
        {/* <img src="" alt="" /> */}
      </div>
      <Card className="py-10">
        <CardHeader>
          <h2 className="text-4xl">Sign up now</h2>
        </CardHeader>

        <CardContent className="flex flex-col gap-10">
          <div className="flex flex-col justify-start items-center gap-2 text-gray-700 w-full">
            <div className="flex justify-start items-center w-full gap-4">
              <FormInput type="text" label="First name" ref={firstNameRef} />
              <FormInput type="text" label="Last name" ref={lastNameRef} />
            </div>
            <FormInput type="text" label="Email" ref={emailRef} />
            {/* <FormInput type="number" label="Phone number" placeholder="+62" /> */}

            <FormInput type="password" label="Password" req="Use 6 or more characters with a mix of letter, numbers & symbols" ref={passwordRef} />
            <FormInput type="password" label="Confirmation Password" ref={confPasswordRef} />
          </div>
          <div className="flex flex-col gap-4 justify-start items-start">
            <div className="flex items-start justify-center gap-2">
              <input type="checkbox" className="mt-1" />
              <p>
                By creating an account, I agree to our <a>Terms of use</a> and <a>Privacy Policy</a>
              </p>
            </div>
            <div className="flex items-start justify-center gap-2">
              <input type="checkbox" className="mt-1" />
              <p>By creating an account, I am also consenting to receive SMS messages and emails, including product new feature updates, events, and marketing promotions.</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-2 w-full lg:w-auto">
            {/* <button className="px-6 py-3 bg-gray-600 rounded-full text-white w-full lg:w-auto" onClick={onSignUp}>
            Sign up
          </button> */}
            <Button onClick={onSignUp}>Sign Up</Button>
            <p>
              Already have an account?
              <a href="/sign-in" className="underline">
                sign in
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpPage;
