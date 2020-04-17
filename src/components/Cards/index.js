import React from 'react';
import CountUp from 'react-countup';

import styles from './styles.module.css';

const Card = ({ dataColor, data, title, lastUpdate }) => {
  return (
    <section
      className={styles.container}
      data-color={dataColor}
      data-testId='card'
    >
      <h1 className={styles.title} data-testId='title'>
        {title}
      </h1>
      {data.value ? (
        <CountUp
          className={styles.counter}
          start={0}
          end={data.value}
          duration={2.5}
          separator='.'
          data-testId='cardValue'
        />
      ) : null}
      <h2 className={styles.date} data-testId='lastUpdate'>
        {new Date(lastUpdate).toDateString()}
      </h2>
      <section className={styles.innerContainer} data-testId='containerSlider'>
        <h2>{data.value ? data.value : null}</h2>
        <h4>{getTheText(title)}</h4>
      </section>
    </section>
  );
};

const getTheText = (outcome) => {
  if (outcome === 'Confirmed') {
    return `${outcome} cases of covid-19`;
  }
  if (outcome === 'Recovered') {
    return `${outcome} cases from covid-19`;
  }
  if (outcome === 'Deaths') {
    return `${outcome} from covid-19`;
  }
};

export default Card;
