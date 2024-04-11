import React, { useState } from 'react';  
import { Link } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Search articles..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Link to={`/search-article/${searchTerm}`}>
            <button>Find</button>
          </Link>
    </div>
  );
};

export default SearchBar;
