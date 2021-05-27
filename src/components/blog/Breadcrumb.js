import React, { Component } from 'react';

class Breadcrumb extends Component {
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
                  <h2>Our Blog</h2>
                  <p>Home/Our Blog</p>
                </div>
              </div>
            </div>
          </div>
        </section>
            </div>
        );
    }
}

export default Breadcrumb;