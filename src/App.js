import React, { useCallback } from "react";
import Container from "@material-ui/core/Container";
import Header from "./components/Header/Header";
import MainPageContainer from "./components/MainPage/MainPageContainer";
import MenuOpenButtonContainer from "./components/Menu/MenuOpenButton/MenuOpenButtonContainer";
import MenuContainer from "./components/Menu/MenuContainer";
import WeatherInfoContainer from "./components/WeatherInfo/WeatherInfoContainer";
import Grid from "@material-ui/core/Grid";
import { useMediaQuery } from "react-responsive";

const App = ({ state }) => {
  const screenSize = useMediaQuery({
    query: "(max-width: 959px)"
  });

  const isLittleScreen = useCallback(
    screenSize ? <MenuOpenButtonContainer /> : <MenuContainer />
  );

  return (
    <div>
      <Header />
      <Container>
        <Grid container spacing={3}>
          <Grid item md={3} xs={12}>
            {state.isOpenForm ? <MenuContainer /> : isLittleScreen}
          </Grid>
          <Grid item md={9} xs={12}>
            {state.weather.city ? (
              <WeatherInfoContainer />
            ) : (
              <MainPageContainer />
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
