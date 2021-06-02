import React, { Component } from "react";

export default class TopView extends Component {
  render() {
    return (
      <div>
        <div className={this.props.className} data-setbg={this.props.bg}>
          <div className="ep">{this.props.episodes}</div>
          <div className="view">
            <i className="fa fa-eye" /> {this.props.view}
          </div>
          <h5>
            <a href={this.props.href}>{this.props.name}</a>
          </h5>
        </div>
      </div>
    );
  }
}
