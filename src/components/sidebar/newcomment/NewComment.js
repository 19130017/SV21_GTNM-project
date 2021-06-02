import React, { Component } from "react";

export default class NewComment extends Component {
  render() {
    return (
      <div>
        <div className="product_sidebar_comment_item">
          <div className="product_sidebar_comment_item_pic">
            <img src={this.props.src} width="90px" height="120px" alt="" />
          </div>
          <div className="product_sidebar_comment_item_text">
            <ul>{this.props.category}</ul>
            <h5>
              <a href={this.props.href}>{this.props.name}</a>
            </h5>
            <span>
              <i className="fa fa-eye" /> {this.props.view}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
