import React, { useEffect, useState } from 'react';

function Search({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const searchTimeout = setTimeout(() => {
      console.log(searchValue);
      onSearch(searchValue);
    }, 350);

    return () => clearTimeout(searchTimeout);
  }, [searchValue]);

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
}

export default Search;
