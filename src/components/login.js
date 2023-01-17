import React, { useState } from "react";
import "./register.css";
import { Button, CircularProgress, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import Axios from "axios";
import { toastMessage } from "../helpers";

import {
  setFname,
  setLname,
  setUserEmail,
  setUserPhone,
  setUserRole,
  setUserTransactions,
  setUserToken,
} from "../actions/user";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (email.trim() === "" || password.trim() === "") {
      toastMessage("error", "All fields are required");
    } else {
      setIsLoading(true);
      Axios.post(process.env.REACT_APP_BACKEND_URL + "/auth/login/", {
        email,
        password,
      })
        .then((res) => {
          dispatch(setFname(res.data.firstname));
          dispatch(setLname(res.data.lastname));
          dispatch(setUserPhone(res.data.phone));
          dispatch(setUserEmail(res.data.email));
          dispatch(setUserTransactions(res.data.transactions));
          dispatch(setUserRole(res.data.role));
          dispatch(setUserToken(res.data.token));
          setIsLoading(false);
          console.log("user role", res.data.role);
          if (res.data.role == "admin") {
            // navigate("/dashboard");
            window.location = "/dashboard";
          } else {
            navigate("/");
          }
        })
        .catch((error) => {
          console.log("error", error);
          setIsLoading(false);
          setPassword("");
          if (error.message) {
            toastMessage("error", error.message);
          }
          if (error.response.data.error) {
            setIsLoading(false);
            toastMessage("error", error.response.data.error);
          } else {
            toastMessage("error", "Something went wrong. Try again later");
            setIsLoading(false);
          }
        });
    }
  };
  return (
    <div className='register-form'>
      <div className='registercontent'></div>
      <div className='register-container'>
        <div className='containerPart1'>
          <div className='form login-form' style={{ marginTop: "130px" }}>
            <h2>Login to Prison-transactions System</h2>
            <br />
            <TextField
              fullWidth
              margin='danse'
              id='standard-basic'
              label='Email'
              variant='standard'
              value={email}
              autoComplete='Email'
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <TextField
              id='standard-basic'
              type='password'
              label='password'
              variant='standard'
              fullWidth
              margin='danse'
              autoComplete='current-password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <br />

            <div className='buttons'>
              <Button
                className='button btn'
                href='/dashboard'
                style={{ marginLeft: "10px" }}
                onClick={handleSubmit}
              >
                <a href='/view'>
                  {isLoading ? (
                    <CircularProgress
                      style={{
                        height: "18px",
                        width: "18px",
                        color: "GrayText",
                      }}
                    />
                  ) : (
                    "Login"
                  )}{" "}
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className='containerPart2'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
            <path
              fill='#0c2a4e'
              fill-opacity='1'
              d='M0,96L48,128C96,160,192,224,288,256C384,288,480,288,576,245.3C672,203,768,117,864,106.7C960,96,1056,160,1152,181.3C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
            ></path>
          </svg>
          <div className='clip-pathOne'>
            {/* <h2>Welcome to p-transaction</h2> */}
            <h3>If you don't have an account</h3>
          </div>
          <div className='clip-paths'></div>
          <div className='buttons'>
            <Button
              className='button btn'
              href='/login'
              style={{ marginLeft: "100px" }}
            >
              <a href='/register'>Register</a>
            </Button>
          </div>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
            <path
              fill='#0c2a4e'
              fill-opacity='1'
              d='M0,96L48,128C96,160,192,224,288,256C384,288,480,288,576,245.3C672,203,768,117,864,106.7C960,96,1056,160,1152,181.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
            ></path>
          </svg>
        </div>
      </div>
      <div className='registerend'></div>
    </div>
  );
}

export default Login;
