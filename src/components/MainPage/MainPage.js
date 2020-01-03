import React, { useEffect, useState } from "react";
import axios from "axios";
import { css } from "aphrodite";
import Grid from "@material-ui/core/Grid";

import styles from "./MainPageStyles";

const gridClassName = css(styles.text);

const MainPage = ({ onGetWeather, onGetFiveDayWeather, onGetCity }) => {
  useEffect(() => {
    let promise = new Promise((resolve, reject) => {
      function showPosition(position) {
        const params = {
          key: "0678e5c49d0e4ca3abc879648e4342b3",
          lat: position.coords.latitude,
          lon: position.coords.longitude
        };

        if (params.lat != "" && params.lon != "") resolve(params);
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
            onGetWeather(data);
            onGetCity(response.data.data[0].city_name);
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
            onGetFiveDayWeather(data);
          })
      ]).catch(alert)
    );
  });

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justify="center"
      className={gridClassName}
    >
      <p>What is the weather today?</p>
    </Grid>
  );
};

export default MainPage;
