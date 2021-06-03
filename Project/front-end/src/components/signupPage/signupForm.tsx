import React, { useState } from "react";

import signup from "../../images/signup.svg";
import { Link, useHistory } from "react-router-dom";
import { makeStyles, TextField, Button } from "@material-ui/core";
import "./signup.css";
import { signupUser } from "../../services/services";
export default function Signup() {
  let [data, setData] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: "",
  });

  const handleChange = (e: any) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const history = useHistory();
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: "1vw 1vw",
    }
  }));
  const classes = useStyles();

  const signupSubmit = async (e:any) => {
    e.preventDefault()
    let res = await signupUser(data)
    if (res) {
      console.log("Signup successful")
      history.push("/")
    }else{
      console.log("Signup unsuccessful")
    } 
  };
  return (
    <div className="page">
      <div className="secure-login-svg">
        <img src={signup}></img>
      </div>
      <form onSubmit={signupSubmit} className="signup-form">
        <h2
          style={{
            textAlign: "center",
            marginBottom: "1.5vw",
            fontFamily: "Pattaya, sans-serif",
            fontSize: "250%",
            color: "#534EBF",
          }}
        >
          Skill Media
        </h2>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 submit-button">
              <TextField
                label="Name"
                name="name"
                autoComplete="off"
                type="text"
                onChange={handleChange}
                className={classes.margin}
                required
                value={data.name}
                fullWidth
              />
            </div>
          </div>

          <div className="row ">
            <div className="col-sm-12 submit-button">
              <TextField
                label="User name"
                name="userName"
                autoComplete="off"
                type="text"
                onChange={handleChange}
                className={classes.margin}
                required
                value={data.userName}
                fullWidth
              />
            </div>
          </div>

          <div className="row ">
            <div className="col-sm-12 submit-button">
              <TextField
                label="Email"
                name="email"
                autoComplete="off"
                type="text"
                onChange={handleChange}
                className={classes.margin}
                required
                value={data.email}
                fullWidth
              />
            </div>
          </div>

          <div className="row ">
            <div className="col-sm-12 submit-button">
              <TextField
                label="Password"
                name="password"
                autoComplete="off"
                type="password"
                onChange={handleChange}
                className={classes.margin}
                value={data.password}
                required
                fullWidth
              />
            </div>
          </div>

          <div className="row ">
            <div className="col-sm-12 submit-button">
              <TextField
                label="Confirm Password"
                name="confirmPassword"
                autoComplete="off"
                type="password"
                onChange={handleChange}
                className={classes.margin}
                value={data.confirmPassword}
                required
                fullWidth
              />
            </div>
          </div>
          <div className="row ">
            <div className="col-sm-12 submit-button">
              <Button
                variant="contained"
                size="large"
                color="primary"
                type="submit"
                className="sign-button"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

{
  /* <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <TextField
                label="Name"
                name="name"
                autoComplete="off"
                type="text"
                onChange={handleChange}
                className={classes.margin}
                required
                value={data.name}
              />
            </div>
            <div className="col-sm-6">
              <TextField
                label="User name"
                name="userName"
                autoComplete="off"
                type="text"
                onChange={handleChange}
                className={classes.margin}
                required
                value={data.userName}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <TextField
                label="Email"
                name="email"
                autoComplete="off"
                type="text"
                onChange={handleChange}
                className={classes.margin}
                required
                value={data.email}
              />
            </div>
            <div className="col-sm-6">
              <TextField
                label="Password"
                name="password"
                autoComplete="off"
                type="password"
                onChange={handleChange}
                className={classes.margin}
                value={data.password}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <TextField
                label="Confirm Password"
                name="confirmPassword"
                autoComplete="off"
                type="password"
                onChange={handleChange}
                className={classes.margin}
                value={data.confirmPassword}
                required
              />
            </div>
            <div className="col-sm-6">
              <TextField
                label="Password"
                name="password"
                autoComplete="off"
                type="password"
                onChange={handleChange}
                className={classes.margin}
                value={data.password}
                required
              />
            </div>
          </div>
          <div className="row ">
            <div className="col-sm-12 submit-button">
              <Button
                variant="contained"
                size="large"
                color="primary"
                type="submit"
                className="sign-button"
              >
                Submit
              </Button>
            </div>
          </div>
        </div> */
}
