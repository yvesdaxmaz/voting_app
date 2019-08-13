import React, { Component } from "react";

class Product extends Component {

    handleVote = () => {
        this.props.onVote(this.props.id);
    }

    render() {
        return (
            <div className="item">
                <div className="image">
                    <img src={this.props.productImageUrl} alt={this.props.title}/>
                </div>
                <div className="middle aligned content">
                    <div className="header">
                        <a onClick={ this.handleVote }><i className="large caret up icon"></i></a>
                        {this.props.votes}
                    </div>
                    <div className="description">
                        <a href={this.props.url}>{this.props.title}</a>
                        <p>{this.props.description}</p>
                    </div>
                    <div className="extra">
                        <span>Submitted by:</span>
                        <img className="ui avatar image" src={this.props.submitterAvatarUrl} alt={this.title}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;
