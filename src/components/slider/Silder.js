import React, { Component } from "react";

export default class Silder extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div>
          <img src={this.props.src} className="hero_items" />

          <div className="hero_text">
            <div className="label">{this.props.label}</div>
            <h2>{this.props.title}</h2>
            <p>{this.props.description}</p>
            <a href={this.props.href}>
              <span>Watch Now</span> <i className="fa fa-angle-right" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
