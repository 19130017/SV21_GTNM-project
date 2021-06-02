import React, { Component } from "react";
import TopView from "./TopView";

export default class OnePieceTV extends Component {
  render() {
    return (
      <TopView
        className="product_sidebar_view_item set-bg mix day week"
        bg="img/wall/6.png"
        episodes="976/???"
        view="30 milion"
        href="/onepiece_detail"
        name="One Piece"
      />
    );
  }
}
