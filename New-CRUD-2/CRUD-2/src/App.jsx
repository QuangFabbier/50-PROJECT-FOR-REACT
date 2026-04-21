import { useState } from "react";
import "./App.css";

const emptyEmployee = {
  name: "",
  position: "",
  department: "",
  salary: "",
};

function App() {
  const [employees, setEmployees] = useState([]);
  console.log("🚀 ~ App ~ employees:", employees);
  const [emp, setEmp] = useState(emptyEmployee);
  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    setEmp((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };

  const handleAdd = () => {
    setEmployees((pre) => {
      return [{ ...emp, id: Date.now() }, ...pre];
    });
    setEmp(emptyEmployee);
  };

  const handleEdit = (employee) => {
    setEmp(employee);
    setEditing(true);
  };

  const handleSubmit = () => {
    const updated = employees.map((employee) => {
      return employee.id === emp.id ? emp : employee;
    });
    setEmployees(updated);

    setEditing(false);
    setEmp(emptyEmployee);
  };

  const handleCancel = () => {
    setEmp(emptyEmployee);
    setEditing(false);
  };

  const handleDelete = (id) => {
    const del = employees.filter((employee) => {
      return employee.id !== id;
    });
    setEmployees(del);
  };

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>Quản Lý Nhân Viên</h1>
        </header>

        <section className="form-section">
          <h2>Thông tin nhân viên</h2>

          <form className="form">
            <div className="form-group">
              <label>Tên nhân viên</label>
              <input
                name="name"
                value={emp.name}
                type="text"
                placeholder="Nhập tên nhân viên"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Chức vụ</label>
              <input
                name="position"
                value={emp.position}
                type="text"
                placeholder="Nhập chức vụ"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Phòng ban</label>
              <input
                name="department"
                value={emp.department}
                type="text"
                placeholder="Nhập phòng ban"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Lương</label>
              <input
                name="salary"
                value={emp.salary}
                type="text"
                placeholder="Nhập lương"
                onChange={handleChange}
              />
            </div>

            <div className="button-group">
              {editing === false ? (
                <button type="button" className="add-btn" onClick={handleAdd}>
                  Thêm
                </button>
              ) : (
                <>
                  {" "}
                  <button
                    type="button"
                    className="add-btn"
                    onClick={handleSubmit}
                  >
                    Cập nhật
                  </button>
                  <button
                    type="button"
                    className="reset-btn"
                    onClick={handleCancel}
                  >
                    Làm mới
                  </button>
                </>
              )}
            </div>
          </form>
        </section>

        <section className="table-section">
          <h2>Danh sách nhân viên</h2>

          <table>
            <thead>
              <tr>
                <th>Mã NV</th>
                <th>Họ tên</th>
                <th>Chức vụ</th>
                <th>Phòng ban</th>
                <th>Lương</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.position}</td>
                  <td>{employee.department}</td>
                  <td>{employee.salary}</td>
                  <td>
                    <div className="action-buttons">
                      <button
                        type="button"
                        className="edit-btn"
                        onClick={() => handleEdit(employee)}
                      >
                        Sửa
                      </button>
                      <button
                        type="button"
                        className="delete-btn"
                        onClick={() => handleDelete(employee.id)}
                      >
                        Xóa
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}

export default App;
