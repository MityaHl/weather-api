import { connect } from 'react-redux'

import { getWeather } from '@/store/actions/weather'
import MainPage from './component'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  onGetWeather: () => dispatch(getWeather()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
