import * as React from 'react';
const style = require('./style.css');
import { TextInput } from 'components';

class Login extends React.Component<any, any> {
  public render() {
    return (
      <div className={style.Login}>
        <TextInput placeholder="Email" />
        <TextInput placeholder="Password" />
      </div>
    );
  }
}

export { Login }
