import * as React from 'react';
const style = require('./style.css');

interface IProps {
  placeholder?: string;
  value?: string;
  type?: string;
  onChange: (e: any) => void;
}

class TextInput extends React.Component<IProps, any> {
  public constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  public static defaultProps: Partial<IProps> = {
    value: 'No value',
    type: 'text'
  };

  public render(): JSX.Element {
    const { placeholder, value, type } = this.props;

    return (
      <div className={style.TextInput}>
        <input type={type} placeholder={placeholder} value={value} onChange={this.handleChange} />
      </div>
    );
  }

  public handleChange(e): void {
    this.props.onChange(e.target.value);
  }
}

export { TextInput }
