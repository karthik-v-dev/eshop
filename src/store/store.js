import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducer/counterReducer';


const store = configureStore({
  reducer: {
    count : counterReducer,
  }
});
export default store;