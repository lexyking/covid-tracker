import React, { useEffect, useState } from 'react';
import { Card, Graph, CountryPicker, Footer, Header } from './components';
import { fetchData, fetchDailyData, fetchCountriesNames } from './api';
import styles from './styles.module.css';
import CountrySearch from './components/CountrySearch';

const App = () => {
  const [data, setData] = useState({});
  const [dailydata, setDailyData] = useState([]);
  const [countriesNames, setCountriesNames] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

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

  useEffect(() => {
    const getCountriesNames = async () => {
      const data = await fetchCountriesNames();
      setCountriesNames(data);
    };

    getCountriesNames();
  }, []);

  const handleSelectChange = async (country) => {
    const countryData =
      country === 'Global' ? await fetchData() : await fetchData(country);
    setData(countryData);
    setSelectedCountry(country);
  };

  const handleChange = (e) => {
    e.target.value ? setSearch(e.target.value) : setSearch('');
    setSearchResults(
      countriesNames.filter((country) =>
        country.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  return (
    <section className={styles.container}>
      <Header />
      <section className={styles.cardsContainer}>
        {data && data.confirmed ? (
          <Card
            className={styles.cards}
            dataColor='primary'
            data={data.confirmed}
            lastUpdate={data.lastUpdate}
            title='Confirmed'
          />
        ) : null}
        {data && data.confirmed ? (
          <Card
            className={styles.cards}
            dataColor='secondary'
            data={data.recovered}
            lastUpdate={data.lastUpdate}
            title='Recovered'
          />
        ) : null}
        {data && data.confirmed ? (
          <Card
            className={styles.cards}
            dataColor='tertiary'
            data={data.deaths}
            lastUpdate={data.lastUpdate}
            title='Deaths'
          />
        ) : null}
      </section>
      <section className={styles.countryPickerContainer}>
        <h1>Select a country</h1>
        <section className={styles.selectors}>
          <CountryPicker
            className={styles.countryPicker}
            countriesNames={countriesNames}
            handleChange={handleSelectChange}
          />
          <CountrySearch
            className={styles.countrySearch}
            searchResults={searchResults}
            handleChange={(e) => handleChange(e)}
            search={search}
          />
        </section>
      </section>
      <section className={styles.graphContainer}>
        <Graph dailyData={dailydata} data={data} country={selectedCountry} />
      </section>
      <Footer />
    </section>
  );
};

export default App;
