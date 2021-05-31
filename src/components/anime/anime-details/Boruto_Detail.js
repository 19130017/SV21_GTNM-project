import React, { Component } from "react";
import Anime_Detail from "./Anime_Detail";

export default class Boruto_Detail extends Component {
  render() {
    return (
      <div>
        <Anime_Detail 
          bg = "img/trending/boruto.jpg"
          comment = "1200"
          name="Boruto: Naruto next generations "
          author ="Ukyo Kodachi"
          votes = "1.021.213 Votes"
          intro = "Boruto: Naruto Next Generations đề cập tới những biến cố ở làng Lá, khi Boruto thấy cha của mình và các cô chú dốc hết sức để bảo vệ làng. Cậu bé cùng các bạn bè đồng trang lứa bước vào hành trình mới để trở nên mạnh mẽ hơn và kế thừa tinh thần Hỏa Chí đặc trưng của bộ truyện cũ."
          type ="TV Series"
          studio = "Lerche"
          date= "Oct 02, 2017 to ?"
          status = "Airing"
          genre = " Action, Adventure, Fantasy, Magic"
          scores = "7.31 / 1,515"
          rating = "9.5 / 161 times"
          duration = "24 min/ep"
          quality = "HD"
          views = "14 milion"
        />
      </div>
    );
  }
}
