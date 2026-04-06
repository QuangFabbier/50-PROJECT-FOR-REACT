import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";

function Login() {
  const initialData = {
    email: "",
    passWord: "",
  };
  const [input, setInput] = useState(initialData);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.email === "admin@gmail.com" && input.passWord === "123") {
      localStorage.setItem("isLogged", "true");
      navigate("/admin");
    } else {
      alert("Sai tài khoản");
    }
  };
  const handleClick = () => {
    alert("Account: admin@gmail.com, Pass: 123");
  };
  return (
    <div className={styles.loginSection}>
      <header>
        <h1>Scholarly Admin</h1>
      </header>
      <form className={styles.formSection} onSubmit={handleSubmit}>
        {/* alt w để thêm 1 div mới gộp lại với gap 12 */}
        <h1>Welcome Back</h1>
        <p>
          Please enter your institutional credentials to <br />
          access the management suite.
        </p>
        <div className={styles.inputSection}>
          <h3>UserName</h3>
          <input
            className={styles.loginInput}
            type="email"
            name="email"
            value={input.email}
            onChange={handleChange}
            placeholder="admin@gmail.com"
            required
          />
        </div>
        <div className={styles.inputSection}>
          <div className={styles.inputHeader}>
            <h3>PassWord</h3>{" "}
            <button
              className={styles.forgotPass}
              type="button"
              onClick={handleClick}
            >
              Forgot PassWord?
            </button>
          </div>
          
          <input
            className={styles.loginInput}
            type="password"
            name="passWord"
            value={input.passWord}
            onChange={handleChange}
            placeholder="123"
            required
          />
        </div>

        <button className={styles.loginBtn} type="submit">
          Log in
        </button>
        <div className={styles.divider}>
          <p>or continue with</p>
        </div>
        <button className={styles.loginGoogle} type="submit">
          Login with Google
        </button>
      </form>
      <p>
        "The scholarly canvas provides the tools, but the educator provides the
        vision."
      </p>
    </div>
  );
}

export default Login;
