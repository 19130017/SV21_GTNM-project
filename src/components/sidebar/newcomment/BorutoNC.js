import React, { Component } from "react";
import NewComment from "./NewComment";

export default class BorutoNC extends Component {
  render() {
    return (
      <NewComment
        view="14 milion"
        src="img/poster/14.png"
        category={
          <div>
            <li>Anime</li>
            <li>Hành động</li>
            <li>Võ thuật</li>
            <li>Siêu nhiên</li>
            <li>Shonen</li>
          </div>
        }
        name="Boruto: Naruto next generations"
        href="/boruto_detail"
      />
    );
  }
}
