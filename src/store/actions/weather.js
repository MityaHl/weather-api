import axios from "axios";

import { getFiveDayWeather } from "@/store/actions/getFiveDayWeather";
import { enterCity } from "@/store/actions/city";

import { QUERY_WEATHER, WEATHERBIT_FIVE_DAY, WEATHERBIT_ONE_DAY, WEATHERBIT_API_KEY, LOAD_WEATHER, ON_LOAD_WEATHER } from "@/constants";

export const clickLoadWeather = params => ({
  type: ON_LOAD_WEATHER,
  params: params
});

export const onGetWeather = (data) => ({
  type: QUERY_WEATHER,
  payload: data 
});

export const loadWeather = data => ({
  type: LOAD_WEATHER,
  payload: data
});

export const getWeather = () => dispatch => {
  let promise = new Promise((resolve, reject) => {
    function showPosition(position) {
      const params = {
        key: WEATHERBIT_API_KEY,
        lat: position.coords.latitude,
        lon: position.coords.longitude
      };

      if (params.lat !== "" && params.lon !== "") resolve(params);
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  });

  promise.then(params =>
    Promise.all([
      axios
        .get(WEATHERBIT_ONE_DAY, { params })
        .then(response => {
          let data = {
            city: response.data.data[0].city_name,
            temp: response.data.data[0].temp,
            wind: response.data.data[0].wind_spd,
            humidity: response.data.data[0].rh,
            precipitation: response.data.data[0].clouds
          };
          dispatch(onGetWeather(data));
          dispatch(enterCity(response.data.data[0].city_name));
        }),
      axios
        .get(WEATHERBIT_FIVE_DAY, { params })
        .then(response => {
          let data = response.data.data.splice(0, 5);
          data = data.map((item, index) => ({
            date: item.datetime,
            temp: item.temp,
            humidity: item.rh,
            wind: item.wind_spd.toFixed(1),
            precipitation: item.clouds_mid
          }));
          dispatch(getFiveDayWeather(data));
        })
    ]).catch(alert)
  );
};
