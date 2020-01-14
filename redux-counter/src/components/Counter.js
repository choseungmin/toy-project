import React from 'react';
import Proptypes from 'prop-types';
import './Counter.css';

const Counter = ({ number, color, index, onIncrement, onDecrement, onSetColor }) => {
  return (
    <div
      className="Counter"
      onClick={ () => onIncrement(index) }
      onContextMenu={
        (e) => {
          e.preventDefault();
          onDecrement(index);
        }
      }
      onDoubleClick={ () => onSetColor(index) }
      style={{ backgroundColor: color }}
    >
      { number }
    </div>
  )
};

Counter.propTypes = {
  index: Proptypes.number,
  number: Proptypes.number,
  color: Proptypes.string,
  onIncrement: Proptypes.func,
  onDecrement: Proptypes.func,
  onSetColor: Proptypes.func
};

Counter.defaultProps = {
  index: 0,
  number: 0,
  color: 'black',
  onIncrement: () => console.warn('onIncrement not defined'),
  onDecrement: () => console.warn('onDecrement not defined'),
  onSetColor: () => console.warn('onSetColor not defined')
};

export default Counter;
