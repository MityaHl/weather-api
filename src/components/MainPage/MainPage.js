import React, { useEffect } from "react";
import axios from "axios";
import { css } from "aphrodite";
import Grid from "@material-ui/core/Grid";

import styles from "./MainPageStyles";

const gridClassName = css(styles.text);

const MainPage = ({ onGetWeather, onGetFiveDayWeather, onGetCity }) => {
  useEffect(() => {
    axios.get("https://api6.ipify.org?format=json").then(response => {
      axios
        .get("http://free.ipwhois.io/json/" + response.data.ip)
        .then(response => {
          const params = {
            appid: "30d7ec24042383ae6c2ac11f8a95f608",
            lat: +response.data.latitude,
            lon: +response.data.longitude
          };

          Promise.all([
            axios
              .get("http://api.openweathermap.org/data/2.5/weather", { params })
              .then(response => {
                let data = {
                  city: response.data.name,
                  temp: response.data.main.temp - 273,
                  wind: response.data.wind.speed,
                  humidity: response.data.main.humidity,
                  precipitation: response.data.clouds.all
                };
                onGetWeather(data);
                onGetCity(response.data.name);
              }),
            axios
              .get("http://api.openweathermap.org/data/2.5/forecast", {
                params
              })
              .then(response => {
                let data = response.data.list.splice(0, 5);
                data = data.map((item, index) => ({
                  date: item.dt_txt,
                  temp: item.main.temp - 273,
                  humidity: item.main.humidity,
                  wind: item.wind.speed,
                  precipitation: item.clouds.all
                }));
                onGetFiveDayWeather(data);
              })
          ]).catch(alert);
        });
    });
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
