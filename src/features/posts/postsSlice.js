import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPostsApi } from "../../services/api";

const initialState = {
  postList: [],
  loading: false,
  error: false,
};

// export const fetchPosts = createAsyncThunk(
//   "posts/fetchPosts",
//   async (thunkAPI, { rejectWithValue }) => {
//     const API_URL = "https://jsonplaceholder.typicode.com";

//     try {
//       const res = await fetch(`${API_URL}/posts`);
//       const data = await res.json();
//       return data;
//     } catch (error) {
//       return rejectWithValue("Something went wrong");
//     }
//   }
// );

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async () => {
    const res = await fetchPostsApi()
    return res;
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.postList = payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default postSlice.reducer;
