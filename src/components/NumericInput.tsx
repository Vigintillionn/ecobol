// import { useState } from "react";

interface numericInputProps {
  min: number;
  max: number;
  val: string; 
  onValChange: (val: string) => void
}

export default function NumericInput(props: numericInputProps) {
  const val: string = props.val ;
  const setVal: (val: string) => void = props.onValChange;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let num = parseInt(e.target.value);
    changeValue(num);
  }

  const changeValue = (val: number) => {
    setVal((isNaN(val) ? "" : val > props.max ? props.max : Math.max(props.min, val)).toString());
  }

  return (
    <span>
      <input type="text" onChange={handleChange} value={val} />
      <button onClick={() => changeValue(parseInt(val) + 1)}>+</button>
      <button onClick={() => changeValue(parseInt(val) - 1)}>-</button>
    </span>
  )
}

