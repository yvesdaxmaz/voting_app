import React, { Component } from "react";

class Product extends Component {
    render() {
        return (
            <div class="item">
                <div className="image">
                    <img src={this.props.productImageUrl} />
                </div>
                <div className="middle aligned content">
                    <div className="header">
                        <a><i className="large caret up icon"></i></a>
                        {this.props.votes}
                    </div>
                    <div className="description">
                        <a href={this.props.url}>{this.props.title}</a>
                        <p>{this.props.description}</p>
                    </div>
                    <div className="extra">
                        <span>Submitted by:</span>
                        <img className="ui avatar image" src={this.props.submitterAvatarUrl} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;
