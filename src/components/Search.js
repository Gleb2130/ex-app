import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Navigation from './Navigation';
import SearchBar from './SearchBar';
import { searchArticles } from './articleReducer';

const SearchArticles = () => {
  const { search } = useParams();
  const dispatch = useDispatch();
  const articles = useSelector(state => state.articles.articles) || []; 
  const searchResults = useSelector(state => state.articles.searchResults) || []; 

  useEffect(() => {
    if (search.trim() !== '') {
      dispatch(searchArticles(search));
    }
  }, [dispatch, search]);

  const filteredArticles = useMemo(() => {
    return searchResults.length > 0 ? searchResults : articles; 
  }, [searchResults, articles]);

  return (
    <div>
      <Navigation />
      <SearchBar />
      <h1>Результаты поиска</h1>
      {filteredArticles.length === 0 ? (
        <p>Результаты не найдены</p>
      ) : (
        filteredArticles.map(article => (
          <div key={article.id}>
            <Link to={`/article/${article.id}`}>
              <h2>{article.title}</h2>
            </Link>
            <p>{article.body}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchArticles;
