import React, { Component } from "react";

export default class Breadcrumb extends Component {
  render() {
    return (
      <div>
        <section
          className="normal-breadcrumb set-bg"
          data-setbg="img/normal-breadcrumb.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="normal_breadcrumb_text">
                  <h2>Login</h2>
                  <p>Home / Login</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
