// ParentComponent.js

import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  return <ChildComponent count={count} onIncrement={handleIncrement} />;
}

export default ParentComponent;
