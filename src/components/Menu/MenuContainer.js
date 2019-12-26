import { connect } from 'react-redux';
import { enterCity } from '../../store/actions/city';
import { getWeather } from '../../store/actions/weather';
import { getFiveDayWeather } from '../../store/actions/getFiveDayWeather';
import Menu from './Menu';

const mapStateToProps = state => ({
    state: state
  });

const mapDispatchToProps =  dispatch => ({
    onChangeCity: (data) => {
        dispatch(enterCity(data));
    },
    onGetWeather: (data) => {
      dispatch(getWeather(data));
    },
    onGetFiveDaysWeather: (data) => {
      dispatch(getFiveDayWeather(data));
    }
  });

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(Menu);