import { useState } from "react";

import sing_in_main_logo from "../../assets/img/sing_in_main_logo.svg";
import sing_up_main_logo from "../../assets/img/sing_up_main_logo.svg";

import "../../style_files/SignInSignUpContainer.css";

export default function SignInSignUpContainer() {
  function transparentSignUp() {
    const container = document.querySelector(".container");
    container.classList.add("sign-up-mode");
  }

  function transparentSignIn() {
    const container = document.querySelector(".container");
    container.classList.remove("sign-up-mode");
  }

  const [signIn, toggle] = useState(true);
  return (
    <>
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" className="btn solid" />
              <p className="testing-text">
                New! integration with the most powerfully testing frameworks:
              </p>
              <div className="testing-media">
                <img className="playWrightLogo testing-icon" alt="" />
                <img className="pyTestLogo testing-icon" alt="" />
                <img className="seleniumLogo testing-icon" alt="" />
                <img className="cypressLogo testing-icon" alt="" />
                <img className="testCafeLogo testing-icon" alt="" />
                <img className="junitLogo testing-icon" alt="" />
              </div>
            </form>
            <form action="#" className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" className="btn" value="Sign up" />
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <button
                onClick={() => transparentSignUp()}
                className="btn transparent"
                id="sign-up-btn"
              >
                Sign up
              </button>
            </div>
            <img
              src={sing_in_main_logo}
              className="image"
              alt=""
              height="500"
            />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button
                onClick={() => transparentSignIn()}
                className="btn transparent"
                id="sign-in-btn"
              >
                Sign in
              </button>
            </div>
            <img src={sing_up_main_logo} className="image" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
