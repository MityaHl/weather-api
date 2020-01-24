import React, { useCallback } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { useMediaQuery } from 'react-responsive'

import Header from './components/blocks/Header/index'
import MainPageContainer from './components/pages/MainPage/index'
import MenuOpenButtonContainer from './components/controls/MenuOpenButton/index'
import MenuContainer from './components/blocks/Menu/index'
import WeatherInfoContainer from './components/pages/WeatherInfo/index'

const App = ({ state }) => {
  const screenSize = useMediaQuery({
    query: '(max-width: 959px)',
  })

  const isLittleScreen = useCallback(
    screenSize ? <MenuOpenButtonContainer /> : <MenuContainer />
  )

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
  )
}

export default App
