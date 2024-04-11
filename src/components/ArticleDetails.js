import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navigation from './Navigation';
import SearchBar from './SearchBar';
import Comments from './Comments';
import { addComment, addLastReadArticle } from './articleReducer';

const ArticleDetails = () => {
  const { id } = useParams();
  const articles = useSelector(state => state.articles.articles);
  const article = articles.find(article => article.id.toString() === id); 
  const dispatch = useDispatch(); 

  useEffect(() => {
    if (article) {
      dispatch(addLastReadArticle(article.id));
    }
  }, [dispatch, article]);


  
  if (!article) {
    return (
      <div>
        <Navigation />
        <SearchBar />
        <h2>Статья не найдена</h2>
      </div>
    );
  }

  return (
    <div>
      <Navigation />
      <SearchBar />
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <p>{article.author}</p>
      <Comments articleId={article.id} articles={articles} addComment={(articleId, commentText) => dispatch(addComment({ articleId, commentText }))} />
    </div>
  );
};

export default ArticleDetails;
