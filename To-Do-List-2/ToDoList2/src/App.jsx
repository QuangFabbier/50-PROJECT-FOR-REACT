import React from "react";
import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className={styles.content}>
      <div className={styles.info}>
        <div className={styles.infoWrapper}>
          <div className={styles.input}>
            <p>Name</p>
            <input id="empName" className={styles.inputBox} type="text"></input>
          </div>
          <div className={styles.input}>
            <p>Age</p>
            <input id="age" className={styles.inputBox} type="number"></input>
          </div>
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.input}>
            <p>Position</p>
            <input
              id="position"
              className={styles.inputBox}
              type="text"
            ></input>
          </div>
          <div className={styles.input}>
            <p>Address</p>
            <input id="address" className={styles.inputBox} type="text"></input>
          </div>
        </div>
      </div>
      <div className={styles.event}>
        <button className={styles.eventBtn}>Add</button>
        <button className={styles.eventBtn}>Submit</button>

        <button className={styles.eventBtn}>Cancel</button>
      </div>
      <div className={styles.contentList}>
        <h3>To do list</h3>
        <ol className={styles.list}>
          {todos.map((todo, index) => (
            <li className={styles.listBox} key={index}>
              <p>Name: {todo.empName}</p>
              <p>Age: {todo.age}</p>
              <p>Position: {todo.position}</p>
              <p>Address:{todo.address}</p>
              <button className={styles.eventBtn}>Fix</button>
              <button className={styles.eventBtn}>Delete</button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
