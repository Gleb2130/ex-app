// articleReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, title: "Article 1", body: "Body of article 1" },
  { id: 2, title: "Article 2", body: "Body of article 2" },
  { id: 3, title: "Article 3", body: "Body of article 3" }
];

const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    addArticle: (state, action) => {
      // Вместо state.push используйте конкатенацию массивов, чтобы не мутировать существующий state
      return [...state, action.payload];
    },
    deleteArticle: (state, action) => {
      // Возвращаем новый массив, исключая удаленную статью
      return state.filter(article => article.id !== action.payload);
    },
    searchArticles: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      return state.filter(article => 
        article.title.toLowerCase().includes(searchTerm) || 
        article.body.toLowerCase().includes(searchTerm)
      );
    }
  }
});

export const { addArticle, deleteArticle ,searchArticles} = articleSlice.actions;
export const selectArticles = state => state.articles;
export default articleSlice.reducer;
