import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, random } from "./action";
import "./count.css";

const Counter = () => {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="wrapper_counter">
      <p>Счётчик {count}</p>
      <div className="btn">
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(random())}>rand</button>
      </div>
    </div>
  );
};

export default Counter;
