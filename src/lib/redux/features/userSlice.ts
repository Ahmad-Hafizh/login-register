import { createSlice } from '@reduxjs/toolkit';

interface IUser {
  id: string;
  username: string;
  email: string;
  name: string;
  isAuth?: boolean;
}
// mereset data ke dafault saat log out
const initialData: IUser = {
  id: '',
  name: '',
  username: '',
  email: '',
};

// define slice config to create function reducer and action
const userSlice = createSlice({
  // untuk define name dan type
  name: 'user',
  // agar default tidak berubah karena bersifat mutable
  initialState: { ...initialData },
  reducers: {
    // type nya nama+namaFunction
    // action adalah object yang diinput dari function setSignIn
    // return akan mereturn value ke store.ts
    setSignIn: (initialState, action) => {
      console.log('check action redux from user sign in', action);
      // store data to global store
      return { ...action.payload };
    },
    setSignOut: () => {
      return { ...initialData };
    },
  },
});
// export action
export const { setSignIn, setSignOut } = userSlice.actions;
// export reducer
export default userSlice.reducer;
