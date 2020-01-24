import { connect } from 'react-redux'

import { enterCity } from '@/store/actions/city'
import WeatherInfo from './component'

const mapStateToProps = state => ({
  weather: state.weather,
  fiveDayWeather: state.fiveDayWeather,
})

const mapDispatchToProps = dispatch => ({
  onChangeCity: data => dispatch(enterCity(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(WeatherInfo)
