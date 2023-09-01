import { useEffect, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [count]);

  return (
    <main>
      <h1>{count}</h1>
    </main>
  );
};

const Application = () => <Counter />;

export default Application;
/*
TypeScript is giving you an error because it's expecting the cleanup function returned 
by useEffect to have a specific type, which is (void | Destructor). 

To fix this error, you can explicitly specify the return type of your useEffect function.
*/