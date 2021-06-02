import React, { Component } from "react";
import Silder from "./Silder";

export default class KumodesugaNanikaSilder extends Component {
  render() {
    return (
      <Silder
        className="carousel-item"
        src="img/wall/11.png"
        label="Adventure"
        title="Kumo desu ga, Nani ka"
        description="Ngày nọ, một cô nữ sinh cấp ba ngồi trong lớp học cùng những học sinh khác và giáo viên, đột ngột cả lớp bị ..."
        href="/kumo_detail"
      />
    );
  }
}
