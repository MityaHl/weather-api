import axios from "axios";

export const clickLoadWeather = params => ({
  type: "ON_LOAD_WEATHER",
  params: params
});

export const loadWeather = data => ({
  type: "LOAD_WEATHER",
  payload: data
});

// export const weatherBit = params => dispatch => {
//   Promise.all([
//     axios
//       .get("https://api.weatherbit.io/v2.0/current", { params })
//       .then(response => {
//         let data = {
//           city: response.data.data[0].city_name,
//           temp: response.data.data[0].temp,
//           wind: response.data.data[0].wind_spd,
//           humidity: response.data.data[0].rh,
//           precipitation: response.data.data[0].clouds
//         };
//         dispatch({
//           type: "QUERY_WEATHER",
//           payload: data
//         });
//       }),
//     axios
//       .get("https://api.weatherbit.io/v2.0/forecast/daily", { params })
//       .then(response => {
//         let data = response.data.data.splice(0, 5);
//         data = data.map((item, index) => ({
//           date: item.datetime,
//           temp: item.temp,
//           humidity: item.rh,
//           wind: item.wind_spd.toFixed(1),
//           precipitation: item.clouds_mid
//         }));
//         dispatch({
//           type: "QUERY_FIVE_DAY_WEATHER",
//           payload: data
//         });
//       })
//   ]).then(
//     dispatch({
//       type: "IS_OPEN_FORM_FALSE",
//       payload: false
//     })
//   );
// };
