import * as React from 'react';
const { connect } = require('react-redux');
import { IUser } from 'interfaces/user';

const style = require('./style.css');

interface IProps {
  user: IUser;
}

@connect(
  (state) => ({
    user: state.user
  })
)
class Dashboard extends React.Component<IProps, any> {
  public constructor(props) {
    super(props);
  }

  public render() {
    return (
      <div className={style.Dashboard}>
        <h1>{`Welcome to Emporium!, ${this.props.user.user.firstName}`}</h1>
      </div>
    );
  }
}

export { Dashboard }
