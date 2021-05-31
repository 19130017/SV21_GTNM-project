import React, { Component } from "react";
import Anime from "./Anime";

export default class EdenZero extends Component {
  render() {
    return (
      <Anime
        episodes="8/???"
        comment="461"
        view="5 triệu"
        bg="img/trending/edens-zero.jpg"
        category={
          <div>
            <li>Anime</li>
            <li>Hành động</li>
            <li>Hài hước</li>
            <li>Shonen</li>
          </div>
        }
        name="Eden zero"
        href="/EdenZero_details"
      />
    );
  }
}
