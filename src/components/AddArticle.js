import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addArticle } from './articleReducer';
import Navigation from './Navigation';
import SearchBar from './SearchBar';
import { nanoid } from '@reduxjs/toolkit';

const AddArticle = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleAddArticle = () => {
    if (title.trim() && content.trim() && author.trim()) {
      dispatch(addArticle({ id:  nanoid(8), title: title, body: content,author:author, comments: [],likes: 0, dislikes: 0 }));
      setTitle('');
      setContent('');
      setAuthor('');
    } else {
      console.error('Please fill in all fields');
    }
  };

  return (
    <div>
      <Navigation />
      <SearchBar/>
      <h1>Добавить новую статью</h1>
      <input
        type="text"
        placeholder="Заголовок"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /><br/>
      <textarea
        placeholder="Текст статьи"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      /><br/>
      <input
        type="text"
        placeholder="Автор"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      /><br/>
      <Link to="/">
        <button onClick={handleAddArticle}>Добавить</button>
      </Link>
    </div>
  );
};

export default AddArticle;
