import React from "react";
import { css } from "aphrodite";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";

import OneValueRow from './OneValueRow';

import { WEATHER_IMAGE } from "@/constants"
import { values } from '../../../../helpers/oneDayDataToArray';

import styles from "./styles";

const OneDayInfo = ({ data, city }) => {

  const oneDatValues = values(data);

  return (
    <Grid item className={css(styles.item)}>
      <Card className={css(styles.card)}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe">
              <img
                alt="weather"
                src={WEATHER_IMAGE}
              />
            </Avatar>
          }
          title={<Typography>{city}</Typography>}
          subheader={data.date.slice(0, 10)}
        />
        <CardContent>
          <List className={css(styles.list)}>
            {
              oneDatValues.map((item, index) => (
                <OneValueRow data={item} key={index}/>
              ))
            }
          </List>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default OneDayInfo;
