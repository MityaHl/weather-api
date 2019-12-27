import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { css } from 'aphrodite';
import styles from './OneDayInfoStyles';

const OneDayInfo = ({data, city, todayDate}) => {
  return (
    <Grid
      item
      className={css(styles.item)}
    >
      <Card
          className={css(styles.card)}
      >
        <CardHeader
            avatar={
                <Avatar aria-label="recipe">
                    <img alt='weather' src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"/>
                </Avatar>
            }
            title={<Typography>{city}</Typography>}
            subheader={data.date.slice(0, 10)}
        />
        <CardContent>
          <List className={css(styles.list)}>
            <ListItem>
              <ListItemIcon>
                  <i className="fas fa-temperature-high"></i>
              </ListItemIcon>
              <ListItemSecondaryAction>
                  <Typography className={css(styles.listText)}>{(data.temp).toFixed(0) + " ℃"}</Typography>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                  <i className="fas fa-cloud-rain"></i>
              </ListItemIcon>
                  <ListItemSecondaryAction>
              <Typography className={css(styles.listText)}>{data.precipitation + " %"}</Typography>
                  </ListItemSecondaryAction>
              </ListItem>
            <ListItem>
              <ListItemIcon>
                  <i className="fas fa-wind"></i>
              </ListItemIcon>
              <ListItemSecondaryAction>
                  <Typography className={css(styles.listText)}>{data.wind + " mps"}</Typography>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                  <i className="fas fa-tint"></i>
              </ListItemIcon>
              <ListItemSecondaryAction>
                  <Typography className={css(styles.listText)}>{data.humidity + " %"}</Typography>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default OneDayInfo;