import axios from "axios";

export const openWeather = params => dispatch => {
  Promise.all([
    axios
      .get("https://api.openweathermap.org/data/2.5/weather", { params })
      .then(response => {
        let data = {
          city: response.data.name,
          temp: response.data.main.temp - 273,
          wind: response.data.wind.speed,
          humidity: response.data.main.humidity,
          precipitation: response.data.clouds.all
        };
        dispatch({
          type: "QUERY_WEATHER",
          payload: data
        });
      }),
    axios
      .get("https://api.openweathermap.org/data/2.5/forecast", { params })
      .then(response => {
        let data = response.data.list.splice(0, 5);
        data = data.map((item, index) => ({
          date: item.dt_txt,
          temp: item.main.temp - 273,
          humidity: item.main.humidity,
          wind: item.wind.speed,
          precipitation: item.clouds.all
        }));
        dispatch({
          type: "QUERY_FIVE_DAY_WEATHER",
          payload: data
        });
      })
  ]).then(
    dispatch({
      type: "IS_OPEN_FORM_FALSE",
      payload: false
    })
  );
};
