import React from 'react'
import { css } from 'aphrodite'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'

import styles from '../styles'

const OneValueRow = ({ data }) => {
  return (
    <ListItem>
      <ListItemIcon>
        {data.icon}
      </ListItemIcon>
      <ListItemSecondaryAction>
        <Typography className={css(styles.listText)}>
          {data.value}
        </Typography>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default OneValueRow
