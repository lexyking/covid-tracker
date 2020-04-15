import React from 'react';
import styles from './style.module.css';

const SearchInput = ({
  search,
  searchResults,
  handleChange,
  className,
  handleSearch,
}) => {
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
      {searchResults && search.length ? (
        <section className={styles.searchResults}>
          {searchResults.map((result) => (
            <li onClick={(e) => handleSearch(e)}>{result}</li>
          ))}
        </section>
      ) : null}
    </section>
  );
};

export default SearchInput;
