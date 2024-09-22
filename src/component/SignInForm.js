import React from "react";
import { login } from '../firebase';
import { notification } from "antd";

function SignInForm() {
  const [state, setState] = React.useState({
    email: "",
    password: ""
  });
  const [isLoading, setLoading] = React.useState(false);

  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = async (evt) => {
    setLoading(true);
    evt.preventDefault()
    try {
      login(state.email, state.password)
        .then((user) => {
          if (user.code == 200) {
            notification.success({
              description: user.message,
              duration: 1
            });
            localStorage.setItem("email", state.email);
            localStorage.setItem("password", state.password);
            window.location.href = '/home';
          } else {
            notification.error({
              description: user.message,
              duration: 1
            });
          }
        });
    } catch (err) {
      console.error('Error finding user:', err);
    }

    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
    setLoading(false);
  };

  return (
    <div className={`form-container sign-in-container ${isLoading ? "loading" : ""}`}>
      <form onSubmit={handleOnSubmit}>
        <h1>Sign in</h1>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <a href="#">Forgot your password?</a>
        <button disabled={isLoading}>Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
