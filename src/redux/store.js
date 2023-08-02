import { configureStore } from '@reduxjs/toolkit';
import herosReducer from './heroStats/heroStatsSlicer';

const store = configureStore({
  reducer: {
    heros: herosReducer,
  },
});

export default store;
