import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import styles from './styles.module.css';

const lineGraph = (dailyDataArray) =>
  dailyDataArray ? (
    <Line
      data={{
        labels: dailyDataArray.map(({ reportDate }) => {
          return reportDate;
        }),
        datasets: [
          {
            data: dailyDataArray.map(({ totalConfirmed }) => totalConfirmed),
            label: 'Confirmed',
            borderColor: '#333fff',
            fill: true,
          },
          {
            data: dailyDataArray.map(({ deaths }) => deaths.total),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(30, 19, 30, 0.4)',
            fill: true,
          },
        ],
      }}
    />
  ) : null;

const Graph = ({ dailyData }) => {
  // const [dailyData, setDailyData] = useState([]);

  // useEffect(() => {
  //   setDailyData(dailyData);
  // }, [dailyData]);

  return (
    <section className={styles.graphContainer}>
      {/* {console.log('dailyDataArray', dailyData)} */}
      <h1>Hello from graph</h1>
      {lineGraph(dailyData)}
    </section>
  );
};

export default Graph;
