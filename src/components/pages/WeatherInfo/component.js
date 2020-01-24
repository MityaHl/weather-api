import React from "react";
import { css } from "aphrodite";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import InvertColorsIcon from "@material-ui/icons/InvertColors";

import OneDayInfo from "./OneDayInfo/index";

import { WEATHER_IMAGE } from "@/constants";

import styles from "./styles";

const WeatherInfo = ({ weather, fiveDayWeather }) => {
  const date = new Date();
  const month = date.getMonth() + 1;
  const todayDate = date.getDate() + "." + month + "." + date.getFullYear();
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={css(styles.service)}
    >
      <Paper className={css(styles.paper)}>
        <Typography 
          variant="h5" 
          component="h3" 
          className={css(styles.today)}
        >
          Today
        </Typography>
        <Card>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe">
                <img
                  alt="weather"
                  src={WEATHER_IMAGE}
                />
              </Avatar>
            }
            title={<Typography>{weather.city}</Typography>}
            action={
              <Typography
                variant="h5"
                component="h3"
                className={css(styles.temperature)}
              >
                {weather.temp.toFixed(0) + " celsius"}
              </Typography>
            }
            subheader={todayDate}
          />
          <CardContent>
            <List>
              <ListItem className={css(styles.listItem)}>
                <ListItemIcon>
                  <i className="fas fa-2x fa-cloud-rain"></i>
                </ListItemIcon>
                <ListItemText primary="Precipitation" />
                <ListItemSecondaryAction>
                  <Typography>{weather.precipitation + " %"}</Typography>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem className={css(styles.listItem)}>
                <ListItemIcon>
                  <i className="fas fa-2x fa-wind"></i>
                </ListItemIcon>
                <ListItemText primary="Wind spd." />
                <ListItemSecondaryAction>
                  <Typography>{weather.wind.toFixed(1) + " mps"}</Typography>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem className={css(styles.listItem)}>
                <ListItemIcon>
                  <InvertColorsIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText primary="Humidity" />
                <ListItemSecondaryAction>
                  <Typography>{weather.humidity + " %"}</Typography>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Paper>
      {
        fiveDayWeather[1] && (
          <Paper className={css(styles.paper)}>
            <Typography 
              className={css(styles.today)} 
              variant="h5" 
              component="h3"
            >
              For a few days
            </Typography>
            <Grid 
              container 
              direction="row" 
              justify="space-around" 
              spacing={1}
            >
              {fiveDayWeather.map((item, index) => (
                <OneDayInfo
                  key={index}
                  data={item}
                  city={weather.city}
                />
              ))}
            </Grid>
          </Paper>
        )
      }
    </Grid>
  );
};

export default WeatherInfo;
