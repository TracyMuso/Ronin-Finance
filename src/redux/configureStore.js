import { configureStore } from '@reduxjs/toolkit';
import { coinReducer } from './reducers';

// create store
const store = configureStore({
  reducer: {
    crypto: coinReducer,
  },
});

export default store;
