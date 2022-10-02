import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../../actions/AuthAction";

const Auth = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authreducer.loading);
  const [isSignUp, setIsSignUp] = useState(true);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpass: "",
  });

  const [confirmPass, setConfirmPass] = useState(true);

  const handelChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      data.password === data.confirmpass
        ? dispatch(signUp(data))
        : setConfirmPass(false);
    } else {
      dispatch(logIn(data));
    }
  };
  const resetForm = () => {
    setConfirmPass(true);
    setData({
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      confirmpass: "",
    });
  };
  return (
    <div className="Auth">
      {/* left side 00*/}
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="WebName">
          <h1>Instabook</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      {/* right side 00*/}
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign Up" : "Log In"}</h3>
          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                name="firstname"
                className="infoInput"
                onChange={handelChange}
                value={data.firstname}
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastname"
                className="infoInput"
                onChange={handelChange}
                value={data.lastname}
              />
            </div>
          )}

          <div>
            <input
              type="text"
              placeholder="Username"
              name="username"
              className="infoInput"
              onChange={handelChange}
              value={data.username}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="infoInput"
              onChange={handelChange}
              value={data.password}
            />
            {isSignUp && (
              <input
                type="password"
                name="confirmpass"
                placeholder="Confirm Password"
                className="infoInput"
                onChange={handelChange}
                value={data.confirmpass}
              />
            )}
          </div>
          <span
            style={{
              display: confirmPass ? "none" : "block",
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
            }}
          >
            *Confirm Password does not matched
          </span>
          <div>
            <span
              style={{ fontSize: "12px", cursor: "pointer" }}
              onClick={() => {
                setIsSignUp((prev) => !prev);
                resetForm();
              }}
            >
              {isSignUp
                ? "Already have an account. Login !"
                : "Don't have an Account , Signup"}
            </span>
          </div>
          <button
            className="button info-button"
            type="submit"
            disabled={loading}
          >
            {loading ? "loading..." : isSignUp ? "SignUp" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
