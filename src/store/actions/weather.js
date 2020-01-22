import axios from "axios";

// export const getWeather = () => ({
//   type: "QUERY_WEATHER",
//   payload: data 
// });

export const getWeather = () => dispatch => {
  let promise = new Promise((resolve, reject) => {
    function showPosition(position) {
      const params = {
        key: "0678e5c49d0e4ca3abc879648e4342b3",
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
        .get("https://api.weatherbit.io/v2.0/current", { params })
        .then(response => {
          let data = {
            city: response.data.data[0].city_name,
            temp: response.data.data[0].temp,
            wind: response.data.data[0].wind_spd,
            humidity: response.data.data[0].rh,
            precipitation: response.data.data[0].clouds
          };
          dispatch({
            type: "QUERY_WEATHER",
            payload: data
          });
          dispatch({
            type: "ENTER_CITY",
            payload: response.data.data[0].city_name
          });
        }),
      axios
        .get("https://api.weatherbit.io/v2.0/forecast/daily", { params })
        .then(response => {
          let data = response.data.data.splice(0, 5);
          data = data.map((item, index) => ({
            date: item.datetime,
            temp: item.temp,
            humidity: item.rh,
            wind: item.wind_spd.toFixed(1),
            precipitation: item.clouds_mid
          }));
          dispatch({
            type: "QUERY_FIVE_DAY_WEATHER",
            payload: data
          });
        })
    ]).catch(alert)
  );
};
