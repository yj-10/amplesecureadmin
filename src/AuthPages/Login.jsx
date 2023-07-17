import React from "react";
import "./AuthStyle/LoginStyle.css";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import logo from "./AuthImg/logo.png";
import facebook from "./AuthImg/facebook.png";
import github from "./AuthImg/github.png";
import google from "./AuthImg/google.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="login_container">
        <div className="login_row">
          <div className="login_logo">
            <img src={logo} alt="img" />
          </div>
          <div className="login_title">
            <h2>welcome to login </h2>
          </div>
          <form action="">
            <div className="input_box">
              <TextField
                style={{ width: "100%" }}
                className="input_box"
                label="Name"
                variant="standard"
                // style={{ width: "100%" }}
              />
            </div>

            <div className="input_box">
              <TextField
                style={{ width: "100%" }}
                className="input_box"
                label="Password"
                variant="standard"
                // style={{ width: "100%" }}
              />
            </div>
            <div className="input_box">
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Remeber me"
                />
              </FormGroup>
            </div>
            <div className="input_box">
              <Button variant="contained" style={{ width: "100%" }} mt={1}>
                Sign Up
              </Button>
            </div>
            <div className="input_box" style={{ margin: "10px 0px" }}>
              <Link to="/Forget">Forget Password</Link>
            </div>
          </form>

          <div className="login_icon_link">
            <ul>
              <li>
                <img src={google} alt="google" />
              </li>

              <li>
                <img src={github} alt="github" />
              </li>

              <li>
                <img src={facebook} alt="facebook" />
              </li>
            </ul>
          </div>
          <div className="login_singup_link">
            <Link to="/Signup">Don't have an account ? Singup</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
