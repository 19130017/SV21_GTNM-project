import React, { Component } from "react";
import NewComment from "./NewComment";

export default class CaptainTsubasaNC extends Component {
  render() {
    return (
      <NewComment
        view="9 triệu"
        src="img/poster/10.png"
        category={
          <div>
            <li>Anime</li>
            <li>Thể thao</li>
          </div>
        }
        name="Captain Tsubasa"
        href="/captaintsubasa_detail"
      />
    );
  }
}
