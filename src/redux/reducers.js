import { createAsyncThunk } from '@reduxjs/toolkit';

// action types
const FETCH_COINS = 'redux/reducers/FETCH_COINS';
const FETCH_COINS_BY_ID = 'redux/reducers/FETCH_COINS_BY_ID';
const initialState = { points: [], point: {} };

const baseURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false';
const baseURLbyId = 'https://api.coingecko.com/api/v3/coins';

// the reducer for the coins
export const coinReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COINS:
      return { ...state, points: action.payload };
    case FETCH_COINS_BY_ID:
      console.log(action.payload);
      return { ...state, point: action.payload };
    default:
      return state;
  }
};

// fetch the top 50 coins from the marketplace
export const fetchCrypto = createAsyncThunk(
  FETCH_COINS,
  async (args, { dispatch }) => {
    const action = dispatch;
    const response = await fetch(baseURL);
    const data = await response.json();
    action({ type: FETCH_COINS, payload: data });
  },
);

// fetch the data from the API by the crypto id
export const fetchCryptoById = createAsyncThunk(
  FETCH_COINS_BY_ID,
  async (id, { dispatch }) => {
    const response = await fetch(`${baseURLbyId}/${id}`);
    const data = await response.json();
    dispatch({ type: FETCH_COINS_BY_ID, payload: data });
  },
);
