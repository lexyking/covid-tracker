import React from 'react';
import styles from './style.module.css';

const CountryPicker = ({ countriesNames, handleChange, className }) => {
  return (
    <section className={`${styles.countrypickerContainer} ${className}`}>
      <label for='countries'>Select a Country</label>
      <select onChange={(e) => handleChange(e.target.value)}>
        <option value='Global'>Global</option>
        {countriesNames
          ? countriesNames.map((country, i) => (
              <option key={i} value={country}>
                {country}
              </option>
            ))
          : null}
      </select>
    </section>
  );
};

export default CountryPicker;
