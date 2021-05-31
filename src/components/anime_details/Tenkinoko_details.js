import React, { Component } from "react";
import Anime_details from "./Anime_details";

export default class Tenkinoko_details extends Component {
  render() {
    return (
      <div>
        <Anime_details
          bg="img/trending/tenki-no-ko.jpg"
          comment="11"
          view="11.123.141"
          title="Tenkinoko"
          author="フェイト／ステイナイト, Kishimoto Masashi"
          votes="11.021.213 Votes"
          decription=" Naruto là một chàng trai trẻ đầy nhiệt huyết cũng như rất
          nghịch ngợm, trải qua bao nhiêu thăng trầm, cậu trở thành
          anh hùng của thế giới nhẫn giả và lên chức Hokage làng lá.
          Nhưng câu chuyện này không phải về naruto, mà là về con
          trai của naruto, chính là Boruto."
          type="TV Series"
          studio="Lerche"
          date_aired="Oct 02, 2017 to ?"
          status="Airing"
          genre="Action, Adventure, Fantasy,Magic"
          score="7.31 / 1,515"
          rate="9.5 / 161 times"
          duration="24 min/ep"
          quality="FHD"
        />
      </div>
    );
  }
}
