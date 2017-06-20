const appConfig = require('../../../../config/main');

import * as React from 'react';
import * as Helmet from 'react-helmet';
import { Header } from 'components';
import { getUser } from 'redux/modules/user';
const { connect } = require('react-redux');

const style = require('./style.css');

@connect(
  (state) => ({ user: state.user }),
  (dispatch) => ({
    getUser: (userId, cb) => dispatch(getUser(userId))
  })
)
class App extends React.Component<any, any> {
  public componentWillMount(): void {
    const userId: string = window.localStorage.getItem('userId');
    if (userId && !this.props.user.isLoaded) {
      this.props.getUser(userId);
    }
  }

  public render(): JSX.Element {
    return (
      <section className={style.AppContainer}>
        <Helmet {...appConfig.app} {...appConfig.app.head}/>
        <Header />
        {this.props.children}
      </section>
    );
  }
}

export { App }
