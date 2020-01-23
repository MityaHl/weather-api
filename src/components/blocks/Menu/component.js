import React, { useState } from "react";
import { css } from "aphrodite";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import services from '@/servicesConfig'

import styles from "./styles";

const Menu = ({
  state,
  onChangeCity,
  onGetWeatherData
}) => {
  const [serviceIndex, setServiceIndex] = useState(0);

  const requestServiceData = (serviceData = {}) => () => {

     if (serviceData && serviceData.oneDayDataUrl) {
       console.log('2');
      onGetWeatherData({
        ...serviceData,
        parameters: {
          ...serviceData.defaultParameters,
          [serviceData.cityNameField]: state.city,
        }
      })
      console.log('2');
     }
  }

  return (
    <div>
      <Grid container direction="column" alignItems="center">
        <Typography
          variant="h6"
          className={css(styles.typography, styles.smallTypography)}
        >
          Choose the city
        </Typography>
        <Autocomplete
          options={["one"]}
          className={css(styles.autoComplit)}
          style={{ width: 300 }}
          renderInput={params => (
            <TextField
              label="City"
              variant="outlined"
              fullWidth
              value={state.city}
              onChange={e => {
                onChangeCity(e.target.value);
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
            defaultValue={0}
            onChange={e => {
              setServiceIndex(e.target.value);
            }}
          >
            {services.map((service, index) => (
              <MenuItem value={index}>{service.title}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          className={css(styles.button)}
          onClick={requestServiceData(services[serviceIndex])}
        >
          Find Out
        </Button>
      </Grid>
    </div>
  );
};

export default Menu;
