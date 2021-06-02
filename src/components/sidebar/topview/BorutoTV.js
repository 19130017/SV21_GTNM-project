import React, { Component } from "react";
import TopView from "./TopView";

export default class BorutoTV extends Component {
  render() {
    return (
      <TopView
        className="product_sidebar_view_item set-bg mix day week"
        bg="img/wall/13.png"
        episodes="200/???"
        view="14 milion"
        href="/boruto_detail"
        name="Boruto: Naruto next generations"
      />
    );
  }
}
