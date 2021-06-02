import React, { Component } from "react";
import NewComment from "./NewComment";

export default class BlackCloverNC extends Component {
  render() {
    return (
      <NewComment
        view="19 triệu"
        src="img/poster/13.png"
        category={
          <div>
            <li>Anime</li>
            <li>Hành động</li>
            <li>Hài hước</li>
            <li>Phiêu lưu</li>
            <li>Shonen</li>
            <li>Phép thuật</li>
          </div>
        }
        name="Black Clover"
        href="/blackclover_detail"
      />
    );
  }
}
