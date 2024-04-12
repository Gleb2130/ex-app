import { createSlice } from '@reduxjs/toolkit';

export const loadArticlesFromLocalStorage = () => {
  return dispatch => {
    console.log("Load Start...");
    try {
      const serializedState = localStorage.getItem('articles');
      console.log("Load (serializedState):", serializedState);
      if (serializedState !== null) {
        const articles = JSON.parse(serializedState);
        console.log("Load (articles):", articles);
        articles.forEach(article => {
          dispatch(addArticle(article));
        });
      }
    } catch (error) {
      console.error('Error loading articles from localStorage:', error);
    }
  };
};

const updateLocalStorage = (articles) => {
  try {
    localStorage.setItem('articles', JSON.stringify(articles));
  } catch (error) {
    console.error('Error updating articles in localStorage:', error);
  }
};


const initialState = {
  articles: [],
  searchResults: [],
  lastReadArticles: []
};

const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    updateArticles: (state, action) => {
      state.articles = action.payload;
    },
    addArticle: (state, action) => {
      state.articles.push(action.payload);
      updateLocalStorage(state.articles);
    },
    deleteArticle: (state, action) => {
      const idToDelete = action.payload;
      state.articles = state.articles.filter(article => String(article.id) !== String(idToDelete));
      updateLocalStorage(state.articles);
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
    toggleLikeDislike: (state, action) => {
      const { articleId, type } = action.payload;
      const article = state.articles.find(article => article.id === articleId);
      if (article) {
        const likeKey = `${articleId}_like`;
        const dislikeKey = `${articleId}_dislike`;
        const isAlreadyLiked = localStorage.getItem(likeKey);
        const isAlreadyDisliked = localStorage.getItem(dislikeKey);

        if (type === 'like' && !isAlreadyLiked) {
          article.likes++;
          localStorage.setItem(likeKey, true);
          if (isAlreadyDisliked) {
            article.dislikes--;
            localStorage.removeItem(dislikeKey);
          }
        } else if (type === 'dislike' && !isAlreadyDisliked) {
          article.dislikes++;
          localStorage.setItem(dislikeKey, true);
          if (isAlreadyLiked) {
            article.likes--;
            localStorage.removeItem(likeKey);
          }
        }
        updateLocalStorage(state.articles);
      }
    },
  }
});

export const { addArticle, deleteArticle, searchArticles, clearSearchResults, addComment ,addLastReadArticle,toggleLikeDislike} = articleSlice.actions;
export const selectArticles = state => state.articles.articles;
export default articleSlice.reducer;
