import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Navigation from './Navigation';
import SearchBar from './SearchBar';
import Comments from './Comments';
import { addComment, addLastReadArticle, deleteArticle } from './articleReducer';
import LikeDislike from './LikeDislike'; 
import '../styles/ArticleDetails.css'

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

  const handleSubmit = () =>{
    dispatch(deleteArticle(id));
  }
  
  
  if (!article) {
    return (
      <div>
        <Navigation />
        <SearchBar />
        <h2>Статья не найдена или была удалина</h2>
      </div>
    );
  }

  return (
    <div className="article-details-container">
      <Navigation />
      <SearchBar />
      <br/>
      <div className="article-info">
        <h2>{article.title}</h2>
        <p>{article.body}</p>
        <p>{article.author}</p>
      
      <div className="likes-container" align="right">
        <LikeDislike articleId={article.id} />
      </div>
      </div>
      <div className="comments-container">
      <Comments articleId={article.id} articles={articles} addComment={(articleId, commentText) => dispatch(addComment({ articleId, commentText }))} />
      </div>
      <Link to="/">
        <button onClick={handleSubmit} className="delete-button">Удалить</button>
      </Link>
    </div>
  );
};

export default ArticleDetails;











