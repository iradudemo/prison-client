import React from "react";

import "./footer.css";
import MessageIcon from "@mui/icons-material/Message";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Logo from "../assets/images/logo.png";
import { Button, TextField } from "@mui/material";
function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footerContent">
          <div className="col-3 column-footer">
            <img src={Logo} />
          </div>
          <div className="col-3 cols-footer">
            <h2>Quick link</h2>
            <div className="links">
              <a href="#!">Home</a>
              <br />
              <a href="#about">About us</a>
              <br />
              <a href="#contact">Contact us</a>
              <br />
              <a href="#transaction">make transaction</a>
            </div>
          </div>
          <div className="col-3 col-footer">
            {" "}
            <h2>Legal</h2>
            <div className="links">
              <a>Terms and condition</a>
              <br />
              <a>Privacy Policy</a>
              <br />
              <a>Terms of use</a>
            </div>
          </div>
          <div className="col-3 col-footer">
            <h2>Subscribe Now</h2> <br />
            <TextField
              fullWidth
              margin="danse"
              id="standard-basic"
              label="Email"
              variant="standard"
              style={{ color: "red", paddingRight: "30px" }}
            />
            <div className="buttons">
              <Button
                className="button btn"
                href="/dashboard"
                style={{ marginLeft: "10px" }}
              >
                <a>Send</a>
              </Button>
            </div>
          </div>
        </div>

        <div
          className="col-3 col-footer"
          style={{
            color: "white",
            textAlign: "center",
            paddingBottom: "20px",
            fontSize: "20px",
          }}
        >
          &copy; Prisons support Team
        </div>
      </div>
    </div>
  );
}

export default Footer;
