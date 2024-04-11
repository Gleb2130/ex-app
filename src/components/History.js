import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import SearchBar from './SearchBar';

const History = () => {
  const articles = useSelector(state => state.articles.articles || []);
  const lastReadArticles = useSelector(state => state.articles.lastReadArticles || []);

  return (
    <div>
      <Navigation/>
      <SearchBar/>
      <h1>История последних прочитанных статей</h1>
      <ul>
        {lastReadArticles.map(articleId => {
          const article = articles.find(article => article.id === articleId);
          return (
            <li key={articleId}>
              <Link to={`/article/${articleId}`}>Статья {article ? article.title : `ID: ${articleId}`}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default History;
