import React, { Component } from "react";
import Anime from "./Anime";

export default class OnePiece extends Component {
  render() {
    return (
      <Anime
        episodes="976/???"
        comment="5920"
        view="30 triệu"
        bg="img/trending/one-piece.jpg"
        category={
          <div>
            <li>Anime</li>
            <li>Hành động</li>
            <li>Hài hước</li>
            <li>Shonen</li>
          </div>
        }
        name="One piece"
        href="/onepiece_detail"
      />
    );
  }
}
