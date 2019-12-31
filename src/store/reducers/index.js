import { combineReducers } from 'redux';
import city from './city';
import weather from './weather';
import fiveDayWeather from './fiveDayWeather';
import isOpenForm from './isOpenForm';

export default combineReducers({
   city, 
   weather,
   isOpenForm,
   fiveDayWeather
})    