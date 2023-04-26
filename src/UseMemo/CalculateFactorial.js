import { useState, useMemo } from 'react';
//From time to time React components have to perform expensive calculations. For example, given a big list of employees and a search query, the component should filter the employees' names by the query.
/* 
 
suppose karo mai add function ko use krta hoon same parameter ke saath 
aur thodi der baad  user A bhi isi function ko use kta hai 
uske thodi der baad user B bhi ....
1. usememo perfomance increase ke liye
2.

function add(a,b,c){
  return a+b+c;
}
add(2,3,4);

*/ 

export function CalculateFactorial() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  const factorial = useMemo(() => factorialOf(number), [number]);

  const onChange = event => {
    setNumber(Number(event.target.value));
  };
  const onClick = () => setInc(inc => inc + 1);
  
  return (
    <div>
      Factorial of 
      <input type="number" value={number} onChange={onChange} />
      is {factorial}
      <button onClick={onClick}>Re-render</button>
    </div>
  );
}

function factorialOf(n) {
  console.log('factorialOf(n) called!');
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}