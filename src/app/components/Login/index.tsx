import * as React from 'react';
const style = require('./style.css');
import { TextInput } from 'components';

interface IState {
  email: string;
  password: string;
}

class Login extends React.Component<any, IState> {
  public constructor(props) {
    super(props);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  public state = {
    email: '',
    password: ''
  };

  public render() {
    const { email, password } = this.state;

    return (
      <div className={style.Login}>
        <TextInput placeholder="Email" onChange={this.handleEmailChange} value={email} />
        <TextInput placeholder="Password" type="password" onChange={this.handlePasswordChange} value={password} />
      </div>
    );
  }

  public handleEmailChange(value: string): void {
    this.setState({
      email: value
    });
  }

  public handlePasswordChange(value: string): void {
    this.setState({
      password: value
    });
  }
}

export { Login }
