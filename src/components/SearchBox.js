import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--blue white'
        type='search'
        placeholder='search products'
        value={searchField}  
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
