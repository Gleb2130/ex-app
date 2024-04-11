import React, { useState } from 'react';

const Comments = ({ articleId, addComment, articles }) => {
  const [commentText, setCommentText] = useState('');

  const article = articles.find(article => article.id === articleId);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim() !== '') {
      addComment(articleId, commentText);
      setCommentText('');
    }
  };

  return (
    <div>
      <h3>Комментарии</h3>
      <ul>
        {article && article.comments && article.comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)} 
          placeholder="Add a comment" 
        />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default Comments;
