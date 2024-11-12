'use client';
import { useAppSelector } from '@/lib/redux/hooks';
import React from 'react';
import { Formik, Form, FormikProps } from 'formik';
import { EditProfileSchema } from './EditProfileSchema';
import { callAPI } from '@/config/axios';
interface IEditProfileValue {
  fullName: string;
  userName: string;
  gender?: string;
  country?: string;
  language?: string;
  timeZone?: string;
}
const AccountSettingPage = () => {
  const user = useAppSelector((state) => state.userReducer);

  const onEditProfile = async (formValue: IEditProfileValue) => {
    try {
      const res = await callAPI.patch(`/users?id=${user.id}&email=${user.email}`, {
        username: formValue.userName,
        name: formValue.fullName,
        gender: formValue.gender,
        country: formValue.country,
        language: formValue.language,
        timeZone: formValue.timeZone,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-[80vh] w-full px-[5%]">
      <div id="top" className="w-full flex justify-between items-center h-1/4">
        <div id="profile" className="flex items-center gap-4">
          <div>
            <img src={`https://robohash.org/${user.id}`} alt="profile picture" className="rounded-full w-[85px] h-[85px] bg-gray-100 shadow-md " />
          </div>
          <div>
            <p className="text-xl font-bold">{user.name}</p>
            <p>{user.email}</p>
          </div>
        </div>
      </div>
      <div id="form">
        <Formik
          validationSchema={EditProfileSchema}
          initialValues={{
            fullName: user.name,
            userName: user.username,
            gender: user.gender,
            country: user.country,
            language: user.language,
            timeZone: user.timeZone,
          }}
          onSubmit={(values) => {
            console.log('value from edit ', values);
            onEditProfile(values);
          }}
        >
          {(props: FormikProps<IEditProfileValue>) => {
            const { values, handleChange } = props;
            return (
              <Form className="flex flex-col gap-5 h-2/4">
                <div className="grid grid-cols-2 gap-10">
                  <div className="flex flex-col">
                    <label htmlFor="">Full Name</label>
                    <input type="text" placeholder="Your Full Name" className="p-4 rounded bg-gray-100" value={values.fullName} onChange={handleChange} id="fullName" name="fullName" />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="">User Name</label>
                    <input type="text" placeholder="Your User Name" className="p-4 rounded bg-gray-100" value={values.userName} onChange={handleChange} id="userName" name="userName" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-10">
                  <div className="flex flex-col">
                    <label htmlFor="">Gender</label>
                    <select name="gender" id="gender" className="p-4 rounded bg-gray-100" value={values.gender} onChange={handleChange}>
                      <option value="">choose a gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="">Country</label>
                    <select name="country" id="country" className="p-4 rounded bg-gray-100" value={values.country} onChange={handleChange}>
                      <option value="">select a country</option>
                      <option value="indonesia">Indonesia</option>
                      <option value="uk">UK</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-10">
                  <div className="flex flex-col">
                    <label htmlFor="">Language</label>
                    <select name="language" id="language" className="p-4 rounded bg-gray-100" value={values.language} onChange={handleChange}>
                      <option value="">choose a language</option>
                      <option value="english">English</option>
                      <option value="indonesia">Bahasa</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="">Time Zone</label>
                    <select name="timeZone" id="timeZone" className="p-4 rounded bg-gray-100" value={values.timeZone} onChange={handleChange}>
                      <option value="">select a timezone</option>
                      <option value="wib">WIB</option>
                      <option value="wita">WITA</option>
                      <option value="wit">WIT</option>
                    </select>
                  </div>
                </div>
                <div className="mb-5">
                  <button type="submit" className="px-3 py-2 bg-black text-white">
                    Edit
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
      <div id="bottom">
        <div className="flex flex-col gap-4">
          <p className="text-xl">my email address</p>
          <div>
            <p>name@gmail.com</p>
            <p className="text-gray-500">1 month ago</p>
          </div>
          <button type="button" className="w-fit px-3 py-2 bg-black text-white">
            +Add Email Address
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountSettingPage;
