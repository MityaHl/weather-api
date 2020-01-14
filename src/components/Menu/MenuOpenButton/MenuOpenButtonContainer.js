import { connect } from "react-redux";
import { isOpenFormTrue } from "../../../store/actions/isOpenForm";
import MenuOpenButton from "./MenuOpenButton";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  onChangeIsOpenForm: () => {
    dispatch(isOpenFormTrue());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuOpenButton);
