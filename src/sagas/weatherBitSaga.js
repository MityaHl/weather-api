import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";

function loadWeatherBit(params) {
  return axios
    .get("https://api.weatherbit.io/v2.0/current", { params })
    .then(response => {
      return (response = {
        city: response.data.data[0].city_name,
        temp: response.data.data[0].temp,
        wind: response.data.data[0].wind_spd,
        humidity: response.data.data[0].rh,
        precipitation: response.data.data[0].clouds
      });
    });
}

function loadWeatherFiveDayBit(params) {
  return axios
    .get("https://api.weatherbit.io/v2.0/forecast/daily", { params })
    .then(response => {
      return (response = response.data.data.splice(0, 5)).map(
        (item, index) => ({
          date: item.datetime,
          temp: item.temp,
          humidity: item.rh,
          wind: item.wind_spd.toFixed(1),
          precipitation: item.clouds_mid
        })
      );
    });
}

function* putData(params) {
  try {
    const data = yield call(loadWeatherBit, params.params);
    yield console.log(data);
    yield put({
      type: "LOAD_WEATHER",
      payload: data
    });
    const fiveDay = yield call(loadWeatherFiveDayBit, params.params);
    yield put({
      type: "QUERY_FIVE_DAY_WEATHER",
      payload: fiveDay
    });
    yield put({
      type: "IS_OPEN_FORM_FALSE",
      payload: false
    });
  } catch (error) {
    console.log(error);
  }
}

export function* watchLoad() {
  yield takeEvery("ON_LOAD_WEATHER", putData);
}