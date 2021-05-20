import React, { Component } from "react";
export default class Hero extends Component {
  render() {
    return (
      <div>
        <section>
          <div>
            <div
              id="carouselId"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselId"
                  data-slide-to={0}
                  className="active"
                />
                <li data-target="#carouselId" data-slide-to={1} />
                <li data-target="#carouselId" data-slide-to={2} />
              </ol>
              <div className="carousel-inner" role="listbox">
                {/* 1 */}
                <div className="carousel-item active">
                  <div>
                    <img
                      src="img/hero/hero-1.jpg"
                      alt="First slide"
                      className="hero_items"
                    />

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
                {/* 2 */}
                <div className="carousel-item ">
                  <div>
                    <img
                      src="img/hero/hero-2.jpg"
                      alt="First slide"
                      className="hero_items"
                    />

                    <div className="hero_text">
                      <div className="label">Adventure</div>
                      <h2>Boruto: Naruto Next Generations</h2>
                      <p>
                        Naruto là một chàng trai trẻ đầy nhiệt huyết cũng như
                        rất nghịch ngợm,{" "}
                      </p>
                      <a href="#">
                        <span>Watch Now</span>{" "}
                        <i className="fa fa-angle-right" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* 3 */}
                <div className="carousel-item ">
                  <div>
                    <img
                      src="img/hero/hero-3.jpg"
                      alt="First slide"
                      className="hero_items"
                    />

                    <div className="hero_text">
                      <div className="label">Adventure</div>
                      <h2>One piece</h2>
                      <p>
                        Ta là Monkey D. Luffy! Người sẽ trở thành VUA HẢI
                        TẶC!!!”
                      </p>
                      <a href="#">
                        <span>Watch Now</span>{" "}
                        <i className="fa fa-angle-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselId"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselId"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </section>
        {/* Hero Section End */}
      </div>
    );
  }
}
