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
                  <div className="product_sidebar">
                    <div className="product_sidebar_view">
                      <div className="section-title">
                        <h5>Top Views</h5>
                      </div>
                      <ul className="filter_controls">
                        <li className="active" data-filter="*">
                          Day
                        </li>
                        <li data-filter=".week">Week</li>
                        <li data-filter=".month">Month</li>
                        <li data-filter=".years">Years</li>
                      </ul>
                      <div className="filter_gallery">
                        <div
                          className="product_sidebar_view_item set-bg mix day years"
                          data-setbg="img/sidebar/tv-1.jpg"
                        >
                          <div className="ep">18 / ?</div>
                          <div className="view">
                            <i className="fa fa-eye" /> 9141
                          </div>
                          <h5>
                            <a href="#">Boruto: Naruto next generations</a>
                          </h5>
                        </div>
                        <div
                          className="product_sidebar_view_item set-bg mix month week"
                          data-setbg="img/sidebar/tv-2.jpg"
                        >
                          <div className="ep">18 / ?</div>
                          <div className="view">
                            <i className="fa fa-eye" /> 9141
                          </div>
                          <h5>
                            <a href="#">
                              The Seven Deadly Sins: Wrath of the Gods
                            </a>
                          </h5>
                        </div>
                        <div
                          className="product_sidebar_view_item set-bg mix week years"
                          data-setbg="img/sidebar/tv-3.jpg"
                        >
                          <div className="ep">18 / ?</div>
                          <div className="view">
                            <i className="fa fa-eye" /> 9141
                          </div>
                          <h5>
                            <a href="#">
                              Sword art online alicization war of underworld
                            </a>
                          </h5>
                        </div>
                        <div
                          className="product_sidebar_view_item set-bg mix years month"
                          data-setbg="img/sidebar/tv-4.jpg"
                        >
                          <div className="ep">18 / ?</div>
                          <div className="view">
                            <i className="fa fa-eye" /> 9141
                          </div>
                          <h5>
                            <a href="#">
                              Fate/stay night: Heaven's Feel I. presage flower
                            </a>
                          </h5>
                        </div>
                        <div
                          className="product_sidebar_view_item set-bg mix day"
                          data-setbg="img/sidebar/tv-5.jpg"
                        >
                          <div className="ep">18 / ?</div>
                          <div className="view">
                            <i className="fa fa-eye" /> 9141
                          </div>
                          <h5>
                            <a href="#">
                              Fate stay night unlimited blade works
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="product_sidebar_comment">
                      <div className="section-title">
                        <h5>New Comment</h5>
                      </div>
                      <div className="product_sidebar_comment_item">
                        <div className="product_sidebar_comment_item_pic">
                          <img src="img/sidebar/comment-1.jpg" alt="" />
                        </div>
                        <div className="product_sidebar_comment_item_text">
                          <ul>
                            <li>Active</li>
                            <li>Movie</li>
                          </ul>
                          <h5>
                            <a href="#">
                              The Seven Deadly Sins: Wrath of the Gods
                            </a>
                          </h5>
                          <span>
                            <i className="fa fa-eye" /> 19.141 Viewes
                          </span>
                        </div>
                      </div>
                      <div className="product_sidebar_comment_item">
                        <div className="product_sidebar_comment_item_pic">
                          <img src="img/sidebar/comment-2.jpg" alt="" />
                        </div>
                        <div className="product_sidebar_comment_item_text">
                          <ul>
                            <li>Active</li>
                            <li>Movie</li>
                          </ul>
                          <h5>
                            <a href="#">Shirogane Tamashii hen Kouhan sen</a>
                          </h5>
                          <span>
                            <i className="fa fa-eye" /> 19.141 Viewes
                          </span>
                        </div>
                      </div>
                      <div className="product_sidebar_comment_item">
                        <div className="product_sidebar_comment_item_pic">
                          <img src="img/sidebar/comment-3.jpg" alt="" />
                        </div>
                        <div className="product_sidebar_comment_item_text">
                          <ul>
                            <li>Active</li>
                            <li>Movie</li>
                          </ul>
                          <h5>
                            <a href="#">Kizumonogatari III: Reiket su-hen</a>
                          </h5>
                          <span>
                            <i className="fa fa-eye" /> 19.141 Viewes
                          </span>
                        </div>
                      </div>
                      <div className="product_sidebar_comment_item">
                        <div className="product_sidebar_comment_item_pic">
                          <img src="img/sidebar/comment-4.jpg" alt="" />
                        </div>
                        <div className="product_sidebar_comment_item_text">
                          <ul>
                            <li>Active</li>
                            <li>Movie</li>
                          </ul>
                          <h5>
                            <a href="#">Monogatari Series: Second Season</a>
                          </h5>
                          <span>
                            <i className="fa fa-eye" /> 19.141 Viewes
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
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
