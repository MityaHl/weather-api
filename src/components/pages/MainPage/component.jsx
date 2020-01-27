import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import Grid from '@material-ui/core/Grid'

import styles from './styles'

const gridClassName = css(styles.text)

const MainPage = ({ onGetWeather }) => {
  useEffect(() => onGetWeather())

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
  )
}

MainPage.propTypes = {
  onGetWeather: PropTypes.func,
}

export default MainPage
