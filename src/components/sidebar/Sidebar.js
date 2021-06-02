import React, { Component } from "react";
import BlackCloverNC from "./newcomment/BlackCloverNC";
import BorutoNC from "./newcomment/BorutoNC";
import CaptainTsubasaNC from "./newcomment/CaptainTsubasaNC";
import OnePieceNC from "./newcomment/OnePieceNC";
import TenseiShitaraSlimeDattaKenNC from "./newcomment/TenseiShitaraSlimeDattaKenNC";
import BorutoTV from "./topview/BorutoTV";
import DragonBallSuperTV from "./topview/DragonBallSuperTV";
import DrStoneTV from "./topview/DrStoneTV";
import NarutoTV from "./topview/NarutoTV";
import OnePieceTV from "./topview/OnePieceTV";

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
              <DrStoneTV />
              <OnePieceTV />
              <DragonBallSuperTV />
              <BorutoTV />
              <NarutoTV />
            </div>
          </div>

          {/* new comment */}
          <div className="product_sidebar_comment">
            <div className="section-title">
              <h5>New Comment</h5>
            </div>
            {/* <div className="product_sidebar_comment_item">
              <div className="product_sidebar_comment_item_pic">
                <img
                  src="img/Poster/3.png"
                  width="90px"
                  height="130px"
                  alt=""
                />
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
           */}

            <BorutoNC />
            <OnePieceNC />
            <TenseiShitaraSlimeDattaKenNC />
            <CaptainTsubasaNC />
            <BlackCloverNC />
          </div>
        </div>
      </div>
    );
  }
}
