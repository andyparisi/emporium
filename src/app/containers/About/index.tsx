import * as React from 'react';
const style = require('./style.css');

class About extends React.Component<any, any> {

  public static defaultProps = {
    test: 123
  };

  public render() {
    return (
      <div className={style.About}>
        <h4>{`About ${this.props.test}!?`}</h4>
      </div>
    );
  }
}

export { About }
