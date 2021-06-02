import React, { Component } from "react";
import Silder from "./Silder";

export default class OnePieceSlider extends Component {
  render() {
    return (
      <Silder
        className="carousel-item"
        src="img/wall/6.png"
        label="Adventure"
        title="One Piece"
        description="Phim Đảo Hải Tặc mở đầu câu chuyện bằng cảnh xử tử vua hải tặc Gol D. Roger. Trước khi chết ông đã tiết lộ rằng mình có một kho báu được giấu ngoài biển. Nếu ai tìm thấy kho báu thì chúng sẽ thuộc về người..."
        href="/onepiece_detail"
      />
    );
  }
}
