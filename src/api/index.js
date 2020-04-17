import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

const newsUrl = 'https://free-nba.p.rapidapi.com/players';

// const newsUrl = 'https://myallies-breaking-news-v1.p.rapidapi.com/news/cnn';

export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);
    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
  } catch (e) {
    console.log(e);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchCountriesNames = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((country, i) => country.name);
  } catch (e) {
    console.log(e);
  }
};

export const fetchNewsData = async () => {
  try {
    const data = await axios.get(newsUrl, {
      query: {
        page: '0',
        per_page: '25',
      },
      headers: {
        'x-rapidapi-host': 'free-nba.p.rapidapi.com',
        'x-rapidapi-key': 'bd2b3baeebmshf49e28dc808caefp171e20jsnd09064eb9700',
      },
    });
    // console.log('lexy news data', data);
  } catch (e) {
    console.log(e);
  }
};
