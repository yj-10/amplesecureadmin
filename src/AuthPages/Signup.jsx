import React from "react";
import "./AuthStyle/Signupstyle.css";
import { Button, TextField } from "@mui/material";
function Signup() {
  return (
    <>
      <div className="signup_container">
        <div className="signup_row">
          <div className="signup_title">
            <h3>Sign up</h3>
          </div>
          <form action="">
            <div className="input_box">
              <TextField
                className="input_box"
                label="Name"
                variant="standard"
              />
            </div>

            <div className="input_box">
              <TextField
                className="input_box"
                label="Email"
                variant="standard"
              />
            </div>

            <div className="input_box">
              <TextField
                className="input_box"
                label="Password"
                variant="standard"
              />
            </div>
            <div className="input_box">
              <Button variant="contained" style={{ width: "100%" }} mt={1}>
                Sign Up
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
