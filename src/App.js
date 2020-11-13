import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataSuccess } from "./redux/main";
import "./styles.css";

export default function App() {
  const state = useSelector((state) => {
    {
      JSON.stringify(state);
    }
  });
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{JSON.stringify(state)}</h2>
      <button
        onClick={() =>
          dispatch(getDataSuccess({ name: "Valeria", lastName: "Blanco" }))
        }
      >
        Get Data
      </button>
    </div>
  );
}
