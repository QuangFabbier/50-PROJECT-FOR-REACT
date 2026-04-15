import React from "react";
import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const handleAdd = () => {
    setTodos((prev) => [...prev, todo]);
    setTodo({
      empName: "",
      age: "",
      position: "",
      address: "",
    });
    console.log("handleAdd");
    console.log(todos);
  };
  const [index, setIndex] = useState(-1);

  const setEmpName = (empName) => {
    setTodo({
      empName: empName,
      age: todo.age,
      position: todo.position,
      address: todo.address,
    });
  };
  const setAge = (age) => {
    console.log(age);

    setTodo({
      empName: todo.empName,
      age: age,
      position: todo.position,
      address: todo.address,
    });
  };
  const setPosition = (position) => {
    setTodo({
      empName: todo.empName,
      age: todo.age,
      position: position,
      address: todo.address,
    });
  };
  const setAddress = (address) => {
    setTodo({
      empName: todo.empName,
      age: todo.age,
      position: todo.position,
      address: address,
    });
  };

  const handleDel = (index) => {
    setTodos([
      ...todos.slice(0, index),
      ...todos.slice(index + 1, todos.length),
    ]);
    console.log("handleDel");
    console.log(todos);
  };

  const handleFix = (index) => {
    setTodo(todos[index]);
    setIndex(index);
  };
  const handleSubmit = () => {
    setTodos([
      ...todos.slice(0, index),
      todo,
      ...todos.slice(index + 1, todos.length),
    ]);
    setIndex(-1);
    setTodo({
      empName: "",
      age: "",
      position: "",
      address: "",
    });
  };
  const handleCancel = () => {
    setIndex(-1);
    setTodo({
      empName: "",
      age: "",
      position: "",
      address: "",
    });
  };
  return (
    <div className={styles.content}>
      <div className={styles.info}>
        <div className={styles.infoWrapper}>
          <div className={styles.input}>
            <p>Name</p>
            <input
              id="empName"
              className={styles.inputBox}
              type="text"
              value={todo.empName}
              onChange={(e) => setEmpName(e.target.value)}
            ></input>
          </div>
          <div className={styles.input}>
            <p>Age</p>
            <input
              id="age"
              className={styles.inputBox}
              type="number"
              value={todo.age}
              onChange={(e) => setAge(e.target.value)}
            ></input>
          </div>
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.input}>
            <p>Position</p>
            <input
              id="position"
              className={styles.inputBox}
              type="text"
              value={todo.position}
              onChange={(e) => setPosition(e.target.value)}
            ></input>
          </div>
          <div className={styles.input}>
            <p>Address</p>
            <input
              id="address"
              className={styles.inputBox}
              type="text"
              value={todo.address}
              onChange={(e) => setAddress(e.target.value)}
            ></input>
          </div>
        </div>
      </div>
      <div className={styles.event}>
        {index === -1 ? (
          <button className={styles.eventBtn} onClick={handleAdd}>
            Add
          </button>
        ) : (
          <button className={styles.eventBtn} onClick={handleSubmit}>
            Submit
          </button>
        )}
        {index !== -1 ? (
          <button className={styles.eventBtn} onClick={handleCancel}>
            Cancel
          </button>
        ) : null}
      </div>
      <div className={styles.contentList}>
        <h3>To do list</h3>
        <ol className={styles.list}>
          {todos.map((todo, index) => (
            <li className={styles.listBox}>
              <p>Name: {todo.empName}</p>
              <p>Age: {todo.age}</p>
              <p>Position: {todo.position}</p>
              <p>Address:{todo.address}</p>
              <button
                className={styles.eventBtn}
                onClick={() => handleFix(index)}
              >
                Fix
              </button>
              <button
                className={styles.eventBtn}
                onClick={() => handleDel(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
