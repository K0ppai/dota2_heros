import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  heros: [],
  status: 'idle',
  error: null,
};

const HEROS_URL = 'https://api.opendota.com/api/heroStats';

export const fetchHeros = createAsyncThunk('heros/fetchHeros', async () => {
  const response = await axios.get(HEROS_URL);
  return response.data;
});

const herosSlice = createSlice({
  name: 'heros',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHeros.fulfilled, (state, action) => ({ ...state, heros: action.payload }));
  },
});

export default herosSlice.reducer;
