import * as React from 'react';
const { connect } = require('react-redux');

import { getUser, login } from 'modules/user';
import { IUser, IUserAction } from 'interfaces/user';
import { Login } from 'components';

const style = require('./style.css');

interface IProps {
  user: IUser;
  getUser: Redux.ActionCreator<IUserAction>;
  login: Redux.ActionCreator<IUserAction>;
}

@connect(
  (state) => ({
    user: state.user,
    token: state.token
  }),
  (dispatch) => ({
    login: (email, password) => dispatch(login(email, password))
  })
)
class Home extends React.Component<IProps, any> {
  public constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  public render() {
    return (
      <div className={style.Home}>
        <h1>{this.props.user.email}</h1>
        <Login onClick={this.handleLogin} />
      </div>
    );
  }

  public handleLogin(state) {
    const { email, password } = state;
    this.props.login(email, password);
  }
}

export { Home }
