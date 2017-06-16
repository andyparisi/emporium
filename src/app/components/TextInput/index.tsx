import * as React from 'react';
const style = require('./style.css');

class TextInput extends React.Component<any, any> {
  public render() {
    const { placeholder } = this.props;

    return (
      <div className={style.TextInput}>
        <input type="text" placeholder={placeholder} />
      </div>
    );
  }
}

export { TextInput }
