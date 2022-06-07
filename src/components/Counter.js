import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  increamentByAmount,
} from "../store/counter/counter";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incAmt, setIncAmt] = useState(0);

  const incHandler = (e) => {
    setIncAmt(Number(e.target.value));
  };

  return (
    <div>
      {count}
      <input type="number" value={incAmt} onChange={incHandler} />
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(increamentByAmount(incAmt))}>
        Inc By Amt
      </button>
    </div>
  );
};

export default Counter;
