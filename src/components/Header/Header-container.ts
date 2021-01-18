import Header from "./Header";
import { logout } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { AppStateType } from "../../redux/redux-store";

const mapStateToProps = (state: AppStateType) => {
  return {
    id: state.auth.id,
    email: state.auth.email,
    login: state.auth.login,
    name: state.auth.name,
    photo: state.auth.photo,
  };
};
const mapDispatchToProps = { logout };
export type MapStateToPropsType = ReturnType<typeof mapStateToProps>;
export type MapDispatchToPropsType = typeof mapDispatchToProps;
const HeaderContainer = compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Header);

export default HeaderContainer;
