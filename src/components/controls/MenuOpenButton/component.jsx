import React from 'react'
import { css } from 'aphrodite'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import styles from './styles'

const MenuOpenButton = ({ onChangeIsOpenForm }) => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
    >
      <Button
        variant="contained"
        color="primary"
        className={css(styles.button)}
        onClick={onChangeIsOpenForm}
      >
        Open form
      </Button>
    </Grid>
  )
}

MenuOpenButton.propTypes = {
  onChangeIsOpenForm: PropTypes.func,
}

export default MenuOpenButton
