import { takeEvery, call, put } from "redux-saga/effects";

import { getFiveDayWeather } from "@/store/actions/getFiveDayWeather";
import { loadWeather } from "@/store/actions/weather";
import { isOpenFormFalse } from "@/store/actions/isOpenForm";
import { weatherRequest } from "@/requests/request";

function loadNewWeather(params) {
  weatherRequest({
    url: params.oneDayDataUrl,
    parameters: params.parameters,
    mapper: params.oneDayDataMapper,
  });
}

function loadNewFiveDayWeather(params) {
  weatherRequest({
    url: params.fiveDaysDataUrl,
    parameters: params.parameters,
    mapper: params.fiveDaysDataMapper,
  });
}

function* putData(params) {
  try {
    console.log(params);
    const data = yield call(loadNewWeather, params.params);
    yield console.log(data);
    yield put(loadWeather(data));
    const fiveDay = yield call(loadNewFiveDayWeather, params.params);
    yield put(getFiveDayWeather(fiveDay));
    yield put(isOpenFormFalse());
  } catch (error) {
    console.log(error);
  }
}

export function* watchLoad() {
  yield takeEvery("ON_LOAD_WEATHER", putData);
}