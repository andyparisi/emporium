import * as React from 'react';
const { connect } = require('react-redux');
import { browserHistory } from 'react-router';

import { getUser, loginUser, logoutUser } from 'modules/user';
import { IUser, IUserAction } from 'interfaces/user';
import { Login } from 'components';

const style = require('./style.css');

interface IProps {
  user: IUser;
  getUser: Redux.ActionCreator<IUserAction>;
  login: Redux.ActionCreator<IUserAction>;
  logout: Redux.ActionCreator<IUserAction>;
  isLoggedIn: Redux.ActionCreator<IUserAction>;
}

@connect(
  (state) => ({
    user: state.user,
    isLoggedIn: state.isLoggedIn
  }),
  (dispatch) => ({
    login: (email, password, cb) => dispatch(loginUser(email, password, cb)),
    logout: () => dispatch(logoutUser())
  })
)
class Home extends React.Component<IProps, any> {
  public constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  public render() {
    const { isLoggedIn, user } = this.props.user;
    let login: JSX.Element = <Login onClick={this.handleLogin} />;

    if (isLoggedIn) {
      login = (
        <div>
          <div>{`Signed in as ${user.firstName} ${user.lastName} (${user.email})`}</div>
          <div><button onClick={this.handleLogout}>Sign out</button></div>
        </div>
      );
    }

    return (
      <div className={style.Home}>
        <h1>Login to Emporium</h1>
        {login}
      </div>
    );
  }

  public handleLogin(state): void {
    const { email, password } = state;
    this.props.login(email, password, (res) => {
      browserHistory.push('/dashboard');
    });
  }

  public handleLogout(): void {
    this.props.logout();
  }
}

export { Home }
