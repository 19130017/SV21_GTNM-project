import React, { Component } from "react";
import Breadcrumb from "./Breadcrumb";

export default class Login extends Component {
  render() {
    return (
      <div>
        {/* Normal Breadcrumb Begin */}
        <Breadcrumb />
        {/* Normal Breadcrumb End */}
        {/* Login Section Begin */}
        <section className="login spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="login_form">
                  <h3>Login</h3>
                  <form action="#">
                    <div className="input_item">
                      <input type="text" placeholder="Email address" />
                      <span className="icon_mail" />
                    </div>
                    <div className="input_item">
                      <input type="text" placeholder="Password" />
                      <span className="icon_lock" />
                    </div>
                    <button type="submit" className="site-btn">
                      Login Now
                    </button>
                  </form>
                  <a href="#" className="forget_pass">
                    Forgot Your Password?
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="login_register">
                  <h3>Dont’t Have An Account?</h3>
                  <a href="/signup" className="primary-btn">
                    Register Now
                  </a>
                </div>
              </div>
            </div>
            <div className="login_social">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6">
                  <div className="login_social_links">
                    <span>or</span>
                    <ul>
                      <li>
                        <a href="#" className="facebook">
                          <i className="fa fa-facebook" /> Sign in With Facebook
                        </a>
                      </li>
                      <li>
                        <a href="#" className="google">
                          <i className="fa fa-google" /> Sign in With Google
                        </a>
                      </li>
                      <li>
                        <a href="#" className="twitter">
                          <i className="fa fa-twitter" /> Sign in With Twitter
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Login Section End */}
      </div>
    );
  }
}
