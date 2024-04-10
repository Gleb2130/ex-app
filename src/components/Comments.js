import React, { useState } from 'react';

const Comments = () => {
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = e.target.comment.value;
    setComments([...comments, newComment]);
    e.target.comment.value = '';
  };

  return (
    <div>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" name="comment" placeholder="Add a comment" />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Comments;
