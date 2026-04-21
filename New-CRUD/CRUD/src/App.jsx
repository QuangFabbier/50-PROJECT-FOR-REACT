import { useState } from "react";
import "./App.css";

const books = [
  {
    id: "B001",
    title: "Lập Trình JavaScript Cơ Bản",
    author: "Nguyễn Văn A",
    year: 2022,
    price: "180.000đ",
  },
  {
    id: "B002",
    title: "React Từ Cơ Bản Đến Nâng Cao",
    author: "Trần Thị B",
    year: 2024,
    price: "260.000đ",
  },
  {
    id: "B003",
    title: "Thiết Kế Cơ Sở Dữ Liệu Thực Chiến",
    author: "Lê Minh C",
    year: 2021,
    price: "210.000đ",
  },
];

function App() {
  const emptyLibrary = {
    title: "",
    author: "",
    year: "",
    price: "",
  };
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState(emptyLibrary);
  const handleChange = (e) => {
    setBook((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleAdd = () => {
    setBooks((pre) => {
      console.log("🚀 ~ handleAdd ~ book:", book);
      return [{ ...book, id: Date.now() }, ...pre];
    });
    setBook(emptyLibrary);
  };

  const handleEdit = (book) => {
    console.log("🚀 ~ handleEdit ~ book:", book);
    setBook(book);
  };

  const handleUpdated = () => {
    const submit = books.map((bookEdit) => {
      return bookEdit.id === book.id ? book : bookEdit;
    });
    setBooks(submit);
  };

  const handleDel = (id) => {
    const del = books.filter((book) => {
      book.id !== id;
    });
    setBooks(del);
  };

  const handelCancel = (emptyLibrary) => {
    return setBook(emptyLibrary);
  };
  return (
    <div className="library-page">
      <header className="page-header">
        <p className="eyebrow">Library Management</p>
        <h1>Quản lý sách thư viện</h1>
      </header>

      <section className="panel form-panel">
        <div className="panel-title-wrap">
          <h2>Thông tin sách</h2>
        </div>

        <form
          className="book-form"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="field-grid">
            <label className="form-field">
              <span>Tên sách</span>
              <input
                name="title"
                value={book.title}
                type="text"
                placeholder="Ví dụ: Clean Code"
                onChange={handleChange}
              />
            </label>

            <label className="form-field">
              <span>Tác giả</span>
              <input
                name="author"
                value={book.author}
                type="text"
                placeholder="Ví dụ: Robert C. Martin"
                onChange={handleChange}
              />
            </label>

            <label className="form-field">
              <span>Năm sản xuất</span>
              <input
                name="year"
                value={book.year}
                type="number"
                placeholder="Ví dụ: 2026"
                onChange={handleChange}
              />
            </label>

            <label className="form-field">
              <span>Giá bán (VND)</span>
              <input
                name="price"
                value={book.price}
                type="number"
                placeholder="Ví dụ: 250000"
                min="0"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="action-row">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleAdd}
            >
              Thêm sách
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleUpdated}
            >
              Cập nhật
            </button>
            <button
              type="reset"
              className="btn btn-outline"
              onClick={handelCancel}
            >
              Làm mới
            </button>
          </div>
        </form>
      </section>

      <section className="panel table-panel">
        <div className="table-header">
          <h2>Danh sách sách</h2>
         
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Mã</th>
                <th>Tên sách</th>
                <th>Tác giả</th>
                <th>Năm</th>
                <th>Giá bán</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.year}</td>
                  <td>{book.price}</td>
                  <td>
                    <div className="table-actions">
                      <button
                        type="button"
                        className="btn btn-mini btn-edit"
                        onClick={() => handleEdit(book)}
                      >
                        Sửa
                      </button>
                      <button
                        type="button"
                        className="btn btn-mini btn-delete"
                        onClick={() => handleDel(book.id)}
                      >
                        Xóa
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default App;
