import React, { Component } from "react";
import Breadcrumb from "../breadcrumb/Breadcrumb";

class Contact extends Component {
  render() {
    return (
      <div>
        <Breadcrumb position="Contact" />
        <div className="container-contact">
          <h1 className="h1-contact">Contact</h1>
          <div className="row">
            <div className="col-sm-6">
              <img src="img/mail.png" className="mail-img" alt="mail" />
            </div>
            <div className="col-sm-6">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Message</label>
                  <textarea rows="4" cols="90" placeholder="Message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary submit-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
