import React, { Component } from "react";
import Anime from "./Anime";

export default class FatestaynightMovieIII extends Component {
  render() {
    return (
      <Anime
        episodes="Full/Full"
        comment="169"
        view="3 triệu"
        bg="img/trending/fate-stay-night-movie-heaven-s-feel-iii-spring-song-thumbnail.jpg"
        category={
          <div>
            <li>Anime</li>
            <li>Hành động</li>
            <li>Giả tưởng</li>
            <li>Siêu nhiên</li>
            <li>Shonen</li>
          </div>
        }
        name="Fate/stay night Movie: Heaven's Feel - III. Spring Song"
        href="/FatestaynightMovieIII_details"
      />
    );
  }
}
