import { combineReducers } from 'redux';
import city from './city';
import weather from './weather';
import fiveDayWeather from './fiveDayWeather';

export default combineReducers({
   city, 
   weather,
   fiveDayWeather
})    