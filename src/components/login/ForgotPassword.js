import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';

class ForgotPassword extends Component {
    render() {
        return (
            <div>
                <Breadcrumb />
                  <section className="login spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="login_form">
                  <h3>Forgot Password</h3>
                  <form action="#">
                    <div className="input_item">
                      <input type="text" placeholder="Email address" />
                      <span className="icon_mail" />
                    </div>
                    <div className="input_item">
                      <input type="password" placeholder="New Password" />
                      <span className="icon_lock" />
                    </div>
                    <div className="input_item">
                      <input type="password" placeholder="Confirm Password" />
                      <span className="icon_lock" />
                    </div>
                    <button type="submit" className="site-btn">
                      Submit
                    </button>
                  </form>
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
          </div>
        </section>
            </div>
        );
    }
}

export default ForgotPassword;
