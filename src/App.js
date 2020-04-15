import React from 'react';
import { Card } from './components';
import styles from './styles.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <h1>Hello from App</h1>
      <section className={styles.cardsContainer}>
        <Card dataColor='primary' />
        <Card dataColor='secondary' />
        <Card dataColor='tertiary' />
      </section>
    </div>
  );
};

export default App;
