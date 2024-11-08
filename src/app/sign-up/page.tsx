'use client';
import React from 'react';
import FormInput from '@/components/FormInput';
import { callAPI } from '@/config/axios';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Formik, Form, FormikProps } from 'formik';
import { SignUpSchema } from './SignUpSchema';
import { ISignUpValue } from './type';

const SignUpPage = () => {
  // const firstNameRef = useRef<HTMLInputElement>(null);
  // const lastNameRef = useRef<HTMLInputElement>(null);
  // const emailRef = useRef<HTMLInputElement>(null);
  // const passwordRef = useRef<HTMLInputElement>(null);
  // const confPasswordRef = useRef<HTMLInputElement>(null);

  // const onSignUp = async () => {
  //   if (passwordRef.current?.value === confPasswordRef.current?.value && passwordRef.current?.value) {
  //     try {
  //       // parameter data typenya object
  //       const res = await callAPI.post('/users', {
  //         name: `${firstNameRef.current?.value} ${lastNameRef.current?.value}`,
  //         email: emailRef.current?.value,
  //         password: passwordRef.current?.value,
  //       });
  //       console.log(res);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   } else {
  //     alert('password / confirmation password tidak sesuai');
  //   }
  // };

  const onSignUp = async (formValue: ISignUpValue) => {
    try {
      const res = await callAPI.post('/users', {
        name: `${formValue.firstName} ${formValue.lastName}`,
        email: formValue.email,
        password: formValue.password,
      });
    } catch (error) {
      console.log(error);
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
          {/* config schema & initial value */}
          <Formik
            validationSchema={SignUpSchema}
            // default data
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
              confPassword: '',
            }}
            onSubmit={(values, { resetForm }) => {
              console.log('value from input formik', values);
              onSignUp(values);
              resetForm();
            }}
          >
            {(props: FormikProps<ISignUpValue>) => {
              const { values, handleChange, errors, touched } = props;
              return (
                <Form>
                  <div className="flex flex-col justify-start items-center gap-2 text-gray-700 w-full">
                    <div className="flex justify-start items-center w-full gap-4">
                      {/* id sesuai schema Yup */}
                      <FormInput id="firstName" type="text" label="First name" onChange={handleChange} value={values.firstName} />
                      <FormInput id="lastName" type="text" label="Last name" onChange={handleChange} value={values.lastName} />
                    </div>
                    <FormInput id="email" type="text" label="Email" onChange={handleChange} value={values.email} />
                    <p>{errors.email}</p>
                    <FormInput id="password" type="password" label="Password" req="Use 6 or more characters with a mix of letter, numbers & symbols" onChange={handleChange} value={values.password} />
                    <p>{errors.password}</p>
                    <FormInput id="confPassword" type="password" label="Confirmation Password" onChange={handleChange} value={values.confPassword} />
                    <p>{errors.confPassword}</p>
                  </div>
                  <Button type="submit">Sign Up</Button>
                </Form>
              );
            }}
          </Formik>

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
