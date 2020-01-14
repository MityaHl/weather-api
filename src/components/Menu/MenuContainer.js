import { connect } from "react-redux";
import { enterCity } from "../../store/actions/city";
import { isOpenFormFalse } from "../../store/actions/isOpenForm";
import { openWeather } from "../../store/actions/openWeather";
import { weatherBit } from "../../store/actions/weatherBit";
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
  onGetWeatherBitData: data => {
    dispatch(weatherBit(data));
  },
  onOpenFormFalse: () => {
    dispatch(isOpenFormFalse());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
