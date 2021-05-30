import React, { Component } from 'react'

export default class Anime extends Component {
    render() {
        return (
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product_item">
                    <div
                        className="product_item_pic set-bg"
                        data-setbg={this.props.bg}
                    >
                        <div className="ep">{this.props.episodes}</div>
                        <div className="comment">
                            <i className="fa fa-comments" /> {this.props.comment}
                        </div>
                        <div className="view">
                            <i className="fa fa-eye" /> {this.props.view}
                        </div>
                    </div>
                    <div className="product_item_text">
                        <ul>
                            {this.props.category}
                        </ul>
                        <h5>
                            <a href={this.props.href}>{this.props.name}</a>
                        </h5>
                    </div>
                </div>
            </div>
        )
    }
}
