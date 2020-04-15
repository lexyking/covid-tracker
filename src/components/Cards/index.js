import React from 'react';
import styles from './styles.module.css';

const Card = ({ dataColor }) => {
  return (
    <section className={styles.container} data-color={dataColor}>
      <h1>Hello from card</h1>
      <section className={styles.innerContainer}>
        This is the other text
      </section>
    </section>
  );
};

export default Card;
