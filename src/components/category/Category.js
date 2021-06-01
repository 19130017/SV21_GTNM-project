import React, { Component } from "react";
import DragonBallSuper from "../anime/DragonBallSuper";
import NarutoShippuDen from "../anime/NarutoShippuDen";
import Bleach from "../anime/Bleach";
import FairyTail from "../anime/FairyTail";
import OnePiece from "../anime/OnePiece";
import KimetsunoYaibaMugenRessha from "../anime/KimetsunoYaibaMugenRessha";
import FatestaynightMovieIII from "../anime/FatestaynightMovieIII";
import TenseiShitaraSlimeDattaKen from "../anime/TenseiShitaraSlimeDattaKen";
import KumodesugaNanika from "../anime/KumodesugaNanika";
import HelloWorld from "../anime/HelloWorld";
import Tenkinoko from "../anime/Tenkinoko";
import YourName from "../anime/YourName";
import Sidebar from "../sidebar/Sidebar";

export default class Category extends Component {
  render() {
    return (
      <div>
        <div>
          {/* Breadcrumb Begin */}
          <div className="breadcrumb-option">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="breadcrumb_links">
                    <a href="/">
                      <i className="fa fa-home" /> Home
                    </a>
                    <span>Categories</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Breadcrumb End */}

          {/* Product Section Begin */}
          <section className="product-page spad">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="product_page_content">
                    <div className="product_page_title">
                      <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-6">
                          <div className="section-title">
                            <h4>Shonen</h4>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                          <div className="product_page_filter">
                            <p>Order by:</p>
                            <select>
                              <option value>A-Z</option>
                              <option value>1-10</option>
                              <option value>10-50</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <DragonBallSuper />
                      <NarutoShippuDen />
                      <Bleach />
                      <FairyTail />
                      <OnePiece />
                      <KimetsunoYaibaMugenRessha />
                      <FatestaynightMovieIII />
                      <TenseiShitaraSlimeDattaKen />
                      <KumodesugaNanika />
                      <HelloWorld />
                      <Tenkinoko />
                      <YourName />
                    </div>
                  </div>
                  <div className="product_pagination">
                    <a href="#" className="current-page">
                      1
                    </a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                    <a href="#">
                      <i className="fa fa-angle-double-right" />
                    </a>
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
      </div>
    );
  }
}
