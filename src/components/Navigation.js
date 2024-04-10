import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/add-article">Добавить статью</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
