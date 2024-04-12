import React from 'react';
import {  useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import SearchBar from './SearchBar';

const ArticleList = () => {
  const articles = useSelector(state => state.articles.articles);
  

  if (!articles || articles.length === 0) {
    return (
      <div>
        <Navigation />
        <SearchBar />
        <h1>Список статей пуст</h1>
      </div>
    );
  }

  return (
    <div>
      <Navigation />
      <SearchBar />
      <h1>Список статей</h1>
      {articles.map(article => (
        <div key={article.id}>
          <Link to={`/article/${article.id}`}>
            <h2>{article.title}</h2>
          </Link>
          <p>{article.body}</p>
        </div>
      ))}
    </div>
  );
};


export default ArticleList;
