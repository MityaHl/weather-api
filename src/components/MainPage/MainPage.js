import React from 'react'
import { css } from 'aphrodite'
import Grid from '@material-ui/core/Grid'

import styles from './MainPageStyles'

const gridClassName = css(styles.text)

const MainPage = () => (
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

export default MainPage
