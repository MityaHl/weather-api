import React  from 'react';
import Container from '@material-ui/core/Container';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import MenuContainer from './components/Menu/MenuContainer';
import WeatherInfoContainer from './components/WeatherInfo/WeatherInfoContainer';
import Grid from '@material-ui/core/Grid';
import styles from './AppStyles';
import { css } from 'aphrodite';

const App = (state) => {
  return (
    <div>
      <Header/>
      <Container>
        <Grid container spacing={3}>
            <Grid item md={3} xs={12}>
              <MenuContainer/>
            </Grid>
            <Grid item md={9} xs={12}>
              {
                state.state.fiveDayWeather[1] ? (<WeatherInfoContainer/>) : (<MainPage/>)
              }  
            </Grid>
          </Grid>
      </Container>
    </div>
  );
}

export default App;
