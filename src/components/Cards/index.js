import React from 'react';
import CountUp from 'react-countup';

import styles from './styles.module.css';

const Card = ({ dataColor, data, title, lastUpdate }) => {
  // const { value } = data;
  return (
    <section className={styles.container} data-color={dataColor}>
      <h1>{title}</h1>
      {data.value ? (
        <CountUp start={0} end={data.value} duration={2.5} separator='.' />
      ) : null}
      <h2>{new Date(lastUpdate).toDateString()}</h2>
      <section className={styles.innerContainer}>{getTheText(title)}</section>
    </section>
  );
};

const getTheText = (outcome) => {
  if (outcome === 'Confirmed') {
    return `Number of ${outcome} cases of covid-19`;
  }
  if (outcome === 'Recovered') {
    return `Number of ${outcome} cases from covid-19`;
  }
  if (outcome === 'Deaths') {
    return `Number of ${outcome} from covid-19`;
  }
};

export default Card;
