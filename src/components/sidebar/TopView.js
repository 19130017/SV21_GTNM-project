import React, { Component } from 'react'

export default class TopView extends Component {
    render() {
        return (
            <div>
                 <div
                className="product_sidebar_view_item set-bg mix day years"
                data-setbg={this.props.bg}
              >
                <div className="ep">{this.props.ep}</div>
                <div className="view">
                  <i className="fa fa-eye" /> {this.props.view}
                </div>
                <h5>
                  <a href={this.props.href}>{this.props.title}</a>
                </h5>
              </div>
            </div>
        )
    }
}
