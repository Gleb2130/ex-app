import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLikeDislike } from './articleReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp as solidThumbsUp, faThumbsDown as solidThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as regularThumbsUp, faThumbsDown as regularThumbsDown } from '@fortawesome/free-regular-svg-icons';

const LikeDislike = ({ articleId }) => {
  const dispatch = useDispatch();
  const articles = useSelector(state => state.articles.articles);
  const article = articles.find(article => article.id === articleId);
  
  const handleLike = () => {
    dispatch(toggleLikeDislike({ articleId, type: 'like' }));
  };

  const handleDislike = () => {
    dispatch(toggleLikeDislike({ articleId, type: 'dislike' }));
  };

  const isLiked = localStorage.getItem(`${articleId}_like`) === 'true';
  const isDisliked = localStorage.getItem(`${articleId}_dislike`) === 'true';
console.log("isLiked:",isLiked,"isDisliked:",isDisliked)
  return (
    <div>
      <button onClick={handleLike}><FontAwesomeIcon icon={isLiked ? solidThumbsUp : regularThumbsUp} /></button>
      <span>{article.likes}</span>
      <button onClick={handleDislike}><FontAwesomeIcon icon={isDisliked ? solidThumbsDown : regularThumbsDown} /></button>
      <span>{article.dislikes}</span>
    </div>
  );
};

export default LikeDislike;
