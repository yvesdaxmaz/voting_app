import React, { Component } from 'react';
import Product from "./Product";
import { products } from "./seed";

class ProductList extends Component {
    render() {
        const filteredProducts = products.sort((a, b) => (b.votes - a.votes));
        const productComponents = filteredProducts.map((product) => (
            <Product 
                key={`product-${product.id}`}
                id={product.id}
                title={product.title}
                description={product.description}
                url={product.url}
                votes={product.votes}
                submitterAvatarUrl={product.submitterAvatarUrl}
                productImageUrl={product.productImageUrl}
            />
        ));

        return (
            <div className="ui unstackable items">
                {productComponents}
            </div>
        )
    }
}

export default ProductList;
