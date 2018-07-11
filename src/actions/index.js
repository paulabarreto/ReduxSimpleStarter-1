import axios from 'axios';

const API_KEY = '5855994eabfd68064e276ad9fa6d1e0f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather (city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

// Fetch Weather is my action creator
