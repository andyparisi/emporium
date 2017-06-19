import * as React from 'react';
const { connect } = require('react-redux');
import { browserHistory } from 'react-router';

import { getUser, loginUser } from 'modules/user';
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
    login: (email, password, cb) => dispatch(loginUser(email, password, cb))
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
        <h1>{this.props.user.user.email}</h1>
        <Login onClick={this.handleLogin} />
      </div>
    );
  }

  public handleLogin(state) {
    const { email, password } = state;
    this.props.login(email, password, (res) => {
      browserHistory.push('/dashboard');
    });
  }
}

export { Home }
