import React from "react";
import { useState } from "react";
import useList from "./customHooks/useList";
import "./App.css";
export default function App() {
  const { list, push, pull } = useList("");
  const [todo, setTodo] = useState("");

  const errorr = () => {
    document.getElementById("errorOccured").innerHTML =
      "Please type something to add!";
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo.length > 0) {
      push(todo);
      setTodo("");
      document.getElementById("errorOccured").innerHTML = "";
    } else errorr();
  };
  return (
    <>
      <h2>To Do List</h2>
      <div className="center">
        <div className="inputfield">
          <h6>Add Item</h6>
          <form
            onSubmit={(event) => {
              onSubmit(event);
            }}
          >
            <input
              type="text"
              value={todo}
              onChange={(e) => {
                setTodo(e.target.value);
              }}
            />
            <button class="bg-success text-white rounded" type="submit">
              Add
            </button>
          </form>
          <p id="errorOccured"></p>
        </div>
        <hr></hr>
        <div>
          {list.map((listitem, listindex) => {
            return (
              <div className="result">
                <h5 key={listindex}>
                  {listindex + 1}. {listitem}
                </h5>

                <button
                  class="bg-danger text-white rounded btn-close"
                  onClick={() => {
                    pull(listindex);
                  }}
                >
                 
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
