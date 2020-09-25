import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
// import { axiosWithAuth } from "../utils";
import Axios from "axios";
import * as yup from "yup";
import { gsap } from "gsap";
import MediumSpotifyIcon from "../assets/MediumSpotifyIcon.png";

export default function Register() {
  let history = useHistory();
  //state for login
  const [login, setLogin] = useState({
    username: "",
    email: "",
    password: "",
  });

  //state for axios post
  const [post, setPost] = useState([]);

  //state for errors
  const [errors, setErrors] = useState({
    username: "",
    email: "",
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
    email: yup.string().email().required("must have a valid email"),
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

  //toggles submit button when form is valid
  useEffect(() => {
    formSchema.isValid(login).then((valid) => {
      setDisabled(!valid);
    });
  }, [login]);

  // //submits valid form with token
  // const submitForm = (e) => {
  //   e.preventDefault();
  //   axiosWithAuth()
  //     .post("api/auth/register", login)
  //     .then((res) => {
  //       window.localStorage.setItem("token", res.data.token);
  //       history.push("/login");
  //       //reset form
  //       // setLogin({
  //       //   username: "",
  //       //   email: "",
  //       //   password: "",
  //       // });
  //     })
  //     .catch((err) => {
  //       console.log("there was an error", err);
  //     });
  // };

  //submits valid form and resets it to blank
  const submitForm = (e) => {
    e.preventDefault();
    Axios.post("https://reqres.in/api/users", login)
      .then((res) => {
        setPost(res.data);
        console.log("success!");
        // history.push("/login");
        //reset form
        setLogin({
          username: "",
          email: "",
          password: "",
        });
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
      <div className="main-container">
        <header>
          <h2>Let's Get You Signed Up!</h2>
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
          <label htmlFor="email">
            Email:
            <input
              name="email"
              id="email"
              type="email"
              value={login.email}
              onChange={onChange}
            ></input>
            {errors.email.length > 0 ? <p>{errors.email}</p> : null}
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
        <div className="have-account-container">
          <Link id="have-account" to="/login">
            Already Have An Account?
          </Link>
        </div>
        <div className="icon">
          <img src={MediumSpotifyIcon} alt="spotify icon" />
        </div>
      </div>
      <h3>Username: {post.username}</h3>
      <h3>Email: {post.email}</h3>
      <h3>Password: {post.password}</h3>
      <h3>ID: {post.id}</h3>
    </>
  );
}
