import React, { Component } from "react";
import Boruto from "./anime/Boruto";
import DragonBallSuper from "./anime/DragonBallSuper";
import FatestaynightMovieIII from "./anime/FatestaynightMovieIII";
import Tenkinoko from "./anime/Tenkinoko";
import TokyoGhoul from "./anime/TokyoGhoul";
import YourName from "./anime/YourName";
import DrStone from "./anime/DrStone";
import HelloWorld from "./anime/HelloWorld";
import OnePiece from "./anime/OnePiece";
import NarutoShippuDen from "./anime/NarutoShippuDen";
import CaptainTsubasa from "./anime/CaptainTsubasa";
import JujutsuKaisen from "./anime/JujutsuKaisen";
import BlackClover from "./anime/BlackClover";
import EdenZero from "./anime/EdenZero";
import Fairytail from "./anime/FairyTail";
import KumodesugaNanika from "./anime/KumodesugaNanika";
import Bleach from "./anime/Bleach";
import KimetsunoYaibaMugenRessha from "./anime/KimetsunoYaibaMugenRessha";
import Sidebar from "./sidebar/Sidebar";

export default class Product extends Component {
  render() {
    return (
      <div>
        {/* Product Section Begin */}
        <section className="product spad">
          <div className="container">
            <div className="row">
              {/* top view */}
              <div className="col-lg-8">
                <div className="trending_product">
                  <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-8">
                      <div className="section-title">
                        <h4>Trending Now</h4>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="btn_all">
                        <a href="#" className="primary-btn">
                          View All <span className="arrow_right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <Boruto />
                    <DragonBallSuper />
                    <TokyoGhoul />
                    <YourName />
                    <FatestaynightMovieIII />
                    <Tenkinoko />
                  </div>
                </div>
                <div className="popular_product">
                  <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-8">
                      <div className="section-title">
                        <h4>Popular Shows</h4>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="btn_all">
                        <a href="#" className="primary-btn">
                          View All <span className="arrow_right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <DrStone />
                    <HelloWorld />
                    <OnePiece />
                    <NarutoShippuDen />
                    <CaptainTsubasa />
                    <JujutsuKaisen />
                  </div>
                </div>
                <div className="live_product">
                  <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-8">
                      <div className="section-title">
                        <h4>Live Action</h4>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="btn_all">
                        <a href="#" className="primary-btn">
                          View All <span className="arrow_right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <BlackClover />
                    <EdenZero />
                    <Fairytail />
                    <KumodesugaNanika />
                    <Bleach />
                    <KimetsunoYaibaMugenRessha />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8">
                <Sidebar />
              </div>
            </div>
          </div>
        </section>
        {/* Product Section End */}
      </div>
    );
  }
}
