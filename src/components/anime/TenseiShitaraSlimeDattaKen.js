import React, { Component } from "react";
import Anime from "./Anime";

export default class TenseiShitaraSlimeDattaKen extends Component {
  render() {
    return (
      <Anime
        episodes="OVA 4/23"
        comment="5264"
        view="8 triệu"
        bg="img/trending/tensei-shitara-slime-datta-ken-thumbnail.jpg"
        category={
          <div>
            <li>Anime</li>
            <li>Hài hước</li>
            <li>Giả tưởng</li>
            <li>Shonen</li>
          </div>
        }
        name="Tensei shitara Slime Datta Ken"
        href="/TenseiShitaraSlimeDattaKen_details"
      />
    );
  }
}
