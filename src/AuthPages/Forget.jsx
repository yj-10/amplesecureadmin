import React from "react";
import "./AuthStyle/ForgetStyle.css";
import { Button, TextField } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function Forget() {
  return (
    <>
      <div className="Forget_container">
        <div className="forget_row">
          <div className="icon">
            <MailOutlineIcon
              style={{
                fontSize: "50px",
                color: "#3e7e93",
              }}
            />
          </div>
          <div className="forget_box">
            <TextField
              className="input_box"
              label="Email Address"
              variant="standard"
            />
            <Button variant="contained">Reset Password</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forget;
