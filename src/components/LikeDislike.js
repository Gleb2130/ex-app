import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLikeDislike } from './articleReducer';

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

  return (
    <div>
      <button onClick={handleLike}>Like</button>
      <span>{article.likes}</span>
      <button onClick={handleDislike}>Dislike</button>
      <span>{article.dislikes}</span>
    </div>
  );
};

export default LikeDislike;
