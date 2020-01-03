import { connect } from "react-redux";
import { getWeather } from "../../store/actions/weather";
import { getFiveDayWeather } from "../../store/actions/getFiveDayWeather";
import { enterCity } from "../../store/actions/city";

import MainPage from "./MainPage";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  onGetWeather: data => {
    dispatch(getWeather(data));
  },
  onGetCity: data => {
    dispatch(enterCity(data));
  },
  onGetFiveDayWeather: data => {
    dispatch(getFiveDayWeather(data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
