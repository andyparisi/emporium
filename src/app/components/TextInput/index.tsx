import * as React from 'react';
const style = require('./style.css');

class TextInput extends React.Component<any, any> {
  public render() {
    return (
      <div className={style.TextInput}>
        <input type="text" />
      </div>
    );
  }
}

export { TextInput }
