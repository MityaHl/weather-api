import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";

function loadOpenWeather(params) {
  return axios
    .get("https://api.openweathermap.org/data/2.5/weather", { params })
    .then(response => {
      return response = {
        city: response.data.name,
        temp: response.data.main.temp - 273,
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity,
        precipitation: response.data.clouds.all
      };
    });
}

function loadOpenWeatherFiveDays(params) {
  return axios
    .get("https://api.openweathermap.org/data/2.5/forecast", { params })
    .then(response => {
      return response = response.data.list.splice(0, 5).map((item, index) => ({
        date: item.dt_txt,
        temp: item.main.temp - 273,
        humidity: item.main.humidity,
        wind: item.wind.speed,
        precipitation: item.clouds.all
      }));
    });
}

function* putData(params) {
  try {
    const data = yield call(loadOpenWeather, params.params);
    yield console.log(data);
    yield put({
      type: "LOAD_WEATHER",
      payload: data
    });
    const fiveDay = yield call(loadOpenWeatherFiveDays, params.params);
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

export function* watchLoadOpenWeather() {
  yield takeEvery("ON_LOAD_OPEN_WEATHER", putData);
}