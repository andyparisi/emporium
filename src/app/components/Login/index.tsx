import * as React from 'react';
const style = require('./style.css');
import { TextInput } from 'components';

interface IProps {
  onClick: (state: any) => void;
}

interface IState {
  email: string;
  password: string;
}

class Login extends React.Component<IProps, IState> {
  public constructor(props) {
    super(props);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  public state = {
    email: '',
    password: ''
  };

  public render(): JSX.Element {
    const { email, password } = this.state;

    return (
      <div className={style.Login}>
        <TextInput placeholder="Email" onChange={this.handleEmailChange} value={email} />
        <TextInput placeholder="Password" type="password" onChange={this.handlePasswordChange} value={password} />
        <div>
          <button onClick={this.handleLoginClick}>Login</button>
        </div>
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

  public handleLoginClick(e): void {
    this.props.onClick(this.state);
  }
}

export { Login }
