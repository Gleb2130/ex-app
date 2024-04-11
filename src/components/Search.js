import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchArticles, selectArticles } from './articleReducer';
import { Link, useParams } from 'react-router-dom';
import Navigation from './Navigation';
import SearchBar from './SearchBar';

const SearchArticles = () => {
  const { search } = useParams();
  console.log("useParams:",search);
  const dispatch = useDispatch();
  const articles = useSelector(selectArticles); // Получаем список статей из Redux
  dispatch(searchArticles(search));
    
  return (
    <div>
      <Navigation />
      <SearchBar/>
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

export default SearchArticles;