import React, { useEffect, useState } from 'react';
import { Card, Graph } from './components';
import { fetchData, fetchDailyData } from './api';
import styles from './styles.module.css';

const App = () => {
  const [data, setData] = useState({});
  const [dailydata, setDailyData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setData(data);
    };

    getData();
  }, []);

  useEffect(() => {
    const getDailyData = async () => {
      const data = await fetchDailyData();
      setDailyData(data);
    };

    getDailyData();
  }, []);

  return (
    <div className={styles.container}>
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
      <section className={styles.graphContainer}>
        {console.log('dailydata', dailydata)}
        <Graph dailyData={dailydata} />
      </section>
    </div>
  );
};

export default App;
