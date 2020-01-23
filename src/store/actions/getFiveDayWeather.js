import { QUERY_FIVE_DAY_WEATHER } from "@/constants"

export const getFiveDayWeather = data => ({
  type: QUERY_FIVE_DAY_WEATHER,
  payload: data
});
