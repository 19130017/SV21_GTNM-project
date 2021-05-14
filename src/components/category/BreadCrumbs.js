import React, { Component } from "react";

export default class BreadCrumbs extends Component {
  render() {
    return (
      <div>
        {/* Breadcrumb Begin */}
        <div className="breadcrumb-option">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb_links">
                  <a href="./index.html">
                    <i className="fa fa-home" /> Home
                  </a>
                  <a href="./categories.html">Categories</a>
                  <span>Romance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Breadcrumb End */}
      </div>
    );
  }
}
