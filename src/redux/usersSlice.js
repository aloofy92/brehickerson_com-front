import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from '../lib/Axios';
import { authSuccess } from './authSlice';

export const registerUser = createAsyncThunk('user/registerUser', async (payloadData) => {
  let response = await Axios.post('/users/register', payloadData);
  return response.data;
});

export const login = createAsyncThunk('user/login', async (userData, thunkAPI) => {
  try {
    let response = await Axios.post('/users/login', userData);
    localStorage.setItem('jwtToken', response.data.token);
    thunkAPI.dispatch(authSuccess());
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const fetchLandlords = createAsyncThunk('users/fetchLandlords', async () => {
  try {
    const response = await Axios.get('/landlords'); // Adjust the API endpoint as per your backend
    return response.data;
  } catch (error) {
    throw new Error('Error fetching landlords');
  }
});

export const saveReview = createAsyncThunk('users/saveReview', async (reviewData) => {
  // You can save the review to the server/database here if needed
  // You can also handle any asynchronous operations related to saving the review

  // Return the review data as the result
  return reviewData;
});

const initialState = {
  email: '',
  password: '',
  firstname: '',
  lastname: '',
  message: '',
  status: null,
  reviews: [],
  landlords: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser: (state, action) => {
      return {
        ...action.payload,
        password: '',
      };
    },
    resetStatus: (state) => {
      state.status = null;
    },
    resetUser: (state) => {
      return {
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        message: 'User Logged Out!',
        status: null,
        reviews: [],
        landlords: [],
      };
    },
    addReview: (state, action) => {
      state.reviews.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        return {
          ...action.payload,
          password: '',
          status: 'fulfilled',
        };
      })
      .addCase(registerUser.rejected, (state) => {
        console.log('!@-------registerUser Error!-------@!');
        state.status = 'rejected';
      })
      .addCase(registerUser.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.firstname = action.payload.user.firstname;
        state.lastname = action.payload.user.lastname;
        state.email = action.payload.user.email;
        state.message = action.payload.message;
        state.password = '';
        state.status = 'fulfilled';
      })
      .addCase(login.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(login.rejected, (state, action) => {
        state.message = action.payload;
        state.status = 'rejected';
      })
      .addCase(fetchLandlords.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchLandlords.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.landlords = action.payload;
      })
      .addCase(fetchLandlords.rejected, (state) => {
        state.status = 'rejected';
      })
      .addCase(saveReview.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
      });
  },
});

export const { setUser, resetStatus, resetUser, addReview } = usersSlice.actions;
export default usersSlice.reducer;

