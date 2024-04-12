import { configureStore } from '@reduxjs/toolkit';
import articleReducer, { loadArticlesFromLocalStorage } from './articleReducer';

const store = configureStore({
  reducer: {
    articles: articleReducer
  }
});

store.dispatch(loadArticlesFromLocalStorage());

export default store;
