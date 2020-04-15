import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import styles from './styles.mmodule.css';

const [dailyData, setDailyData] = useState([]);

useEffect(() => {
  setDailyData(dailyData);
}, []);

const LineGraph = (
  <Line
    data={{
      labels: dailyData.map(({ date }) => date),
      datasets: [
        {
          data: dailyData.map(({ confirmed }) => confirmed),
          label: 'Confirmed',
          borderColor: '#333fff',
          fill: true,
        },
        {
          data: dailyData.map(({ deaths }) => deaths),
          label: 'Deaths',
          borderColor: 'red',
          backgroundColor: 'rgba(30, 19, 30, 0.4)',
          fill: true,
        },
      ],
    }}
  />
);

const Graph = ({ dailyData }) => {
  return (
    <section className={styles.graphContainer}>
      <h1>Hello from graph</h1>
      {LineGraph}
    </section>
  );
};

export default Graph;
