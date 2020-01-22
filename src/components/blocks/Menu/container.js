import { connect } from "react-redux";
import { enterCity } from "@/store/actions/city";
import { isOpenFormFalse } from "@/store/actions/isOpenForm";
import { clickLoadWeather } from "@/store/actions/weatherBit";
import { clickLoadOpenWeather } from "@/store/actions/openWeather";

import Menu from "./component";

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = dispatch => ({
  onChangeCity: data => dispatch(enterCity(data)),
  onGetOpenWeatherData: params => {
    dispatch(clickLoadOpenWeather(params));
  },
  onGetWeatherBitData: params => {
    dispatch(clickLoadWeather(params));
  },
  onOpenFormFalse: () => {
    dispatch(isOpenFormFalse());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
