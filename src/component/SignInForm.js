import React, { useState } from "react";
import { notification } from "antd";
import { login, forgot } from '../firebase';

function SignInForm(props) {
  const { setLoading } = props
  const [state, setState] = useState({
    email: "",
    password: ""
  });
  const [isForgot, setForgot] = useState(false);

  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = async (evt) => {
    evt.preventDefault();
    setLoading(true);
    try {
      if (isForgot) {
        forgot(state.email)
          .then((user) => {
            notification.success({
              description: user.message,
              duration: 1
            });
            setForgot(false);
            setLoading(false);

          })
          .catch((err) => {
            notification.success({
              description: err.message,
              duration: 1
            });
            setLoading(false);

          })
      } else {
        login(state.email, state.password)
          .then((user) => {
            if (user.code == 200) {
              window.location.href = '/';
              notification.success({
                description: user.message,
                duration: 1
              });
              localStorage.setItem("email", state.email);
              localStorage.setItem("password", state.password);
            } else {
              notification.error({
                description: user.message,
                duration: 1
              });
            }
            setLoading(false);
          });
      }
    } catch (err) {
      console.error('Error finding user:', err);
      setLoading(false);
    }

    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  const toggleForgot = () => {
    setForgot(!isForgot);
  }

  return (
    <div>
      <div className={`form-container sign-in-container`}>
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
            className={`${isForgot ? "hide" : "show"}`}
            type="password"
            name="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
          />
          <a href="#" onClick={toggleForgot}>{!isForgot ? "Forgot your password?" : "Go Back"}</a>
          <button className={`sigin ${isForgot ? "hide" : "show"}`} onClick={handleOnSubmit}>Sign In</button>
          <button className={`forgot ${!isForgot ? "hide" : "show"}`} onClick={handleOnSubmit}>Send</button>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;
