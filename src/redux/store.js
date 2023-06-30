import { configureStore } from '@reduxjs/toolkit';
import usersReducer, { fetchLandlords } from './usersSlice';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    auth: authReducer,
    // other reducers...
  },
});

// Fetch landlords data on store initialization
store.dispatch(fetchLandlords());

export default store;
