import React, { Component } from "react";
import Silder from "./Silder";

export default class DragonBallSuperSlider extends Component {
  render() {
    return (
      <Silder
        className="carousel-item active"
        src="img/wall/2.png"
        label="Adventure"
        title="Dragon Ball Supper"
        description="Bối cảnh của phim Bảy Viên Ngọc Rồng Siêu Cấp là sau khi Goku đánh bại Majin Buu nguy hiểm, hòa bình đã trở về trái đất một lần nữa.... "
        href="/dragonballsuper_detail"
      />
    );
  }
}
