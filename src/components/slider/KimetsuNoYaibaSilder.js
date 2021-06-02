import React, { Component } from "react";
import Silder from "./Silder";

export default class KimetsuNoYaibaSilder extends Component {
  render() {
    return (
      <Silder
        className="carousel-item"
        src="img/wall/10.png"
        label="Adventure"
        title="Kimetsu No Yaiba Mugen Ressha"
        description="Demon Slayer: Thanh Gươm Diệt Quỷ còn có tên gọi khác là Lưỡi Gươm Diệt ....."
        href="/kimetsu_detail"
      />
    );
  }
}
