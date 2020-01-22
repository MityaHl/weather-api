import { connect } from "react-redux";
import { enterCity } from "../../store/actions/city";
import { isOpenFormFalse } from "../../store/actions/isOpenForm";
import { openWeather } from "../../store/actions/openWeather";
import { weatherBit } from "../../store/actions/weatherBit";
import { trySaga } from "../../store/actions/city";
import { clickLoadWeather } from "../../store/actions/weatherBit";

import Menu from "./Menu";

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = dispatch => ({
  onChangeCity: data => {
    dispatch(enterCity(data));
  },
  onGetOpenWeatherData: data => {
    dispatch(openWeather(data));
  },
  onGetWeatherBitData: params => {
    dispatch(clickLoadWeather(params));
  },
  onOpenFormFalse: () => {
    dispatch(isOpenFormFalse());
  },
  trySaga: () => {
    dispatch(trySaga());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
