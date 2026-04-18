import React, { useState } from "react";
import styles from "../src/App.module.css";

const employeesInit = [];

for (let index = 0; index < 20; index++) {
  const element = {
    id: index,
    name: `Nguyen van a ${index}`,
    position: "director",
    address: "Quan Hai Chau, Da Nang",
    age: Math.floor(Math.random() * (60 - 18 + 1) + 18).toString(),
  };
  employeesInit.push(element);
}

function App() {
  const [employees, setEmployees] = useState(employeesInit);
  const [employeeSelected, setEmployeeSelected] = useState({
    name: "",
    position: "",
    address: "",
    age: "",
  });
  console.log("🚀 ~ App ~ employeeSelected:", employeeSelected);

  const handleChange = (e) => {
    setEmployeeSelected((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
    console.log("check 1", employeeSelected);
    console.log("check 3", employees);
  };

  const handleAddEmp = () => {
    setEmployees((pre) => [...pre, employeeSelected]);
    setEmployeeSelected({
      name: "",
      position: "",
      address: "",
      age: "",
    });
    console.log("check 2", employees);
    console.log("check 4", employeeSelected);
  };

  const handleDelEmp = (id) => {
    const newEmployee = employees.filter(
      (employeeSelected) => employeeSelected.id !== id,
    );
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Employee Management</h1>

      <section className={styles.card}>
        <h2 className={styles.sectionTitle}>Nhap thong tin nhan vien</h2>
        <form className={styles.form}>
          <label className={styles.field}>
            <span>Ho ten</span>
            <input
              type="text"
              name="name"
              placeholder="Nguyen Van C"
              onChange={handleChange}
              value={employeeSelected.name}
            />
          </label>

          <label className={styles.field}>
            <span>Vi tri</span>
            <input
              type="text"
              name="position"
              placeholder="Ke toan"
              onChange={handleChange}
              value={employeeSelected.position}
            />
          </label>

          <label className={styles.field}>
            <span>Dia chi</span>
            <input
              type="text"
              name="address"
              placeholder="Thu Duc, TP.HCM"
              onChange={handleChange}
              value={employeeSelected.address}
            />
          </label>

          <label className={styles.field}>
            <span>Tuoi</span>
            <input
              type="number"
              name="age"
              placeholder="27"
              min="18"
              onChange={handleChange}
              value={employeeSelected.age}
            />
          </label>

          <button
            type="button"
            className={styles.addButton}
            onClick={handleAddEmp}
          >
            Them
          </button>
        </form>
      </section>

      <section className={styles.card}>
        <h2 className={styles.sectionTitle}>Danh sach nhan vien</h2>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>STT</th>
                <th>Ho ten</th>
                <th>Vi tri</th>
                <th>Dia chi</th>
                <th>Tuoi</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => {
                return (
                  <tr key={index}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.position}</td>
                    <td>{employee.address}</td>
                    <td>{employee.age}</td>
                    <td>
                      <div className={styles.btnWrapper}>
                        <button
                          className={styles.actionBtn}
                          onClick={() => handleDelEmp(employee.id)}
                        >
                          Delete
                        </button>
                        <button className={styles.actionBtn}>Edit</button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default App;
