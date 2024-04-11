import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addArticle } from './articleReducer';
import Navigation from './Navigation';
import SearchBar from './SearchBar';

const AddArticle = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleAddArticle = () => {
    if (title.trim() && content.trim() && author.trim()) {
      dispatch(addArticle({ id: Math.random(), title:title, body: content }));
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
      {/* Используем Link для перехода на главную страницу после добавления статьи */}
      <Link to="/">
        <button onClick={handleAddArticle}>Добавить</button>
      </Link>
    </div>
  );
};

export default AddArticle;
