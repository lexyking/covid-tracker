import React from 'react';
import styles from './style.module.css';

const SearchInput = ({ search, searchResults, handleChange, className }) => {
  return (
    <section className={`${styles.container} ${className}`}>
      <input
        type='search'
        placeholder='Enter a country'
        value={search}
        name='search'
        onChange={(e) => handleChange(e)}
        className={styles.input}
      />
      <button>Search</button>
      {searchResults && search.length
        ? searchResults.map((result) => <li>{result}</li>)
        : null}
    </section>
  );
};

export default SearchInput;
