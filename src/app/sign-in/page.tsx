'use client';
import React, { useRef } from 'react';
import FormInput from '@/components/FormInput';
import { callAPI } from '../../config/axios';
import { useAppDispatch } from '@/lib/redux/hooks';
import { setSignIn } from '@/lib/redux/features/userSlice';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { getPostList } from '@/lib/redux/features/postSlice';

const SignInPage = () => {
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  // define dispatch from userAppDispatch for execute function actions from redux
  const dispatch = useAppDispatch();

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // fetching base database to spesific prop from the db

  const onSignIn = async () => {
    // if (emailRef.current && passwordRef.current) {
    //   setEmail(emailRef.current.value);
    //   setPassword(passwordRef.current.value);
    // }
    // console.log(email, password);
    try {
      // try {
      //   const response = await axios.get('baseURL/users');
      //   setData(response.data);
      // } karena sudah ada function callAPI maka tidak perlu mendeclare baseURl

      const response = await callAPI.get(`/users?email=${emailRef.current?.value}&password=${passwordRef.current?.value}`);
      // console.log(response.data);

      // store data to global store redux
      // useAppDispatch()(setSignIn(response.data[0])) chaining function yang mereturn function
      dispatch(setSignIn({ ...response.data[0], isAuth: true }));
      dispatch(getPostList());

      // local storage hanya bisa menyimpan string jika object tidak diubah maka local storage akan menyimpan [object,object]
      // JSON.stringify akan merubah object json menjadi string yang sesuai dengan aturan object
      // local storage tidak memancing re-render
      // maka gunakan redux
      localStorage.setItem('dataUser', JSON.stringify(response.data[0]));
      // .replace re direct ke post dan history dibuang jadi kalau balik bakal ke dashboard
      // .push bisa back ke page sign in
      router.replace('/post');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-full min-h-screen h-full lg:h-screen  p-5 lg:p-10 flex flex-col lg:flex-row justify-center items-start bg-gray-950">
        <div className="w-full lg:w-[45%] h-full hidden lg:flex flex-col justify-center items-center lg:items-start gap-7 md:gap-10 md:px-16 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-medium text-white">Design with us</h1>
          <p className="text-3xl text-gray-400 ">Access to thousands of design resources and templates</p>
          {/* <img src="" alt="" /> */}
        </div>
        <div className="w-full lg:w-[55%] h-full bg-white text-black rounded-3xl px-7 lg:px-20 py-7 flex flex-col justify-center items-center lg:items-start gap-10">
          <h2 className="text-4xl">Sign in now</h2>
          <div className="flex flex-col justify-start items-center gap-2 text-gray-700 w-full">
            <FormInput type="text" label="Email" ref={emailRef} />
            <FormInput type="password" label="Password" req="Use 6 or more characters with a mix of letter, numbers & symbols" ref={passwordRef} />
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
            <button className="px-6 py-3 bg-gray-600 rounded-full text-white w-full lg:w-auto" type="button" onClick={onSignIn}>
              Sign in
            </button>
            <Button>Sign In</Button>
            <p>
              Dont have an account?
              <a href="/sign-up" className="underline">
                sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
