import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Поиск статей..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button><Link to={searchTerm !== '' ? `/search-article/${searchTerm}` : '/'}>Search</Link></button>
    </div>
  );
};

export default SearchBar;
