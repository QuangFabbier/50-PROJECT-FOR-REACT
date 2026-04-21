import "./App.css";

const teamMembers = [
  {
    id: "MB-201",
    fullName: "Linh Tran",
    email: "linh.tran@moonbase.dev",
    role: "UI Designer",
    status: "Dang lam viec",
  },
  {
    id: "MB-202",
    fullName: "Quoc Bao",
    email: "quocbao@moonbase.dev",
    role: "Frontend Dev",
    status: "Onboarding",
  },
  {
    id: "MB-203",
    fullName: "Ngoc Ha",
    email: "ngocha@moonbase.dev",
    role: "Content Editor",
    status: "Tam nghi",
  },
  {
    id: "MB-204",
    fullName: "Minh Khang",
    email: "mkhang@moonbase.dev",
    role: "Product Intern",
    status: "Dang lam viec",
  },
];

function App() {
  return (
    <main className="app">
      <section className="crud-box">
        <div className="top-content">
          <p className="small-title">CRUD Practice</p>
          <h1>Member Manager</h1>
        </div>

        <div className="crud-layout">
          <div className="card">
            <div className="section-heading">
              <h2>Form member</h2>
              <span className="tag">4 inputs</span>
            </div>

            <form className="member-form">
              <label>
                <span>Full name</span>
                <input type="text" placeholder="VD: Linh Tran" />
              </label>

              <label>
                <span>Email</span>
                <input type="email" placeholder="VD: linh@company.dev" />
              </label>

              <label>
                <span>Role</span>
                <input type="text" placeholder="VD: Frontend Developer" />
              </label>

              <label>
                <span>Status</span>
                <input type="text" placeholder="VD: Dang lam viec" />
              </label>

              <div className="form-actions">
                <button type="button" className="primary-btn">
                  Add
                </button>
                <button type="button" className="ghost-btn">
                  Update
                </button>
                <button type="button" className="ghost-btn">
                  Reset
                </button>
              </div>
            </form>
          </div>

          <div className="card">
            <div className="section-heading">
              <div>
                <h2>Member list</h2>
              </div>

              <div className="toolbar">
                <input type="text" placeholder="Search by name..." />
                <button type="button" className="ghost-btn">
                  Search
                </button>
              </div>
            </div>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Full name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {teamMembers.map((member) => (
                    <tr key={member.id}>
                      <td>{member.fullName}</td>
                      <td>{member.email}</td>
                      <td>{member.role}</td>
                      <td>{member.status}</td>
                      <td>
                        <div className="row-actions">
                          <button type="button" className="mini-btn edit">
                            Edit
                          </button>
                          <button type="button" className="mini-btn delete">
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
