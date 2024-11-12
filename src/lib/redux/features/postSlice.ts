import { callAPI } from '@/config/axios';
import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'post',
  initialState: [{}],
  reducers: {
    addPostData: (initialState, action) => {
      return [...action.payload];
    },
  },
});

export const { addPostData } = postSlice.actions;
export default postSlice.reducer;

// CallAPI function
export const getPostList = () => {
  return async (dispatch: any) => {
    try {
      const res = await callAPI.get('/posts');
      dispatch(addPostData(res.data));
    } catch (error) {
      console.log(error);
    }
  };
};
