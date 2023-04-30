// ChildComponent.js

import React from 'react';

function ChildComponent({ count, onIncrement }) {
  return (
    <div>
      <div data-testid="count">{count}</div>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
}

export default ChildComponent;
