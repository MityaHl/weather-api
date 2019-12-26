import React  from 'react';
import Container from '@material-ui/core/Container';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import MenuContainer from './components/Menu/MenuContainer';
import WeatherInfoContainer from './components/WeatherInfo/WeatherInfoContainer';
import Grid from '@material-ui/core/Grid';

const App = (state) => {
  return (
    <div>
      <Header/>
      <Container>
        <Grid container spacing={3}>
            <Grid item xs={3}>
              <MenuContainer/>
            </Grid>
            <Grid item xs={9}>
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
