import React from 'react';
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

const barGraph = (data, country) =>
  data && data.confirmed ? (
    <Bar
      data={{
        labels: ['Confirmed', 'Recovered', 'Deaths'],
        datasets: [
          {
            label: 'People',
            backgroundColor: ['#67b26f', '#4ca2cd', '#e73827'],
            data: [
              data.confirmed.value,
              data.recovered.value,
              data.deaths.value,
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;

const Graph = ({ dailyData, data, country, className }) => {
  return (
    <section className={`${styles.graphContainer} ${className}`}>
      {country ? barGraph(data, country) : lineGraph(dailyData)}
    </section>
  );
};

export default Graph;
