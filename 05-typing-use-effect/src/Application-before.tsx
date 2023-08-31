//task: try to fix this code to make it work

import { useEffect, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => setTimeout(() => setCount(count + 1), 1000), [count]);

  return (
    <main>
      <h1>{count}</h1>
    </main>
  );
};

const Application = () => <Counter />;

export default Application;

