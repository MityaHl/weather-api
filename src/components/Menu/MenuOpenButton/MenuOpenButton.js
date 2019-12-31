import React from 'react';
import styles from './MenuButtonStyles';
import { css } from 'aphrodite';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const MenuOpenButton = ({onChangeIsOpenForm}) => {
  return (
    <Grid container direction="column" alignItems="center">
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

export default MenuOpenButton;

