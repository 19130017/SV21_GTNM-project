import React, { Component } from "react";
import DragonBallSuperSlider from "./slider/DragonBallSuperSlider";
import KimetsuNoYaibaSilder from "./slider/KimetsuNoYaibaSilder";
import KumodesugaNanikaSilder from "./slider/KumodesugaNanikaSilder";
import OnePieceSlider from "./slider/OnePieceSlider";

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
                <li data-target="#carouselId" data-slide-to={3} />
              </ol>
              <div className="carousel-inner" role="listbox">
                <DragonBallSuperSlider />
                <KimetsuNoYaibaSilder />
                <KumodesugaNanikaSilder />
                <OnePieceSlider />
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
