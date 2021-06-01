import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
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
                  <i className="fa fa-eye" /> 1.123.141
                </div>
                <h5>
                  <a href="/boruto_detail">Boruto: Naruto next generations</a>
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
                  <a href="#">The Seven Deadly Sins: Wrath of the Gods</a>
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
                  <a href="#">Sword art online alicization war of underworld</a>
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
                  <a href="#">Fate stay night unlimited blade works</a>
                </h5>
              </div>
            </div>
          </div>

          {/* new comment */}
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
                  <a href="#">The Seven Deadly Sins: Wrath of the Gods</a>
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
    );
  }
}
