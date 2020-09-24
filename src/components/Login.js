import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { gsap } from "gsap";
import MediumSpotifyIcon from "../assets/MediumSpotifyIcon.png";

export default function Login() {
  let history = useHistory();
  //state for login
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  //state for errors
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  //state for disabled submit button
  const [disabled, setDisabled] = useState(true);

  const onChange = (e) => {
    e.persist();
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
    validateChange(e);
  };

  const formSchema = yup.object().shape({
    username: yup.string().min(4).required("must have at least 4 characters"),
    password: yup.string().min(6).required("must have at least 6 characters"),
  });

  const validateChange = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
  };

  //toggles the submit button if form is valid
  useEffect(() => {
    formSchema.isValid(login).then((valid) => {
      setDisabled(!valid);
    });
  }, [login]);

  //submits valid form and resets it to blank
  const submitForm = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("api/auth/login", login)
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
        history.push("/profile");
        //reset form
        // setLogin({
        //   username: "",
        //   password: "",
        // });
      })
      .catch((err) => {
        console.log("there was an error", err);
      });
  };

  useEffect(() => {
    gsap.from(".icon", {
      duration: 2.5,
      y: "150%",
      delay: 0.3,
      ease: "bounce",
    });
    gsap.from(".icon", {
      duration: 1.8,
      delay: 1.5,
      rotation: 360,
      ease: "back",
    });
  }, []);

  return (
    <>
      <header>
        <h2>Welcome Back!</h2>
      </header>
      <form onSubmit={submitForm}>
        <label htmlFor="username">
          Username:
          <input
            name="username"
            id="username"
            type="text"
            value={login.username}
            onChange={onChange}
          ></input>
          {errors.username.length > 0 ? <p>{errors.username}</p> : null}
        </label>
        <label htmlFor="password">
          Password:
          <input
            name="password"
            id="password"
            type="password"
            value={login.password}
            onChange={onChange}
          ></input>
          {errors.password.length > 0 ? <p>{errors.password}</p> : null}
        </label>
        <label htmlFor="submit">
          Submit:
          <button id="submit" disabled={disabled}>
            Submit
          </button>
        </label>
      </form>
      <div className="icon">
        <img src={MediumSpotifyIcon} alt="spotify icon" />
      </div>
    </>
  );
}
