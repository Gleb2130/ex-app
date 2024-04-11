import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  articles: [
    { id: 1, title: "Article 1", body: "Body of article 1", comments: [],likes: 0, dislikes: 0 },
    { id: 2, title: "Article 2", body: "Body of article 2", comments: [],likes: 0, dislikes: 0 },
    { id: 3, title: "Article 3", body: "Body of article 3", comments: [],likes: 0, dislikes: 0 }
  ],
  searchResults: [],
  lastReadArticles: []
};

const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    addArticle: (state, action) => {
      state.articles.push(action.payload);
    },
    deleteArticle: (state, action) => {
      state.articles = state.articles.filter(article => article.id !== action.payload);
    },
    searchArticles: (state, action) => {
      const searchTerm = (action.payload || '').toLowerCase();
      state.searchResults = state.articles.filter(article => 
        article.title.toLowerCase().includes(searchTerm) || 
        article.body.toLowerCase().includes(searchTerm)
      );
    },
    clearSearchResults: (state) => {
      state.searchResults = [];
    },
    addComment: (state, action) => {
      const { articleId, commentText } = action.payload;
      const article = state.articles.find(article => article.id === articleId);
      if (article) {
        article.comments.push(commentText);
      }
    },
    addLastReadArticle: (state, action) => {
      const articleId = action.payload;
      const index = state.lastReadArticles.indexOf(articleId);
      if (index !== -1) {
        state.lastReadArticles.splice(index, 1);
      }
      state.lastReadArticles.unshift(articleId); 
    },
    addLike: (state, action) => {
      const articleId = action.payload;
      const article = state.articles.find(article => article.id === articleId);
      if (article) {
        article.likes++; 
      }
    },
    addDislike: (state, action) => {
      const articleId = action.payload;
      const article = state.articles.find(article => article.id === articleId);
      if (article) {
        article.dislikes++; 
      }
    },
    removeLike: (state, action) => {
      const articleId = action.payload;
      const article = state.articles.find(article => article.id === articleId);
      if (article) {
        article.likes--; 
      }
    },
    removeDislike: (state, action) => {
      const articleId = action.payload;
      const article = state.articles.find(article => article.id === articleId);
      if (article) {
        article.dislikes--; 
      }
    },
  }
});

export const { addArticle, deleteArticle, searchArticles, clearSearchResults, addComment ,addLastReadArticle,addDislike,addLike,removeLike,removeDislike} = articleSlice.actions;
export const selectArticles = state => state.articles.articles;
export default articleSlice.reducer;
