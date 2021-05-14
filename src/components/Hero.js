import React, { Component } from "react";
import "owl.carousel/dist/assets/owl.carousel.min.css";
export default class Hero extends Component {
  render() {
    return (
      <div>
        {/* Hero Section Begin */}
        <section className="hero">
          <div className="container">
            <div className="hero_slider owl-carousel">
              <div
                className="hero_items set-bg"
                data-setbg="img/hero/hero-1.jpg"
              >
                <div className="row">
                  <div className="col-lg-6 ">
                    <div className="hero_text">
                      <div className="label">Adventure</div>
                      <h2>Fate / Stay Night: Unlimited Blade Works</h2>
                      <p>After 30 days of travel across the world...</p>
                      <a href="#">
                        <span>Watch Now</span>{" "}
                        <i className="fa fa-angle-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Hero Section End */}
      </div>
    );
  }
}
