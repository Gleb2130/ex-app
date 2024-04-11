import { configureStore } from '@reduxjs/toolkit';
import articleReducer from './articleReducer';

const store = configureStore({
  reducer: {
    articles: articleReducer
  }
});



export default store;
