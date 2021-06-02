import React, { Component } from "react";
import NewComment from "./NewComment";

export default class OnePieceNC extends Component {
  render() {
    return (
      <NewComment
        view="30 triệu"
        src="img/poster/2.png"
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
