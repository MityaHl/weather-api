export const weatherBitOneDayMapper = response => {
  return (response = {
    city: response.data.data[0].city_name,
    temp: response.data.data[0].temp,
    wind: response.data.data[0].wind_spd,
    humidity: response.data.data[0].rh,
    precipitation: response.data.data[0].clouds,
  })
}

export const weatherBitFiveDayMapper = response => {
  return (response = response.data.data.splice(0, 5)).map(
    (item, index) => ({
      date: item.datetime,
      temp: item.temp,
      humidity: item.rh,
      wind: item.wind_spd.toFixed(1),
      precipitation: item.clouds_mid,
    })
  )
}

export const openWeatherOneDayMapper = response => {
  return {
    city: response.data.name,
    temp: response.data.main.temp - 273,
    wind: response.data.wind.speed,
    humidity: response.data.main.humidity,
    precipitation: response.data.clouds.all,
  }
}

export const openWeatherFiveDayMapper = response => {
  return response.data.list.splice(0, 5).map((item, index) => ({
    date: item.dt_txt,
    temp: item.main.temp - 273,
    humidity: item.main.humidity,
    wind: item.wind.speed,
    precipitation: item.clouds.all,
  }))
}

export const weathrStackOneDayMapper = response => {
  return {
    city: response.data.location.name,
    temp: response.data.current.temperature,
    wind: response.data.current.wind_speed,
    humidity: response.data.current.humidity,
    precipitation: response.data.current.cloudcover,
  }
}
