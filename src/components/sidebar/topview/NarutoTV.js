import React, { Component } from "react";
import TopView from "./TopView";

export default class NarutoTV extends Component {
  render() {
    return (
      <TopView
        className="product_sidebar_view_item set-bg mix month years"
        bg="img/wall/1.png"
        episodes="500/500"
        view="20 milion"
        href="/naruto_details"
        name="Naruto shippuden"
      />
    );
  }
}
