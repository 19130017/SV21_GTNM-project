import React, { Component } from "react";
import TopView from "./TopView";

export default class DragonBallSuperTV extends Component {
  render() {
    return (
      <TopView
        className="product_sidebar_view_item set-bg mix month years"
        bg="img/wall/2.png"
        episodes="131/131"
        view="11 milion"
        href="/dragonballsuper_details"
        name="Dragon Ball Super"
      />
    );
  }
}
