import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css'

const Navigation = () => {
  return (
    <nav className="navigation-panel">
      <ul className="navigation-menu">
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/add-article">Добавить статью</Link></li>
        <li><Link to="/history">История</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
