import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { css } from "aphrodite";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import styles from "./MenuStyles";

const Menu = ({
  state,
  onChangeCity,
  onGetOpenWeatherData,
  onGetWeatherBitData,
  onOpenFormFalse
}) => {
  const [service, setService] = useState(1);

  const queryOpenWeather = () => {
    const params = {
      appid: "30d7ec24042383ae6c2ac11f8a95f608",
      q: state.city
    };
    onGetOpenWeatherData(params);
  };

  const queryWeatherBit = () => {
    const params = {
      key: "0678e5c49d0e4ca3abc879648e4342b3",
      city: state.city
    };
    onGetWeatherBitData(params);
  };

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
          id="combo-box-demo"
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
              setService(e.target.value);
            }}
          >
            <MenuItem value={0}>OpenWeather</MenuItem>
            <MenuItem value={1}>WeatherBit</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          className={css(styles.button)}
          onClick={service === 0 ? queryOpenWeather : queryWeatherBit}
        >
          Find Out
        </Button>
      </Grid>
    </div>
  );
};

export default Menu;
