import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // Добавляем импорт Provider
import store from './components/store'; // Импортируем ваше хранилище Redux
import ArticleList from './components/ArticleList';
import ArticleDetails from './components/ArticleDetails';
import AddArticle from './components/AddArticle';
import NotFound from './components/NotFound';
import './styles/index.css';
const router = createBrowserRouter([
  { path: "/", element: <ArticleList /> },
  { path: "/article/:id", element: <ArticleDetails /> },
  { path: "/add-article", element: <AddArticle /> },
  { path: "*", element: <NotFound /> }
]);

ReactDOM.render(
  <React.StrictMode>
    {/* Оберните ваше приложение в Provider и передайте ему ваше хранилище */}
    <Provider store={store}>
      <RouterProvider router={router}/> 
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
