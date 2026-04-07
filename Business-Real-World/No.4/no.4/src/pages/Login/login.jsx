import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import google from "../../assets/google.jpg";

function Login() {
  const initialData = {
    email: "",
    passWord: "",
  };
  const [input, setInput] = useState(initialData);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, error, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/admin");
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsRedirecting(true);
      await loginWithRedirect({
        authorizationParams: {
          redirect_uri: `${window.location.origin}/admin`,
          login_hint: input.email || undefined,
        },
      });
    } catch (authError) {
      setIsRedirecting(false);
      alert(authError.message || "Khong the dang nhap voi Auth0.");
    }

    // LocalStorage auth:
    // if (
    //   input.email === "admin@gmail.com" &&
    //   input.passWord === "Mquang250103"
    // ) {
    //   localStorage.setItem("isLogged", "true");
    //   navigate("/admin");
    // } else {
    //   alert("Sai tai khoan");
    // }
  };
  const handleClick = () => {
    alert("Account: admin@gmail.com, Pass: Mquang250103");
  };
  return (
    <div className={styles.loginSection}>
      <form className={styles.formSection} onSubmit={handleSubmit}>
        <div className={styles.formTittle}>
          <h1>Welcome Back</h1>
          <p>
            Please enter your institutional credentials to <br />
            access the management suite.
          </p>
        </div>
        <div className={styles.inputSection}>
          <h3>UserName</h3>

          <div className={styles.inputWrapper}>
            <FontAwesomeIcon icon={faUser} className={styles.inputIcon} />
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
        </div>
        <div className={styles.inputSection}>
          <div className={styles.inputHeader}>
            <h3>PassWord</h3>{" "}
            <button
              className={styles.forgotPass}
              type="button"
              onClick={handleClick}
            >
              Forgot Password?
            </button>
          </div>

          <div className={styles.inputWrapper}>
            <FontAwesomeIcon icon={faLock} className={styles.inputIcon} />
            <input
              className={styles.loginInput}
              type="password"
              name="passWord"
              value={input.passWord}
              onChange={handleChange}
              placeholder="*********"
              required
            />
          </div>
        </div>

        <button
          className={styles.loginBtn}
          type="submit"
          disabled={isRedirecting}
        >
          {isRedirecting ? "Redirecting..." : "Login"}
          <FontAwesomeIcon icon={faArrowRight} className={styles.loginArrow} />
        </button>
        <div className={styles.divider}>
          <p>or continue with</p>
        </div>
        <button
          className={styles.loginGoogle}
          type="button"
          onClick={handleSubmit}
          disabled={isRedirecting}
        >
          <img src={google} alt="Google" className={styles.googleImg} />
          {isRedirecting ? "Redirecting..." : "Login with Google"}
        </button>
        {error ? <p>{error.message}</p> : null}
      </form>
      <div className={styles.footerText}>
        <p>
          "The scholarly canvas provides the tools, but the educator provides
          the vision."
        </p>
      </div>
    </div>
  );
}

export default Login;
