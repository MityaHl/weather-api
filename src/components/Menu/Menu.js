import React, { useState } from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { css } from 'aphrodite';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styles from './MenuStyles';

const Menu = ({state, onChangeCity, onGetWeather, onGetFiveDaysWeather}) => {

  const [service, setService] = useState(1);

  const queryOpenWeather = () => {
    const params = {
      appid: '30d7ec24042383ae6c2ac11f8a95f608',
      q: state.city
    }

    Promise.all([
      axios
      .get('http://api.openweathermap.org/data/2.5/weather', {params})
      .then(response => {
        let data = {
          city: response.data.name,
          temp: response.data.main.temp - 273,
          wind: response.data.wind.speed,
          humidity: response.data.main.humidity,
          precipitation: response.data.clouds.all
        }
        onGetWeather(data)
      }),
      axios
      .get('http://api.openweathermap.org/data/2.5/forecast', {params})
      .then(response => {
        let data = response.data.list.splice(0,5); 
        data = data.map((item, index) => (
          {
            date: item.dt_txt,
            temp: item.main.temp - 273,
            humidity: item.main.humidity,
            wind: item.wind.speed,
            precipitation: item.clouds.all
          }
        ))
        onGetFiveDaysWeather(data)
      })
    ]).catch(alert);    
  }

  const queryWeatherBit = () => {
    const params = {
      key: '0678e5c49d0e4ca3abc879648e4342b3',
      city: state.city
      }

    Promise.all([
      axios
      .get('https://api.weatherbit.io/v2.0/current', {params})
      .then(response => {
        let data = {
          city: response.data.data[0].city_name,
          temp: response.data.data[0].temp,
          wind: response.data.data[0].wind_spd,
          humidity: response.data.data[0].rh,
          precipitation: response.data.data[0].clouds
        }
        onGetWeather(data)
      }),
      axios
      .get('https://api.weatherbit.io/v2.0/forecast/daily', {params})
      .then(response => {
        let data = response.data.data.splice(0,5); 
        data = data.map((item, index) => (
          {
            date: item.datetime,
            temp: item.temp,
            humidity: item.rh,
            wind: item.wind_spd.toFixed(1),
            precipitation: item.clouds_mid
          }
        ))
        onGetFiveDaysWeather(data)
      })
    ]).catch(alert);    
  }

  return (
    <div>
        <Grid container direction="column" alignItems="center">
              <Typography variant="h6" className={css(styles.typography)}>
                  Choose the city
              </Typography>
              <Autocomplete
                    id="combo-box-demo"
                    options={['one']}
                    className={css(styles.autoComplit)}
                    style={{ width: 300 }}
                    renderInput={params => (
                        <TextField label="City" variant="outlined" fullWidth 
                          onChange={ (e)=>{
                            onChangeCity(e.target.value)
                          }}
                        />
                    )}
                />
              <Typography variant="h6" className={css(styles.typography)}>
                  Choose service
              </Typography>
              <FormControl className={css(styles.select)}>
                <InputLabel>Service</InputLabel>
                <Select
                  onChange={(e)=>{setService(e.target.value)}}
                >
                  <MenuItem value={1}>OpenWeather</MenuItem>
                  <MenuItem value={2}>WeatherBit</MenuItem>
                </Select>
              </FormControl>
              <Button variant="contained" color="primary" className={css(styles.button)} onClick={
                service === 1 ? (queryOpenWeather) : (queryWeatherBit)
              }>
                Find Out
              </Button>
          </Grid>
    </div>
  );
}

export default Menu;
