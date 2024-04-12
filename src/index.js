import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store'; 
import ArticleList from './components/ArticleList';
import ArticleDetails from './components/ArticleDetails';
import AddArticle from './components/AddArticle';
import NotFound from './components/NotFound';
import './styles/index.css';
import SearchArticles from './components/Search';
import History from './components/History';

const router = createBrowserRouter([
  { path: "/", element: <ArticleList /> },
  { path: "/article/:id", element: <ArticleDetails /> },
  { path: "/add-article", element: <AddArticle /> },
  { path: "/search-article/:search", element: <SearchArticles /> },
  { path: "/history", element: <History /> },
  { path: "*", element: <NotFound /> }
]);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
