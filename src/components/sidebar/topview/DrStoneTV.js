import React, { Component } from "react";
import TopView from "./TopView";

export default class DrStoneTV extends Component {
  render() {
    return (
      <TopView
        className="product_sidebar_view_item set-bg mix week month"
        bg="img/wall/8.png"
        episodes="24/24"
        view="18 milion"
        href="/drstone-details"
        name="Dr.Stone"
      />
    );
  }
}
