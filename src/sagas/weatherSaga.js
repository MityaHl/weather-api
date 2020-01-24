import { takeEvery, call, put } from 'redux-saga/effects'

import { getFiveDayWeather } from '@/store/actions/getFiveDayWeather'
import { loadWeather } from '@/store/actions/weather'
import { isOpenFormFalse } from '@/store/actions/isOpenForm'
import { weatherRequest } from '@/requests/request'

function loadNewWeather (params) {
  return weatherRequest({
    url: params.oneDayDataUrl,
    parameters: params.parameters,
    mapper: params.oneDayDataMapper,
  })
}

function loadNewFiveDayWeather (params) {
  return weatherRequest({
    url: params.fiveDaysDataUrl,
    parameters: params.parameters,
    mapper: params.fiveDaysDataMapper,
  })
}

function * putData (action) {
  try {
    const data = yield call(loadNewWeather, action.payload)
    yield put(loadWeather(data))
    if (action.payload.fiveDaysDataUrl) {
      const fiveDay = yield call(loadNewFiveDayWeather, action.payload)
      yield put(getFiveDayWeather(fiveDay))
    } else {
      yield put(getFiveDayWeather([]))
    }
    yield put(isOpenFormFalse())
  } catch (error) {
    console.log(error)
  }
}

export function * watchLoad () {
  yield takeEvery('ON_LOAD_WEATHER', putData)
}
