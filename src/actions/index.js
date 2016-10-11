import axios from 'axios';

const API_KEY = '2912073123ef46495ccadde25ac45083';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;

  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}


// middlewares are functions that intercept an action before it reaches reducers
// it could stop or modify the action
