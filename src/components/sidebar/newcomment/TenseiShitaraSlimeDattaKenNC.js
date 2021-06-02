import React, { Component } from "react";
import NewComment from "./NewComment";

export default class TenseiShitaraSlimeDattaKenNC extends Component {
  render() {
    return (
      <NewComment
        view="8 triệu"
        src="img/poster/16.png"
        category={
          <div>
            <li>Anime</li>
            <li>Hài hước</li>
            <li>Giả tưởng</li>
            <li>Shonen</li>
          </div>
        }
        name="Tensei shitara Slime Datta Ken"
        href="/tenseira_detail"
      />
    );
  }
}
