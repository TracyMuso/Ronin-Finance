import { configureStore } from '@reduxjs/toolkit';
import { coinReducer } from './reducers';

const store = configureStore({
  reducer: {
    crypto: coinReducer,
  },
});

export default store;
