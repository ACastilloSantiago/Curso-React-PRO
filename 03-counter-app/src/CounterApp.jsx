import PropTypes from "prop-types";
import { useState } from "react";
const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);
  const handleAdd = () => {
    setCounter((c) => c + 1);
  };
  const handleReset = () => {
    setCounter(value);
  };
  const handleSubtract = () => {
    setCounter((c) => c - 1);
  };
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleSubtract}>-1</button>
      <button aria-label="btn-reset" onClick={handleReset}>
        reset
      </button>
      <button onClick={handleAdd}>+1</button>
    </>
  );
};
CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
export default CounterApp;
