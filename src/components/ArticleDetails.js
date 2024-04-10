// ArticleDetails.js
import React from 'react';
import { useSelector } from 'react-redux';
import {  useParams } from 'react-router-dom'; // Импортируем useParams
import Navigation from './Navigation';

const ArticleDetails = () => {
  const { id } = useParams(); // Получаем параметр id из URL
  const article = useSelector(state =>
    state.articles.find(article => article.id.toString() === id) // Находим статью по id
  );

  if (!article) {
    return (
      <div>
        <Navigation />
        <h2>Статья не найдена</h2>
      </div>
    );
  }

  return (
    <div>
      <Navigation />
      <h2>{article.title}</h2>
      <p>{article.body}</p>
    </div>
  );
};

export default ArticleDetails;
