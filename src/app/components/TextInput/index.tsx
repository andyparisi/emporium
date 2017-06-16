import * as React from 'react';
const style = require('./style.css');

interface IProps {
  placeholder?: string;
  value?: string;
  onChange: (any) => void;
}

class TextInput extends React.Component<IProps, any> {
  public static defaultProps: Partial<IProps> = {
    value: 'No value'
  }

  public render(): JSX.Element {
    const { placeholder, value } = this.props;
    
    return (
      <div className={style.TextInput}>
        <input type="text" placeholder={placeholder} value={value} onChange={this.handleChange} />
      </div>
    );
  }

  public handleChange(e): void {
    this.props.onChange(e.target.value);
  }
}

export { TextInput }
