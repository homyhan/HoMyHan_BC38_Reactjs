import React, { Component } from 'react';
import ProductItem from './ProductItem';

class ProductList extends Component {

    renderProduct=()=>{
        return this.props.products.map((item)=>{
            return (
                <div className='col-3' key={item.id}>
                    <ProductItem addToCart={this.props.addToCart} selectedProduct={this.props.selectedProduct} item={item} ></ProductItem>
                </div>
            )
        })
    }
    
    render() {
        return (
            <div style={{paddingBottom: '30%'}} className='row'>
                {this.renderProduct()}
                {/* <div className='col-3'>
                    <ProductItem></ProductItem>
                </div>
                <div className='col-3'>
                    <ProductItem></ProductItem>
                </div> */}
            </div>
        );
    }
}

export default ProductList;