import { connect } from 'react-redux'

import { enterCity } from '@/store/actions/city'
import { isOpenFormFalse } from '@/store/actions/isOpenForm'
import { clickLoadWeather } from '@/store/actions/weather'

import Menu from './component'

const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({
  onChangeCity: data => dispatch(enterCity(data)),
  onGetWeatherData: params => dispatch(clickLoadWeather(params)),
  onOpenFormFalse: () => dispatch(isOpenFormFalse()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
