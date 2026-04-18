import { useState } from "react";
import styles from "./App.module.css";
import { v4 as uuidv4 } from "uuid";
function App() {
  const emptyEmployee = {
    empName: "",
    quang: "",
    position: "",
    address: "",
  };
  console.log("check 1", emptyEmployee);

  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState(emptyEmployee);
  const [editting, setEditting] = useState(-1);

  const handleChangeEmployee = (e) => {
    const { name, value } = e.target;
    console.log("check 2", e.target.name);

    setEmployee((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    setEmployees((prev) => [
      ...prev,
      {
        id: uuidv4(),
        empName: employee.empName,
        age: employee.age,
        position: employee.position,
        address: employee.address,
      },
    ]);
    setEmployee({
      empName: "",
      age: "",
      position: "",
      address: "",
    });
    console.log("check id", employee.id);
  };

  const handleDel = (id) => {
    const updateEmployee = employees.filter((employee) => employee.id !== id);
    setEmployees(updateEmployee);
  };

  const handleEdit = (id) => {
    const foundId = employees.find((newEmployee) => {
      return newEmployee.id === id;
    });
    setEmployee({
      empName: foundId.empName,
      age: foundId.age,
      position: foundId.position,
      address: foundId.address,
    });
    setEditting(id);
    console.log("bbbb", foundId);
  };

  const handleSubmit = () => {
    const updated = employees.map((newEmployee) =>
      newEmployee.id === editting
        ? { ...newEmployee, ...employee }
        : newEmployee,
    );

    setEmployees(updated);

    setEditting(-1);
    setEmployee({
      empName: "",
      age: "",
      position: "",
      address: "",
    });
  };
  const handleCancel = () => {
    setEditting(-1);
    setEmployee({
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
              name="empName"
              className={styles.inputBox}
              type="text"
              value={employee.empName}
              onChange={handleChangeEmployee}
            ></input>
          </div>
          <div className={styles.input}>
            <p>Age</p>
            <input
              name="age"
              className={styles.inputBox}
              type="number"
              value={employee.age}
              data="hello world"
              onChange={handleChangeEmployee}
            ></input>
          </div>
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.input}>
            <p>Position</p>
            <input
              name="position"
              className={styles.inputBox}
              type="text"
              value={employee.position}
              onChange={handleChangeEmployee}
            ></input>
          </div>
          <div className={styles.input}>
            <p>Address</p>
            <input
              name="address"
              className={styles.inputBox}
              type="text"
              value={employee.address}
              onChange={handleChangeEmployee}
              // onChange={(e) => setAddress(e.target.value)}
            ></input>
          </div>
        </div>
      </div>
      <div className={styles.event}>
        {editting === -1 ? (
          <button className={styles.eventBtn} onClick={handleAdd}>
            Add
          </button>
        ) : (
          <button className={styles.eventBtn} onClick={handleSubmit}>
            Submit
          </button>
        )}
        {editting !== -1 ? (
          <button className={styles.eventBtn} onClick={handleCancel}>
            Cancel
          </button>
        ) : null}
      </div>
      <div className={styles.contentList}>
        <h3>To do list</h3>
        <ol className={styles.list}>
          {employees.map((employee, index, employees) => {
            console.log("test", employee);
            console.log("test 2", index);
            console.log("test 3", employees);

            return (
              <li className={styles.listBox} key={employee.id} data={employee}>
                <p>Name: {employee.empName}</p>
                <p>Age: {employee.age}</p>
                <p>Position: {employee.position}</p>
                <p>Address:{employee.address}</p>
                <button
                  className={styles.eventBtn}
                  onClick={() => handleEdit(employee.id)}
                >
                  Edit
                </button>
                <button
                  className={styles.eventBtn}
                  onClick={() => handleDel(employee.id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
