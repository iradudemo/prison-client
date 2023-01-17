import React from "react";
import "../views/home.css";
import Logo from "../assets/images/logo-removebg-preview (1).png";
function Header() {
  return (
    <div>
      <header>
        <div className="header">
          <div className="navbar">
            <div className="logo">
              <img src={Logo} />
            </div>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/sendmoney">MakeTransaction</a>
              </li>

              <li>
                <a>Claims </a>
              </li>
              <li>
                <a> SubmitQuestions</a>
              </li>
              <li>
                <a href="/login"> Login/Register</a>
              </li>
            </ul>
            {/* 
            <div className="button">
              <h2>Login</h2>
            </div> */}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
