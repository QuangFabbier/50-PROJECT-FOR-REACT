import React, { useState } from "react";
import styles from "../src/App.module.css";

const employeesInit = [];

for (let index = 0; index < 30; index++) {
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
    id: "",
    name: "",
    position: "",
    address: "",
    age: "",
  });

  const handleChange = (e) => {
    setEmployeeSelected((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddEmp = () => {
    setEmployees((pre) => {
      return [{ ...employeeSelected, id: Date.now() }, ...pre];
    });
    setEmployeeSelected({
      id: "",
      name: "",
      position: "",
      address: "",
      age: "",
    });
  };

  const handleDelEmp = (id) => {
    const newEmployee = employees.filter(
      (employeeSelected) => employeeSelected.id !== id,
    );
    setEmployees(newEmployee);
  };

  const [editting, setEditting] = useState(false);
  // const handleEditEmp = (id) => {
  //   const updatedEmp = employees.find((employee) => employee.id === id);
  //   console.log("🚀 ~ handleEditEmp ~ updatedEmp:", updatedEmp);
  //   console.log("checkkkk", updatedEmp);

  //   setEmployeeSelected(updatedEmp);
  //   setEditting(true);
  // };

  const handleEditEmp = (employee) => {
    setEmployeeSelected(employee);
    console.log("🚀 ~ handleEditEmp ~ employee:", employee);
    setEditting(true);
  };

  const handleSubmit = () => {
    setEmployees(submitEmp);
    setEditting(false);
    setEmployeeSelected({
      name: "",
      position: "",
      address: "",
      age: "",
    });
  };
  const handleCancel = () => {
    setEditting(false);
    setEmployeeSelected({
      name: "",
      position: "",
      address: "",
      age: "",
    });
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

          {editting === 0 ? (
            <button
              type="button"
              className={styles.addButton}
              onClick={handleAddEmp}
            >
              Them
            </button>
          ) : (
            <div className={styles.editActions}>
              <button
                type="button"
                className={styles.addButton}
                onClick={handleSubmit}
              >
                Sửa
              </button>
              <button
                type="button"
                className={styles.cancelButton}
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          )}
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
                    <td>{index + 1}</td>
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
                        <button
                          className={styles.actionBtn}
                          onClick={() => handleEditEmp(employee)}
                        >
                          Edit
                        </button>
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
