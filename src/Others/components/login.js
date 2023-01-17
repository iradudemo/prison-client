import React from "react";
import "./register.css";
import { Button, TextField } from "@mui/material";
function Register() {
  return (
    <div className='register-form'>
      <div className='registercontent'></div>
      <div className='register-container'>
        <div className='containerPart1'>
          <div className='form login-form' style={{ marginTop: "130px" }}>
            <h2>Login to p-transactions</h2>
            <br />
            <TextField
              fullWidth
              margin='danse'
              id='standard-basic'
              label='Email'
              variant='standard'
            />
            <br />
            <TextField
              id='standard-basic'
              label='password'
              variant='standard'
              fullWidth
              margin='danse'
            />

            <br />

            <div className='buttons'>
              <Button
                className='button btn'
                href='/dashboard'
                style={{ marginLeft: "10px" }}
              >
                <a href='/view'>Login</a>
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

export default Register;
