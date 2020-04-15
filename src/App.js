import React, { useEffect, useState } from 'react';
import { Card } from './components';
import { fetchData } from './api';
import styles from './styles.module.css';

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setData(data);
    };

    getData();
  }, []);

  return (
    <div className={styles.container}>
      {console.log('data', data)}
      <h1>Covid-19 Tracker</h1>
      <section className={styles.cardsContainer}>
        {data && data.lastUpdate ? (
          <Card
            dataColor='primary'
            data={data.confirmed}
            lastUpdate={data.lastUpdate}
            title='Confirmed'
          />
        ) : null}
        {data && data.lastUpdate ? (
          <Card
            dataColor='secondary'
            data={data.recovered}
            lastUpdate={data.lastUpdate}
            title='Recovered'
          />
        ) : null}
        {data && data.lastUpdate ? (
          <Card
            dataColor='tertiary'
            data={data.deaths}
            lastUpdate={data.lastUpdate}
            title='Deaths'
          />
        ) : null}
      </section>
    </div>
  );
};

export default App;
