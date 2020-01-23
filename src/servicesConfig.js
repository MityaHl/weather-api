import {
  WEATHERBIT_API_KEY,
  OPENWEATHER_API_KEY,
  OPENWEATHER_ONE_DAY,
  OPENWEATHER_FIVE_DAY,
  WEATHERBIT_FIVE_DAY,
  WEATHERBIT_ONE_DAY,
} from "@/constants";
import {
  weatherBitOneDayMapper,
  weatherBitFiveDayMapper,
  openWeatherOneDayMapper,
  openWeatherFiveDayMapper,
} from '@/requests/mappers'

export default [
  {
    title: 'OpenWeather',
    oneDayDataUrl: OPENWEATHER_ONE_DAY,
    fiveDaysDataUrl: OPENWEATHER_FIVE_DAY,
    oneDayDataMapper: openWeatherOneDayMapper,
    fiveDaysDataMapper: openWeatherFiveDayMapper,
    cityNameField: 'q',
    defaultParameters: {
      appid: OPENWEATHER_API_KEY,
    }
  },
  {
    title: 'WeatherBit',
    oneDayDataUrl: WEATHERBIT_ONE_DAY,
    fiveDaysDataUrl: WEATHERBIT_FIVE_DAY,
    oneDayDataMapper: weatherBitOneDayMapper,
    fiveDaysDataMapper: weatherBitFiveDayMapper,
    cityNameField: 'city',
    defaultParameters: {
      key: WEATHERBIT_API_KEY,
    }
  },
]