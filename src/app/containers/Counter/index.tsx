import * as React from 'react';
import { increment, decrement } from 'modules/counter/';
import { ICounter } from 'interfaces/counter';
import { ICounterAction } from 'interfaces/counter';
const { connect } = require('react-redux');
const style = require('./style.css');

interface IProps {
  counter: ICounter;
  increment: Redux.ActionCreator<ICounterAction>;
  decrement: Redux.ActionCreator<ICounterAction>;
}

@connect(
  (state) => ({ counter: state.counter }),
  (dispatch) => ({
    decrement: () => dispatch(decrement()),
    increment: () => dispatch(increment()),
  }),
)

class Counter extends React.Component<IProps, void> {
  public render() {
    const { increment, decrement, counter } = this.props;

    return (
      <div className={style.Counter}>
        <h4>Counter Examplez</h4>
        <button
          name="incBtn"
          onClick={increment}>
          INCREMENT
        </button>
        <button
          name="decBtn"
          onClick={decrement}
          disabled={counter.count <= 0}>
          DECREMENT
        </button>
        <p>{counter.count}</p>
      </div>
    );
  }
}

export { Counter }
