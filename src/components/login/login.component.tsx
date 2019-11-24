import React from "react";
import { connect } from "react-redux";
import { ALogin, LoginPayload } from "../../actions/login.action";
import "./login.component.scss";

interface IProps {
  onLoginUser: any;
  auth: boolean;
}

const Login = (props: IProps) => {
  return (
    <div className="loginWrap">
      <div className="login">
        <div className="title">
          <h1>Intranet</h1>
          <span></span>
        </div>
        <form>
          <input
            onClick={e => {
              e.preventDefault();
              props.onLoginUser({ auth: !props.auth });
            }}
            style={{backgroundColor: props.auth ? 'green' : 'red'}}
            className="submit"
            type="submit"
            name="submit"
            value="Se connecter"
          />
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    auth: state.login.auth
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onLoginUser: (payload: LoginPayload) => dispatch(ALogin(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
