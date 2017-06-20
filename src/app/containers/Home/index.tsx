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
  isLoaded: Redux.ActionCreator<IUserAction>;
}

@connect(
  (state) => ({
    user: state.user,
    isLoaded: state.isLoaded
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
    const { isLoaded, user } = this.props.user;
    let login: JSX.Element = <Login onClick={this.handleLogin} />;

    if (isLoaded) {
      login = <span>{`Signed in as ${user.firstName} ${user.lastName} (${user.email})`}</span>;
    }

    return (
      <div className={style.Home}>
        <h1>Login to Emporium</h1>
        {login}
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
